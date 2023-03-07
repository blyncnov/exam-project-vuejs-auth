<template>
    <div class="card__container">
        <div class="card__product__image__container">
            <div class="product__image">
                <img src="https://i5.walmartimages.com/asr/8e565e0d-022c-4063-bd5f-fc17d476c375_1.058a76b4b5df2fb8112ef12a6b2aa87c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
                    alt="chair">
            </div>
        </div>
        <div class="card__product__image__Details">
            <div class="title">
                <h2>Monet Armchair</h2>
            </div>
            <div class="descriptions">
                <div class="description_container">
                    <li>Material</li>
                    <li>Velvet</li>
                </div>
                <div class="description_container">
                    <li>Item Dimension</li>
                    <li>32 x 32 x 37 cm</li>
                </div>
                <div class="description_container">
                    <li>Item Weight</li>
                    <li>8.2b Kilograms</li>
                </div>
            </div>
            <div class="price">
                <div class="price-tag">
                    <h1>$850</h1>
                    <div class="quantity">
                        <div class="quantity_grid">
                            <button>-</button>
                            <h4>1</h4>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add-to-cart">
                <button>Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<style lang="scss" scoped>
/* Color Theme Swatches in Hex */
$primary-color: #A7D9D0;
$secondary-color: #11402F;
$secondary-pro-color: #064025;
$light-green: #79A637;
$custom-white: #F2F1E9;

.card__container {
    border-radius: 3px;
    background-color: $custom-white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.card__product__image__container {
    width: 100%;
    height: 200px;
    background-color: transparent;
    border-radius: 3px;
    padding: 1em 1em;

    .product__image {
        border: 1px solid $secondary-pro-color;
        border-radius: 3px;
        padding: .5em;
        background-color: white;
        height: 100%;
        width: 100%;

        img {
            max-width: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

.card__product__image__Details {
    width: 100%;
    padding: 1em;
    color: $secondary-color;

    .descriptions {
        width: 100%;

        .description_container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .price {
        margin: 2em 0;

        .price-tag {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h1 {
                font-weight: 500;
                font-size: 30px;
            }

            .quantity {
                width: auto;

                .quantity_grid {
                    display: flex;
                    gap: 1em;
                    align-items: center;

                    button {
                        all: unset;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: transparent;
                        border: 2px solid $secondary-pro-color;
                        border-radius: 50%;
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .add-to-cart {
        button {
            width: 100%;
            padding: 1em 2em;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $custom-white;
            background-color: $secondary-color;
            border: 2px solid $secondary-color;
            border-radius: 4px;
            cursor: pointer;
            transition: all .4s ease-in;

            &:active,
            &:hover {
                color: white;
                background-color: #135c41;
                border: 2px solid#135c41;
            }
        }
    }
}
</style>  

