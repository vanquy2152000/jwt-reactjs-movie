import privateClient from '../client/private.client'
import publicClient from '../client/public.client'

const userEndpoints = {
    signin: "user/signin",
    signup: "user/signup",
    getInfo: "user/info",
    passwordUpdate: "user/update-password"
}

const userApi = {
    // member object ( vd : var obj = {name:"nhan",age:22})
    signin: async ({ username, password }) => {
        try {
            const response = await publicClient.post(
                userEndpoints.signin,
                { username, password }
            )

            return { response }
        } catch (err) {
            return { err }
        }
    },
    signup: async ({ username, password, confirmNewPassword, displayName }) => {
        try {
            const response = await publicClient.post(
                userEndpoints.signup,
                { username, password, confirmNewPassword, displayName }
            )

            return { response }
        } catch (err) {
            return { err }
        }
    },
    getInfo: async () => {
        try {
            const response = await privateClient.get(userEndpoints.getInfo)

            return { response }
        } catch (err) {
            return { err }
        }
    },
    passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
        try {
            const response = await privateClient.put(
                userEndpoints.signup,
                { password, newPassword, confirmNewPassword }
            )

            return { response }
        } catch (err) {
            return { err }
        }
    },
}

export default userApi;