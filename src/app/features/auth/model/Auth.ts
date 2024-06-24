export namespace Auth {
    export interface ILoginReq{
        email:string,
        password:string
      }

      export interface ILoginRes {
        message: string
        data: ILoginData
      }
      
      export interface ILoginData {
        accessToken: string
        refreshToken: string
        profile: IProfile
      }
      
      export interface IProfile {
        _id: string
        first_name: string
        last_name: string
        email: string
        status: string
        role: string
      }

      export interface IResetPasswordReq{
        opt:number,
        email:string,
        password:string
      }
      export interface IResetPasswordRes {
        message: string,
        data: IResetPasswordData,
      }
      
      export interface IResetPasswordData {
        _id: string,
        first_name: string
        last_name: string
        email: string,
        status: string,
        role: string,
      }
}
