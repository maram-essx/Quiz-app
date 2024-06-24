export namespace Auth {
    export interface ILoginReq{
        email:string,
        password:string
      }
      export interface ILoginRes {
        _id: string
        first_name: string
        last_name: string
        email: string
        status: string
        role: string
      }
}
