export interface Dish {
    id?: string;
    title: string;
    price: number;
    img: string;

}
export interface Order {
    id: string;
    items: Record<string, number>;
    /*
      Например:
      {
        [dishId1]: 2, // количество
      }
    */
}