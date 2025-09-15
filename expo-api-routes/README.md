# BACKEND + DEPLOY com React Native, API ROUTES e EXPO ROUTER
**1.Criação do Projeto React Native**:
- npx create-expo-app --template
- Escolher o "navigate(TypeScript)" - (Já inclui as rotas)
- Escolher o nome do Projeto
- Abrimos no IDE
**2.Exclusão de Pastas**:
######  Apagar pasta para começar o projeto do ZERO.
- App
- Components
- Constants    
**3.Criação de novas Pastas:**
###### Criar Novas pasta com estrutura
- Clicar no file, e digitar o caminho: src/app/index.tsx, criar um pasta, com a pasta App que tera o arquivo index.tsx.
- Precisar acrescentar no arquivo "tsconfig.json", o "src" que foi adicionado:
```
paths": {
      "@/*": [
        "./src/*"
      ]
    }
```
**4.Ajuste de configuração:**    
###### No "app.json", dentro de "web" na propriedade "output", alterar de "static" para "server".
ex: "output": "server"

**5.Criar e acessar endpoint:**    
-Criar um arquivo de logica de backend, dentro do app colocar:
``` user+api.ts ```
###### esse arquivo apenas sera utilizado para a logica:

###### GET
```
 export async function GET() {
    return new Response(
        JSON.stringify({
        message: "Essa é uma resposta do back-end mobile!"
    }),
);
}
```
- No terminal conseguesse encontrar o numero da porta, com ela podemos visualizar o retorno do backend, trazendo (GET) a mensagem, pelo: localhost:numeroPorta/nomeDoArquivo

###### POST
```
export async function POST(request: Response) {
const { email, password} = await request.json()

    return new Response(
        JSON.stringify({
       email,
       password
    }),
);
}
```
**6.Extensao de API:**  
####### Thunder Client é um extensão do VSC, utilizada para fazer requisições, incluindo outros metodos além do GET.
1. Instalar no VSC > extensoes > thunder Client
2. Clicar no Icone do Thunder Client > new request
3. Mudar o metodo desejado: ex: GET para POST
4. Trocar o endereçamento para o que esta sendo utilizado: ex: http://localhost/numeroPorta/nomeDoArquivo
5. No campo **Body**, criar o valores da consulta:
```
{
  "email": "maria@gmail.com",
  "password": "123"
}
```
> clicar **send** para enviar
6.Irá retornar a requisição feita.

**7. Pacote AXIOS:**  
####### Axios é uma biblioteca JavaScript usada para fazer requisições HTTP (como GET, POST, PUT, DELETE) a APIs ou servidores.
```
npm i axios
``` 
1. dentro da pasta src > criar a pasta server e acrescentar o arquivo api.ts
2. no arquvio api.ts criamos a estrutura
```
import axios from "axios";
export const api = axios.create({
    baseURL: "http://localhost:numeroPorta"
})
```
3. Importar o axio (Api.ts) ao index:
```
import {api} from "@/server/api" 
```
4. Cria o metodo post, passando por parametro para api, os valores desejado, assim retornando atraves da codição:
```
// Home
async function handleSignIn() {
    try {
      const response = await api.post("/user", {
        email,
        password,
      })

      alert("Olá " + response.data.name)
    } catch (error) {
      if (isAxiosError(error)) {
        return alert(error.response?.data)
      }

      alert("Não foi possível entrar.")
    }
  }
  ```
  **7. DEPLOY:**  
#######
1. utilizar a documentação do Expo api route
(https://docs.expo.dev/router/reference/api-routes/)

2. procurar por **Vercel**.

3. na raiz do projeto criar : api/index.js > copiar e colar o codigo da documentação.

4. criar um vercel.json na raiz do projeto > copiar e colar o codigo da documentação.

5.Criar um build do nosso projeto web para conseguir fazer o deploy. Acessar o **package.json** e criar um script novo:
```
"scripts": {
    //outros codigos aqui
    "vercel-build": "expo export -p web"
  },
```
6. no terminal, sera executado o codigo da build, apos finalizar seguir proximmo passo: 

```
npm run verce-build 
```
7.no terminal, Instalar na maquina a vercel de forma global
```
npm install vercel -g

```
8. Apos, executar o comando para configurar o projeto:
```
vercel deploy
```
9. Atulizar o arquivo server > api.ts, alterar o localhost ou numero da porta para o link do vercel
ex:"https://expo-api-routes.vercel.app"
