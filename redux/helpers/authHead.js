export default function authHead(getState) {
    const token = getState().user.user? getState().user.user.token: ''
    return {
        headers: {
        'x-access-token': token
        }
    }
}