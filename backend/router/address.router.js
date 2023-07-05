import express from "express";
import _ from "lodash";
const router = express.Router();
import catchError from '../utils.js';
import { LspAddress, userAddress } from "../models/address.model.js";

router.route("/:userId")
  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { userId } = req.params;
      const { newAddress, isLsp } = req.body;
      let address;
      
      if (isLsp) {
        address = await LspAddress.findById(userId);
        if (!address) {
          const newLspAddress = new LspAddress({ _id: userId, addressList: [{ ...newAddress }] });
          await newLspAddress.save();
          address = newLspAddress;
        }
      } else {
        address = await userAddress.findById(userId);
        if (!address) {
          const newUserAddress = new userAddress({ _id: userId, addressList: [{ ...newAddress }] });
          await newUserAddress.save();
          address = newUserAddress;
        }
      }

      address = _.extend(address, {
        addressList: _.concat(address.addressList, { ...newAddress })
      });
      await address.save();

      res.status(201).json({
        success: true,
        address: address.addressList[address.addressList.length - 1] 
      });
    });
  });


  router.route("/:userId")
  .get(async (req, res, next)=>{
    catchError(next, async () => {
      const { userId } = req.params;
      let data = await userAddress.findById(userId)
      if(!data) {
        data = await LspAddress.findById(userId)
      }
      return res.json({
        success: true,
        address: data
      });
    })
  })
  router.route("/:userId/:addressId")
  .get(async (req, res, next) => {
    catchError(next, async () => {
      const { userId, addressId } = req.params;
      const { isLsp } = req.query;
  
      let address;
      if (isLsp) {
        address = await LspAddress.findById(userId);
      } else {
        address = await userAddress.findById(userId);
      } 
      const targetAddress = _.find(address.addressList, (address) => address._id.toString() === addressId);
      return res.json({
        success: true,
        address: targetAddress
      });
    });
  })
  .put(async (req, res, next) => {
    catchError(next, async () => {
      const { userId, addressId } = req.params;
      const { isLsp } = req.query;
      const { updatedAddress } = req.body;
      let address;
      if (isLsp) {
        address = await LspAddress.findById(userId);
      } else {
        address = await userAddress.findById(userId);
      }
  
      const index = _.findIndex(address.addressList, (address) => address._id.toString() === addressId);
      if (index === -1) {
        return res.status(404).json({
          success: false,
          message: "Address not found"
        });
      }

      const updatedAddressObj = _.extend(address.addressList[index], updatedAddress);
      address.addressList.set(index, updatedAddressObj);
      await address.save();
      return res.json({
        success: true,
        message: address
      });
    });
  })
  .delete(async (req, res, next) => {
    catchError(next, async () => {
      const { userId, addressId } = req.params;
      const { isLsp } = req.query;
  
      let address;
      if (isLsp) {
        address = await LspAddress.findById(userId);
      } else {
        address = await userAddress.findById(userId);
      }
  
      const index = _.findIndex(address.addressList, (address) => address._id.toString() === addressId);
      if (index === -1) {
        return res.status(404).json({
          success: false,
          message: "Address not found"
        });
      }
  
      address.addressList.splice(index, 1);
      await address.save();
  
      return res.json({
        success: true,
        message: "Address deleted successfully"
      });
    });
  });
  
export default router;