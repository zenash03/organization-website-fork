import * as z from 'zod';

export const SignInValidation = z.object({
    email: z.string().nonempty("Email tidak boleh kosong").email("Email harus valid"),
    password: z.string().nonempty("Password tidak boleh kosong"),
})