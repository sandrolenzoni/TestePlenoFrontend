import { z } from "zod";
import type { User } from "./data/Usuarios";

export const loginFormSchema = z.object({
  email: z.string().nonempty({ message: "E-mail é obrigatório" }).email({ message: "Por favor, inserir um e-mail válido." }),
  password: z.string().nonempty({ message: "A senha é obrigatória" })
});


export type loginFormType = z.infer<typeof loginFormSchema>;

export const fetchMockLogin = async (loginData: loginFormType): Promise<number | User> => {
  const response = await fetch("http://localhost:3001/usuarios");
  let usuarioEncontrado: User | number = 404;
  if (response.status == 200) {
    const data = await response.json();
    const usuarios: User[] = data['usuarios'];
    usuarios.map(usuario => {
      if (usuario.email.trim().toLocaleLowerCase() === loginData.email.trim().toLocaleLowerCase() && usuario.password.trim().toLocaleLowerCase() === loginData.password.trim().toLocaleLowerCase()) {
        usuarioEncontrado = usuario;
      }
    });
  }
  return usuarioEncontrado;

}
// export function ResponseLogin(request: ILogin) {
//   console.log(request);
//   return {
//     status: 200,
//     data: {
//       mensagem: "LOGIN EFETUADO COM SUCESSO!",
//     },
//   };
// }
