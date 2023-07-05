import express from "express";
import _ from "lodash";
const router = express.Router();
import catchError from '../utils.js';
import Catalog from "../models/catalog.model.js";


router.route("/:lspId")
  .get(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId } = req.params;
      const catalogList = await Catalog.findById(lspId);
      res.json({
        success: true,
        catalogList
      });
    });
  })

  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId } = req.params;
      const  newCatalog  = req.body;

      let catalog = await Catalog.findById(lspId);
      if (!catalog) {
       
        const newLspCatalog = new Catalog({ _id: lspId,  ...newCatalog });
        newLspCatalog.save();

        return res.status(201).json({
          success: true,
          newLspCatalog
        })
      }
    
      catalog = _.extend(catalog, {
        items: _.concat(catalog.items, newCatalog.items)
      });
      await catalog.save();
      res.status(201).json({
        success: true,
        catalog
      })
    });
  });


router.route("/:lspId/:itemId")
  .get(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId, itemId } = req.params;
      const catalogs = await Catalog.findById(lspId);
      const item = _.find(catalogs.items, (item) => item._id.toString() === itemId);

      return res.json({
        success: true,
        item
      });
    });
  })

  .post(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId, itemId } = req.params;
      const { itemUpdate } = req.body;
      let catalog = await Catalog.findById(lspId);
      catalog = _.extend(catalog, {
        items: _.map(catalog.items, itemObj =>
          itemObj._id.toString() === itemId ?
            _.extend(itemObj, { ...itemUpdate })
            :
            itemObj
        )
      });
      catalog.save();
      return res.json({
        success: true,
        catalog
      });
    });
  })


  .delete(async (req, res, next) => {
    catchError(next, async () => {
      const { lspId, itemId } = req.params;
      let catalog = await Catalog.findById(lspId);

      catalog = _.extend(catalog, {
        items: _.filter(catalog.items, ({ _id }) =>
          _id.toString() !== itemId)
      });

      catalog.save();
      res.json({
        success: true,
        catalog
      });
    });
  })

export default router;


