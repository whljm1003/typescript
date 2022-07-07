{
  /*
   *	Record type Page와 PageInfo를 묶어 줌.
   *	type Record<K extends keyof any, T> = {[P in K]: T };
   */

  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contack";

  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contack: { title: "Contack" },
  };

  type Product = "cat" | "dog";
  type NewProduct = Capitalize<Product>; // "Cat" | "Dog"
}
