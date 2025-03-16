// export interface Flight {
//   uuid: string;
//   data: {
//     id: string;
//     from: string;
//     to: string;
//     date: string;
//     luggage: number;
//     price: number;
//   };
// }

export interface Flight {
  uuid: string;
  data: {
    id: number;
    from: string;
    to: string;
    date: string;
    luggage: number;
    price: number;
  };
}

export const Flights: Flight[] = [
  {
    uuid: '1',
    data: {
      id: 1,
      from: 'New York',
      to: 'Los Angeles',
      date: '2023-09-25',
      luggage: 20,
      price: 500,
    },
  },
];
