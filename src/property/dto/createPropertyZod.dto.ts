import {z} from "zod"

export const createPropertySchema = z.object({
    name: z.string().min(5).max(30),
    description: z.string().min(20).max(30),
    area: z.number().positive()
})

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>