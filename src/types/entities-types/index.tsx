import { colors } from "../../config/colors"

export type Theme ={
    dark:boolean
    colors: typeof colors
  }

  export type SignUpData ={
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