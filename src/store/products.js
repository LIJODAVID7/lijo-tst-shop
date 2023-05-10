
const state = {
    products : [],
    product_details :[],
    dialog: false
  }
const getters = {
    PRODUCTS : state => {
        return state.products
    },
    PRODUCT_DETAILS : state => {
        return state.product_details
    },
    DIALOG : state => {
        return state.dialog
    }
  }
const mutations = {
    SAVE_PRODUCTS : (state,payload) => {
        state.products = payload
    },
   SET_PRODUCT_DETAILS : (state,payload) => {
        state.product_details = payload
        state.dialog = true
    },
    CLOSE_DIALOG :(state) =>{
        state.dialog = false
    }
  }
const actions = {
    FETCH_PRODUCTS : async(context,payload) => {
        let products = [
            {
                code : "001",
                name : "Camo Jacket",
                display_picture : "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/product001.jpeg",
                mrp : "2999",
                price : "2499",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus deleniti facilis soluta maxime dolorum ratione aliquid vitae exercitationem. Blanditiis, sed velit. Perferendis inventore maiores suscipit facilis excepturi officiis ea?"
            },
            {
                code : "002",
                name : "Wind Cheater Jacket",
                display_picture : "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/product002.jpeg",
                mrp : "2499",
                price : "2299",
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus deleniti facilis soluta maxime dolorum ratione aliquid vitae exercitationem. Blanditiis, sed velit. Perferendis inventore maiores suscipit facilis excepturi officiis ea?"
            },
            {
                code : "003",
                name : "Sweatshirt",
                display_picture : "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/product003.jpeg",
                mrp : "1999",
                price : "1499",
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus deleniti facilis soluta maxime dolorum ratione aliquid vitae exercitationem. Blanditiis, sed velit. Perferendis inventore maiores suscipit facilis excepturi officiis ea?"
            },
            {
                code : "004",
                name : "Distressed Hoodie",
                display_picture : "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/product004.jpeg",
                mrp : "1899",
                price : "1599",
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus deleniti facilis soluta maxime dolorum ratione aliquid vitae exercitationem. Blanditiis, sed velit. Perferendis inventore maiores suscipit facilis excepturi officiis ea?"
            },
            {
                code : "005",
                name : "Neon Jacket",
                display_picture : "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/product005.jpeg",
                mrp : "2499",
                price : "1999",
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus deleniti facilis soluta maxime dolorum ratione aliquid vitae exercitationem. Blanditiis, sed velit. Perferendis inventore maiores suscipit facilis excepturi officiis ea?"
            },
            {
                code : "006",
                name : "Camo shirt",
                display_picture : "https://estrrado-machine-test.s3.ap-south-1.amazonaws.com/product006.jpeg",
                mrp : "1499",
                price : "1399",
                description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus deleniti facilis soluta maxime dolorum ratione aliquid vitae exercitationem. Blanditiis, sed velit. Perferendis inventore maiores suscipit facilis excepturi officiis ea?"
            }
        ]
        context.commit("SAVE_PRODUCTS",products)
    },
   SET_PRODUCT_DETAILS : async(context,payload) => {
        
        context.commit("SET_PRODUCT_DETAILS",payload)
    },
    CLOSE_DIALOG : async(context,payload) => {
        context.commit("CLOSE_DIALOG")
    }
}

export default{
    state,actions,mutations,getters
}
