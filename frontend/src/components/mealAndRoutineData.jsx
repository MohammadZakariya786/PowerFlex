// src/data/mealAndRoutineData.js

// Professional fitness-focused meal & routine data for 15- and 30-day plans
export const mealData = {
  weightLoss: {
    veg: {
      15: [
        { name: 'Overnight Oats', img: 'https://plus.unsplash.com/premium_photo-1668615553297-9e808dcb9e49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Oats soaked in almond milk with chia seeds and berries.', nutrients: 'Protein: 8g, Carbs: 40g, Fiber: 8g' },
        { name: 'Paneer Bhurji Wrap', img: 'https://img.freepik.com/free-photo/flat-lay-pakistani-food-arrangement_23-2148825110.jpg?t=st=1747645743~exp=1747649343~hmac=6e3a49bf249c97a4ed947d0439a92b29f69bd5ccf816dd48a41697e70c14b48e&w=1380', description: 'Scrambled paneer & veggies in a whole-wheat roti.', nutrients: 'Protein: 15g, Carbs: 25g, Fat: 10g' },
        { name: 'Protein Smoothie', img: 'https://thebigmansworld.com/wp-content/uploads/2024/09/protein-shakes.jpg', description: 'Banana, spinach, and whey protein shake.', nutrients: 'Protein: 25g, Carbs: 30g, Fat: 5g' },
        { name: 'Avocado Toast', img: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Whole-grain bread with mashed avocado & pumpkin seeds.', nutrients: 'Protein: 6g, Carbs: 30g, Fat: 15g' },
        { name: 'Chickpea Pancakes', img: 'https://greenkitchenstories.com/wp-content/uploads/2018/02/Green_vegan_chickpea_pancake-800x533.jpg', description: 'Besan pancakes with fresh herbs.', nutrients: 'Protein: 12g, Carbs: 25g, Fiber: 8g' },
        { name: 'Quinoa Porridge', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chia-porridge-f29c692-scaled-e1676466734114.jpg', description: 'Quinoa cooked in milk with nuts.', nutrients: 'Protein: 10g, Carbs: 35g, Fat: 7g' }
      ],
      30: [
        { name: 'Overnight Oats', img: 'https://plus.unsplash.com/premium_photo-1668615553297-9e808dcb9e49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',description: 'Oats  soaked in almond milk with chia seeds and berries.', nutrients: 'Protein: 8g, Carbs: 40g, Fiber: 8g' },
        { name: 'Paneer Bhurji Wrap', img: 'https://img.freepik.com/free-photo/flat-lay-pakistani-food-arrangement_23-2148825110.jpg?t=st=1747645743~exp=1747649343~hmac=6e3a49bf249c97a4ed947d0439a92b29f69bd5ccf816dd48a41697e70c14b48e&w=1380', description: 'Scrambled paneer & veggies in a whole-wheat roti.', nutrients: 'Protein: 15g, Carbs: 25g, Fat: 10g' },
        { name: 'Protein Smoothie', img: 'https://thebigmansworld.com/wp-content/uploads/2024/09/protein-shakes.jpg', description: 'Banana, spinach, and whey protein shake.', nutrients: 'Protein: 25g, Carbs: 30g, Fat: 5g' },
        { name: 'Avocado Toast', img: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Whole-grain bread with mashed avocado & pumpkin seeds.', nutrients: 'Protein: 6g, Carbs: 30g, Fat: 15g' },
        { name: 'Chickpea Pancakes', img: 'https://greenkitchenstories.com/wp-content/uploads/2018/02/Green_vegan_chickpea_pancake-800x533.jpg', description: 'Besan pancakes with fresh herbs.', nutrients: 'Protein: 12g, Carbs: 25g, Fiber: 8g' },
        { name: 'Quinoa Porridge', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chia-porridge-f29c692-scaled-e1676466734114.jpg', description: 'Quinoa cooked in milk with nuts.', nutrients: 'Protein: 10g, Carbs: 35g, Fat: 7g' }
      ]
    },
    nonveg: {
      15: [
        { name: 'Egg & Veggie Omelette', img: 'https://static.vecteezy.com/system/resources/previews/015/933/757/non_2x/omelette-chapati-roll-or-franky-indian-popular-quick-healthy-recipe-for-kid-s-tiffin-or-lunch-box-free-photo.jpg', description: '3 eggs with spinach & bell peppers.', nutrients: 'Protein: 18g, Carbs: 2g, Fat: 12g' },
        { name: 'Smoked Salmon Bagel', img: 'https://media.istockphoto.com/id/1281029670/photo/poppy-seed-bagel-with-cheese-cream-smoked-salmon-and-arugula.jpg?s=612x612&w=0&k=20&c=Fj_QYGzY91lnOkUmpE32TCE9l41s3wedsfDYBryTJtg=', description: 'Whole-grain bagel, cream cheese, salmon.', nutrients: 'Protein: 20g, Carbs: 40g, Fat: 10g' },
        { name: 'Turkey Sausage & Eggs', img: 'https://media.istockphoto.com/id/598144908/photo/grilled-chicken-sausages-and-burgers.jpg?s=612x612&w=0&k=20&c=Cn65Xv9iWElTAgAWutAFvIDWI_4BBJVLUIto29fZJAo=', description: '2 eggs with turkey sausage.', nutrients: 'Protein: 22g, Carbs: 3g, Fat: 15g' },
        { name: 'Greek Yogurt Parfait', img: 'https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-with-fruit.jpg', description: 'Yogurt with nuts and honey.', nutrients: 'Protein: 18g, Carbs: 25g, Fat: 8g' },
        { name: 'Chicken Hash', img: 'https://eatthegains.com/wp-content/uploads/2022/10/Chicken-Hash-10.jpg', description: 'Shredded chicken with potatoes.', nutrients: 'Protein: 20g, Carbs: 30g, Fat: 10g' },
        { name: 'Tuna Avocado Toast', img: 'https://chickenofthesea.com/wp-content/uploads/2022/04/Tuna-Avocado-Toast-1440x1200.jpg', description: 'Tuna salad on whole-grain toast.', nutrients: 'Protein: 22g, Carbs: 25g, Fat: 12g' }
      ],
      30: [
        { name: 'Egg & Veggie Omelette', img: 'https://static.vecteezy.com/system/resources/previews/015/933/757/non_2x/omelette-chapati-roll-or-franky-indian-popular-quick-healthy-recipe-for-kid-s-tiffin-or-lunch-box-free-photo.jpg', description: '3 eggs with spinach & bell peppers.', nutrients: 'Protein: 18g, Carbs: 2g, Fat: 12g' },
        { name: 'Smoked Salmon Bagel', img: 'https://media.istockphoto.com/id/1281029670/photo/poppy-seed-bagel-with-cheese-cream-smoked-salmon-and-arugula.jpg?s=612x612&w=0&k=20&c=Fj_QYGzY91lnOkUmpE32TCE9l41s3wedsfDYBryTJtg=', description: 'Whole-grain bagel, cream cheese, salmon.', nutrients: 'Protein: 20g, Carbs: 40g, Fat: 10g' },
        { name: 'Turkey Sausage & Eggs', img: 'https://media.istockphoto.com/id/598144908/photo/grilled-chicken-sausages-and-burgers.jpg?s=612x612&w=0&k=20&c=Cn65Xv9iWElTAgAWutAFvIDWI_4BBJVLUIto29fZJAo=', description: '2 eggs with turkey sausage.', nutrients: 'Protein: 22g, Carbs: 3g, Fat: 15g' },
        { name: 'Greek Yogurt Parfait', img: 'https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-with-fruit.jpg', description: 'Yogurt with nuts and honey.', nutrients: 'Protein: 18g, Carbs: 25g, Fat: 8g' },
        { name: 'Chicken Hash', img: 'https://eatthegains.com/wp-content/uploads/2022/10/Chicken-Hash-10.jpg', description: 'Shredded chicken with potatoes.', nutrients: 'Protein: 20g, Carbs: 30g, Fat: 10g' },
        { name: 'Tuna Avocado Toast', img: 'https://chickenofthesea.com/wp-content/uploads/2022/04/Tuna-Avocado-Toast-1440x1200.jpg', description: 'Tuna salad on whole-grain toast.', nutrients: 'Protein: 22g, Carbs: 25g, Fat: 12g' }
      ]
    }
  },
  muscleGain :{
  veg: {
    15: [
      { name: 'Tofu Stir-Fry', img: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-3.jpg', description: 'Tofu cubes with mixed veggies.', nutrients: 'Protein: 14g, Carbs: 20g, Fat: 8g' },
      { name: 'Rajma Brown Rice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtM20qayB8Ef9lF_Q2syBKrwr8w0awYFohmQ&s', description: 'Kidney beans with brown rice.', nutrients: 'Protein: 14g, Carbs: 50g, Fiber: 8g' },
      { name: 'Dal Makhani', img: 'https://sinfullyspicy.com/wp-content/uploads/2015/03/1200-by-1200-images-1.jpg', description: 'Creamy black lentils.', nutrients: 'Protein: 16g, Carbs: 30g, Fat: 14g' },
      { name: 'Paneer Tawa Masala', img: 'https://i.ytimg.com/vi/bKqG9vTJNHU/maxresdefault.jpg', description: 'Paneer in rich tomato gravy.', nutrients: 'Protein: 20g, Carbs: 10g, Fat: 15g' },
      { name: 'Sprouted Moong Salad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaF9ozvJGCOCf975dO2ov08VbfkwpJohw_w&s', description: 'Sprouted lentils with veggies.', nutrients: 'Protein: 10g, Fiber: 6g, Carbs: 10g' },
      { name: 'Protein Smoothie', img: 'https://therecipecritic.com/wp-content/uploads/2023/02/protein-smoothie-3.jpg', description: 'Whey protein shake with fruits.', nutrients: 'Protein: 25g, Carbs: 20g, Fat: 5g' }
    ],
    30: [
      { name: 'Tofu Stir-Fry', img: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Tofu-Stir-Fry-3.jpg', description: 'Tofu cubes with mixed veggies.', nutrients: 'Protein: 14g, Carbs: 20g, Fat: 8g' },
      { name: 'Rajma Brown Rice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtM20qayB8Ef9lF_Q2syBKrwr8w0awYFohmQ&s', description: 'Kidney beans with brown rice.', nutrients: 'Protein: 14g, Carbs: 50g, Fiber: 8g' },
      { name: 'Dal Makhani', img: 'https://sinfullyspicy.com/wp-content/uploads/2015/03/1200-by-1200-images-1.jpg', description: 'Creamy black lentils.', nutrients: 'Protein: 16g, Carbs: 30g, Fat: 14g' },
      { name: 'Paneer Tawa Masala', img: 'https://i.ytimg.com/vi/bKqG9vTJNHU/maxresdefault.jpg', description: 'Paneer in rich tomato gravy.', nutrients: 'Protein: 20g, Carbs: 10g, Fat: 15g' },
      { name: 'Sprouted Moong Salad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaF9ozvJGCOCf975dO2ov08VbfkwpJohw_w&s', description: 'Sprouted lentils with veggies.', nutrients: 'Protein: 10g, Fiber: 6g, Carbs: 10g' },
      { name: 'Protein Smoothie', img: 'https://therecipecritic.com/wp-content/uploads/2023/02/protein-smoothie-3.jpg', description: 'Whey protein shake with fruits.', nutrients: 'Protein: 25g, Carbs: 20g, Fat: 5g' }
    ]
  },
  nonveg: {
    15: [
      { name: 'Grilled Chicken Breast', img: 'https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-Overhead-500x500.jpg', description: 'Chicken breast grilled with herbs.', nutrients: 'Protein: 35g, Carbs: 0g, Fat: 3g' },
      { name: 'Fish Curry', img: 'https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg', description: 'Spiced fish curry.', nutrients: 'Protein: 30g, Carbs: 10g, Fat: 10g' },
      { name: 'Egg White Omelette', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmYbvlkp8rAgNQVCmefxoHQ47XKCWK3_-bQ&s', description: 'Egg whites with spinach.', nutrients: 'Protein: 20g, Carbs: 2g, Fat: 0g' },
      { name: 'Chicken Tikka', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjSTAYdIs9x9NM8NwRHvjUUerXoPO1kU3Ig&s', description: 'Spiced grilled chicken chunks.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 10g' },
      { name: 'Turkey Meatballs', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYvHI3VI1w_XDXcXQ-0GrRHTM4DZt6YPMeu59cHhnoG0OMuum3JIsS6sjateBYsrTAXUFTmLN09x71GdCkgpG3XTCojh-lpEBDJXxynh1yfi_5oK8bKJQHEQ', description: 'Turkey meatballs in tomato sauce.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 12g' },
      { name: 'Protein Shake', img: 'https://therecipecritic.com/wp-content/uploads/2023/02/protein-smoothie-3.jpg', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
    ],
    30: [
      { name: 'Grilled Chicken Breast', img: 'https://www.simplyrecipes.com/thmb/EQbIvwJf3v84DZjFAYwG7XK3GB0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-5-58d53a95e0a74e8792f2c3a051ed6f72.jpg', description: 'Chicken breast grilled with herbs.', nutrients: 'Protein: 35g, Carbs: 0g, Fat: 3g' },
      { name: 'Fish Curry', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/fish-curry-recipe.jpg', description: 'Spiced fish curry.', nutrients: 'Protein: 30g, Carbs: 10g, Fat: 10g' },
      { name: 'Egg White Omelette', img: 'https://www.simplyrecipes.com/thmb/FZ6gYc5r8wP7rUk1GVAKP7ZpL5g=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Egg-White-Omelet-LEAD-5-9ad04c3f90f14e978c9e5b2dfd28f177.jpg', description: 'Egg whites with spinach.', nutrients: 'Protein: 20g, Carbs: 2g, Fat: 0g' },
      { name: 'Chicken Tikka', img: 'https://www.cookwithmanali.com/wp-content/uploads/2020/04/Chicken-Tikka-Recipe.jpg', description: 'Spiced grilled chicken chunks.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 10g' },
      { name: 'Turkey Meatballs', img: 'https://www.themediterraneandish.com/wp-content/uploads/2018/11/turkey-meatballs-recipe-1.jpg', description: 'Turkey meatballs in tomato sauce.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 12g' },
      { name: 'Protein Shake', img: 'https://www.healthshots.com/wp-content/uploads/2021/03/protein-smoothie.jpg', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
    ]
  }
},

  weightGain: {
  veg: {
    15: [
      { name: 'Peanut Butter Toast', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Vm5J5GQdy_ASDtTFeHBl1zVCcJOSfCEedA&s', description: 'Whole-grain bread with peanut butter.', nutrients: 'Protein: 12g, Carbs: 40g, Fat: 16g' },
      { name: 'Vegetable Pulao', img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Veg-Pulao-2.jpg', description: 'Rice cooked with veggies.', nutrients: 'Protein: 8g, Carbs: 60g, Fat: 10g' },
      { name: 'Paneer Butter Masala', img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg', description: 'Paneer in creamy tomato gravy.', nutrients: 'Protein: 20g, Carbs: 20g, Fat: 18g' },
      { name: 'Banana Smoothie', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2Y2aP3l0vdTkSVAnJqNkXPeqmwcNrGT1Pw&s', description: 'Banana with milk and honey.', nutrients: 'Protein: 10g, Carbs: 40g, Fat: 4g' },
      { name: 'Chole Bhature', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnv8nOd0cc9Nemr_y1JLV41wTUUBg3vYAq2w&s', description: 'Spiced chickpeas with fried bread.', nutrients: 'Protein: 15g, Carbs: 60g, Fat: 20g' },
      { name: 'Mixed Nuts', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMk5XzWbpsVhyY6L7Or5lomHKc-9_FvonNw&s', description: 'Assorted nuts for calories.', nutrients: 'Protein: 8g, Carbs: 10g, Fat: 30g' }
    ],
    30: [
      { name: 'Peanut Butter Toast', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Vm5J5GQdy_ASDtTFeHBl1zVCcJOSfCEedA&s', description: 'Whole-grain bread with peanut butter.', nutrients: 'Protein: 12g, Carbs: 40g, Fat: 16g' },
      { name: 'Vegetable Pulao', img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Veg-Pulao-2.jpg', description: 'Rice cooked with veggies.', nutrients: 'Protein: 8g, Carbs: 60g, Fat: 10g' },
      { name: 'Paneer Butter Masala', img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg', description: 'Paneer in creamy tomato gravy.', nutrients: 'Protein: 20g, Carbs: 20g, Fat: 18g' },
      { name: 'Banana Smoothie', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2Y2aP3l0vdTkSVAnJqNkXPeqmwcNrGT1Pw&s', description: 'Banana with milk and honey.', nutrients: 'Protein: 10g, Carbs: 40g, Fat: 4g' },
      { name: 'Chole Bhature', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnv8nOd0cc9Nemr_y1JLV41wTUUBg3vYAq2w&s', description: 'Spiced chickpeas with fried bread.', nutrients: 'Protein: 15g, Carbs: 60g, Fat: 20g' },
      { name: 'Mixed Nuts', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMk5XzWbpsVhyY6L7Or5lomHKc-9_FvonNw&s', description: 'Assorted nuts for calories.', nutrients: 'Protein: 8g, Carbs: 10g, Fat: 30g' }
    ]
  },
  nonveg: {
    15: [
      { name: 'Butter Chicken', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTY53Zww8_j72B0sOb6m4o4fOMO0eDtsvvwQ&s', description: 'Creamy spiced chicken curry.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 25g' },
      { name: 'Egg Curry', img: 'https://www.kitchensanctuary.com/wp-content/uploads/2025/02/Egg-Curry-Square-FS-500x500.jpg', description: 'Eggs cooked in tomato gravy.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 15g' },
      { name: 'Fried Fish', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDyDqfLl98hMEwjyM6_v4Y3XjfIu6lSZzjQ&s', description: 'Fish fried in oil.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 20g' },
      { name: 'Chicken Biryani', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s', description: 'Spiced chicken with rice.', nutrients: 'Protein: 35g, Carbs: 60g, Fat: 20g' },
      { name: 'Mutton Curry', img: 'https://lh5.googleusercontent.com/proxy/fm5qZsQ1nm8HztsfW92BSx3XQKt1tl2miFs7fXnbRmwE5bmIR3ADNRXrG0h6fpcNpkggOK684pAHz0bkpBZTvZLVj8bIwot0-h0aDsU', description: 'Rich spicy mutton curry.', nutrients: 'Protein: 40g, Carbs: 10g, Fat: 30g' },
      { name: 'Protein Shake', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoZs-pB_Bl9d5HqMhyIeHcLuXy01Z0QQbqg&s', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
    ],
    30: [
      { name: 'Butter Chicken', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTY53Zww8_j72B0sOb6m4o4fOMO0eDtsvvwQ&s', description: 'Creamy spiced chicken curry.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 25g' },
      { name: 'Egg Curry', img: 'https://www.kitchensanctuary.com/wp-content/uploads/2025/02/Egg-Curry-Square-FS-500x500.jpg', description: 'Eggs cooked in tomato gravy.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 15g' },
      { name: 'Fried Fish', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDyDqfLl98hMEwjyM6_v4Y3XjfIu6lSZzjQ&s', description: 'Fish fried in oil.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 20g' },
      { name: 'Chicken Biryani', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s', description: 'Spiced chicken with rice.', nutrients: 'Protein: 35g, Carbs: 60g, Fat: 20g' },
      { name: 'Mutton Curry', img: 'https://lh5.googleusercontent.com/proxy/fm5qZsQ1nm8HztsfW92BSx3XQKt1tl2miFs7fXnbRmwE5bmIR3ADNRXrG0h6fpcNpkggOK684pAHz0bkpBZTvZLVj8bIwot0-h0aDsU', description: 'Rich spicy mutton curry.', nutrients: 'Protein: 40g, Carbs: 10g, Fat: 30g' },
      { name: 'Protein Shake', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoZs-pB_Bl9d5HqMhyIeHcLuXy01Z0QQbqg&s', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
    ]
  }
}

};

export const routineData = {
  weightLoss: {
    15: [
      { day: 1, activity: '30 mins brisk walking, 15 mins bodyweight exercises' },
      { day: 2, activity: 'HIIT session: 20 mins sprint intervals' },
      { day: 3, activity: 'Yoga and stretching: 30 mins' },
      { day: 4, activity: 'Strength training: Upper body focus' },
      { day: 5, activity: 'Rest or light activity' },
      { day: 6, activity: 'Cardio: Cycling 40 mins' },
      { day: 7, activity: 'Strength training: Lower body focus' },
      { day: 8, activity: 'HIIT session: 20 mins' },
      { day: 9, activity: 'Yoga and core strengthening' },
      { day: 10, activity: 'Full-body strength training' },
      { day: 11, activity: 'Rest or walking' },
      { day: 12, activity: 'Cardio: Swimming 30 mins' },
      { day: 13, activity: 'Bodyweight circuit training' },
      { day: 14, activity: 'Stretching and mobility work' },
      { day: 15, activity: 'Light jog and full-body stretching' }
    ],
    30: [
      { day: 1, activity: '30 mins brisk walking, 15 mins bodyweight exercises' },
      { day: 2, activity: 'HIIT session: 20 mins sprint intervals' },
      { day: 3, activity: 'Yoga and stretching: 30 mins' },
      { day: 4, activity: 'Strength training: Upper body focus' },
      { day: 5, activity: 'Rest or light activity' },
      { day: 6, activity: 'Cardio: Cycling 40 mins' },
      { day: 7, activity: 'Strength training: Lower body focus' },
      { day: 8, activity: 'HIIT session: 20 mins' },
      { day: 9, activity: 'Yoga and core strengthening' },
      { day: 10, activity: 'Full-body strength training' },
      { day: 11, activity: 'Rest or walking' },
      { day: 12, activity: 'Cardio: Swimming 30 mins' },
      { day: 13, activity: 'Bodyweight circuit training' },
      { day: 14, activity: 'Stretching and mobility work' },
      { day: 15, activity: 'Light jog and full-body stretching' },
      { day: 16, activity: 'Brisk walking and light strength training' },
      { day: 17, activity: 'HIIT session: 25 mins' },
      { day: 18, activity: 'Yoga for flexibility' },
      { day: 19, activity: 'Strength training: Upper body' },
      { day: 20, activity: 'Rest day' },
      { day: 21, activity: 'Cardio: Rowing 30 mins' },
      { day: 22, activity: 'Strength training: Lower body' },
      { day: 23, activity: 'HIIT session: 20 mins' },
      { day: 24, activity: 'Yoga and core work' },
      { day: 25, activity: 'Full-body strength training' },
      { day: 26, activity: 'Light cardio' },
      { day: 27, activity: 'Bodyweight exercises' },
      { day: 28, activity: 'Stretching and mobility' },
      { day: 29, activity: 'Cardio: Cycling 30 mins' },
      { day: 30, activity: 'Rest and recovery' }
    ]
  },
  muscleGain: {
    15: [
      { day: 1, activity: 'Upper body strength training: chest, shoulders, triceps' },
      { day: 2, activity: 'Lower body strength training: quads, hamstrings, calves' },
      { day: 3, activity: 'Rest or light cardio' },
      { day: 4, activity: 'Back and biceps strength training' },
      { day: 5, activity: 'Core and abs workout' },
      { day: 6, activity: 'Full body compound lifts' },
      { day: 7, activity: 'Rest day' },
      { day: 8, activity: 'Upper body hypertrophy training' },
      { day: 9, activity: 'Lower body hypertrophy training' },
      { day: 10, activity: 'Active recovery: light cardio or yoga' },
      { day: 11, activity: 'Back and biceps hypertrophy training' },
      { day: 12, activity: 'Core and abs workout' },
      { day: 13, activity: 'Full body strength training' },
      { day: 14, activity: 'Rest day' },
      { day: 15, activity: 'Upper body strength training' }
    ],
    30: [
      { day: 1, activity: 'Upper body strength training: chest, shoulders, triceps' },
      { day: 2, activity: 'Lower body strength training: quads, hamstrings, calves' },
      { day: 3, activity: 'Rest or light cardio' },
      { day: 4, activity: 'Back and biceps strength training' },
      { day: 5, activity: 'Core and abs workout' },
      { day: 6, activity: 'Full body compound lifts' },
      { day: 7, activity: 'Rest day' },
      { day: 8, activity: 'Upper body hypertrophy training' },
      { day: 9, activity: 'Lower body hypertrophy training' },
      { day: 10, activity: 'Active recovery: light cardio or yoga' },
      { day: 11, activity: 'Back and biceps hypertrophy training' },
      { day: 12, activity: 'Core and abs workout' },
      { day: 13, activity: 'Full body strength training' },
      { day: 14, activity: 'Rest day' },
      { day: 15, activity: 'Upper body strength training' },
      { day: 16, activity: 'Lower body strength training' },
      { day: 17, activity: 'Rest or light cardio' },
      { day: 18, activity: 'Back and biceps training' },
      { day: 19, activity: 'Core and abs workout' },
      { day: 20, activity: 'Full body compound lifts' },
      { day: 21, activity: 'Rest day' },
      { day: 22, activity: 'Upper body hypertrophy training' },
      { day: 23, activity: 'Lower body hypertrophy training' },
      { day: 24, activity: 'Active recovery' },
      { day: 25, activity: 'Back and biceps hypertrophy' },
      { day: 26, activity: 'Core and abs workout' },
      { day: 27, activity: 'Full body strength training' },
      { day: 28, activity: 'Rest day' },
      { day: 29, activity: 'Upper body strength training' },
      { day: 30, activity: 'Lower body strength training' }
    ]
  },
  weightGain: {
    15: [
      { day: 1, activity: 'Full body weight training' },
      { day: 2, activity: 'Rest or light cardio' },
      { day: 3, activity: 'Upper body hypertrophy training' },
      { day: 4, activity: 'Lower body hypertrophy training' },
      { day: 5, activity: 'Core strengthening' },
      { day: 6, activity: 'Full body compound lifts' },
      { day: 7, activity: 'Rest day' },
      { day: 8, activity: 'Upper body strength training' },
      { day: 9, activity: 'Lower body strength training' },
      { day: 10, activity: 'Rest or light cardio' },
      { day: 11, activity: 'Back and biceps training' },
      { day: 12, activity: 'Core and abs workout' },
      { day: 13, activity: 'Full body hypertrophy training' },
      { day: 14, activity: 'Rest day' },
      { day: 15, activity: 'Upper body strength training' }
    ],
    30: [
      { day: 1, activity: 'Full body weight training' },
      { day: 2, activity: 'Rest or light cardio' },
      { day: 3, activity: 'Upper body hypertrophy training' },
      { day: 4, activity: 'Lower body hypertrophy training' },
      { day: 5, activity: 'Core strengthening' },
      { day: 6, activity: 'Full body compound lifts' },
      { day: 7, activity: 'Rest day' },
      { day: 8, activity: 'Upper body strength training' },
      { day: 9, activity: 'Lower body strength training' },
      { day: 10, activity: 'Rest or light cardio' },
      { day: 11, activity: 'Back and biceps training' },
      { day: 12, activity: 'Core and abs workout' },
      { day: 13, activity: 'Full body hypertrophy training' },
      { day: 14, activity: 'Rest day' },
      { day: 15, activity: 'Upper body strength training' },
      { day: 16, activity: 'Lower body strength training' },
      { day: 17, activity: 'Rest or light cardio' },
      { day: 18, activity: 'Back and biceps training' },
      { day: 19, activity: 'Core and abs workout' },
      { day: 20, activity: 'Full body compound lifts' },
      { day: 21, activity: 'Rest day' },
      { day: 22, activity: 'Upper body hypertrophy training' },
      { day: 23, activity: 'Lower body hypertrophy training' },
      { day: 24, activity: 'Active recovery' },
      { day: 25, activity: 'Back and biceps hypertrophy' },
      { day: 26, activity: 'Core and abs workout' },
      { day: 27, activity: 'Full body strength training' },
      { day: 28, activity: 'Rest day' },
      { day: 29, activity: 'Upper body strength training' },
      { day: 30, activity: 'Lower body strength training' }
    ]
  }
};