import { printArrow } from "./solution";

describe(`Rendezvous with Cassidoo: printArrow`, () => {
  test(`it prints left arrows correctly`, () => {
    expect(printArrow("left", 5)).toMatchInlineSnapshot(`
      "    *
         * 
        *  
       *   
      *    
       *   
        *  
         * 
          *"
    `);
    expect(printArrow("left", 2)).toMatchInlineSnapshot(`
      " *
      * 
       *"
    `);
    expect(printArrow("left", 1)).toMatchInlineSnapshot(`"*"`);
  });

  test("it prints right arrows correctly", () => {
    expect(printArrow("right", 3)).toMatchInlineSnapshot(`
      "*  
       * 
        *
       * 
      *  "
    `);
    expect(printArrow("right", 1)).toMatchInlineSnapshot(`"*"`);
    expect(printArrow("right", 5)).toMatchInlineSnapshot(`
      "*    
       *   
        *  
         * 
          *
         * 
        *  
       *   
      *    "
    `);
  });
});
