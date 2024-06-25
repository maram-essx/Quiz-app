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

      export interface IRegister {
        first_name: string
        last_name: string
        email: string
        password: string
        role: string
      }

      export interface IRegisterRes {
        message: string
        data: IRegisterData
      }

      export interface IRegisterData {
        first_name: string
        last_name: string
        email: string
        status: string
        role: string
        _id: string
        updatedAt: string
        createdAt: string
        __v: number
      }

}
