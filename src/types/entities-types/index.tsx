import { colors } from "../../config/colors"

export type Theme ={
    dark:boolean
    colors: typeof colors
  }

  export type UserData ={
    id?:string,
    userId?:string,
    firstName?: string,
    familyName?: string,
    email: string,
    password: string,
    confirmPassword?: string,
    birth?: string,
    gender?: string,
    country?: string,
    city?: string,
    travelCount?: string,
    travelExpense?: string,
    travelWith?: string,
    interests?:string[]

  }
  export type TripData ={
    id?:string,
    userId?:string,
    tripDestination?: string,
    destination?: string,
    vehicle?: string,
    hotelName?: string,
    hotelUrl?: string,
    description?: string,
    tripCost?: string,
    tripImage?: string,

  }