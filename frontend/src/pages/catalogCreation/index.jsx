import { Navbar, SpecialityTag } from "../../components";
import { Button, CardBottom, CardTop, CardWrapper, Heading, HeadingWrapper, PageWrapper } from "./catalog";

export default function CatalogPage() {
  return (
    <div>
      <Navbar/>
      <Heading>Catalogue selection </Heading>
      <PageWrapper>
        <CardWrapper>
          <CardTop>
            <img src="/assets/catalouge/kurta.svg" alt="clothes" />
            <span>Jeans</span>
            <Button>Add</Button>
          </CardTop>
          <CardBottom >
          <HeadingWrapper>
            <span>Services</span>
            <span>Rate</span>
          </HeadingWrapper>
          <ul>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag
              img="DRY CLEANING.svg"
              text="Dry Cleaning"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>              
            <input type="checkbox" />
            <SpecialityTag
              img="WASH DRY FOLD.svg"
              text="Wash, Dry & Fold"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
        </ul>
          </CardBottom>
        </CardWrapper>
        <CardWrapper>
          <CardTop>
            <img src="/assets/catalouge/kurta.svg" alt="clothes" />
            <span>Jeans</span>
            <button>Add</button>
          </CardTop>
          <CardBottom >
          <HeadingWrapper>
            <span>Services</span>
            <span>Rate</span>
          </HeadingWrapper>
          <ul>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag
              img="DRY CLEANING.svg"
              text="Dry Cleaning"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>              
            <input type="checkbox" />
            <SpecialityTag
              img="WASH DRY FOLD.svg"
              text="Wash, Dry & Fold"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
        </ul>
          </CardBottom>
        </CardWrapper>
        <CardWrapper>
          <CardTop>
            <img src="/assets/catalouge/kurta.svg" alt="clothes" />
            <span>Jeans</span>
            <button>Add</button>
          </CardTop>
          <CardBottom >
          <HeadingWrapper>
            <span>Services</span>
            <span>Rate</span>
          </HeadingWrapper>
          <ul>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag
              img="DRY CLEANING.svg"
              text="Dry Cleaning"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>              
            <input type="checkbox" />
            <SpecialityTag
              img="WASH DRY FOLD.svg"
              text="Wash, Dry & Fold"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
        </ul>
          </CardBottom>
        </CardWrapper>
        <CardWrapper>
          <CardTop>
            <img src="/assets/catalouge/kurta.svg" alt="clothes" />
            <span>Jeans</span>
            <button>Add</button>
          </CardTop>
          <CardBottom >
          <HeadingWrapper>
            <span>Services</span>
            <span>Rate</span>
          </HeadingWrapper>
          <ul>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag
              img="DRY CLEANING.svg"
              text="Dry Cleaning"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>              
            <input type="checkbox" />
            <SpecialityTag
              img="WASH DRY FOLD.svg"
              text="Wash, Dry & Fold"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
        </ul>
          </CardBottom>
        </CardWrapper>
        <CardWrapper>
          <CardTop>
            <img src="/assets/catalouge/kurta.svg" alt="clothes" />
            <span>Jeans</span>
            <button>Add</button>
          </CardTop>
          <CardBottom >
          <HeadingWrapper>
            <span>Services</span>
            <span>Rate</span>
          </HeadingWrapper>
          <ul>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag
              img="DRY CLEANING.svg"
              text="Dry Cleaning"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>
            <input type="checkbox" />
            <SpecialityTag img="SHOES.svg" text="Shoe Cleaning" small="true" />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
          <li>
            <div>              
            <input type="checkbox" />
            <SpecialityTag
              img="WASH DRY FOLD.svg"
              text="Wash, Dry & Fold"
              small="true"
            />
            </div>
            <input type="number"  placeholder="₹"/>
          </li>
        </ul>
          </CardBottom>
        </CardWrapper>
      </PageWrapper>
        <Button>Done</Button>
    </div>
  )
}
