const baseUrl = "https://dummyjson.com";

export const urls = {
    users: {
        allUsers: `${baseUrl}/users?limit=100`,
    },
    carts: {
        allCarts: `${baseUrl}/carts?limit=50`,
        userCartsById: (id: number) => {
            return `${baseUrl}/carts/user/${id}`;
        }
    }
};