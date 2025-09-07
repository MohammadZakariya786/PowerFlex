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
  muscleGain: {
    veg: {
      15: [
        { name: 'Tofu Stir-Fry', img: 'https://www.shutterstock.com/image-photo/tofu-stirfry-mixed-vegetables-arranged-260nw-2505328795.jpg', description: 'Tofu cubes with mixed veggies.', nutrients: 'Protein: 14g, Carbs: 20g, Fat: 8g' },
        { name: 'Rajma Brown Rice', img: '/assets/rajma-rice.jpg', description: 'Kidney beans with brown rice.', nutrients: 'Protein: 14g, Carbs: 50g, Fiber: 8g' },
        { name: 'Dal Makhani', img: '/assets/dal-makhani.jpg', description: 'Creamy black lentils.', nutrients: 'Protein: 16g, Carbs: 30g, Fat: 14g' },
        { name: 'Paneer Tawa Masala', img: '/assets/paneer-tawa.jpg', description: 'Paneer in rich tomato gravy.', nutrients: 'Protein: 20g, Carbs: 10g, Fat: 15g' },
        { name: 'Sprouted Moong Salad', img: '/assets/sprouted-moong.jpg', description: 'Sprouted lentils with veggies.', nutrients: 'Protein: 10g, Fiber: 6g, Carbs: 10g' },
        { name: 'Protein Smoothie', img: '/assets/protein-smoothie.jpg', description: 'Whey protein shake with fruits.', nutrients: 'Protein: 25g, Carbs: 20g, Fat: 5g' }
      ],
      30: [
        { name: 'Tofu Stir-Fry', img: '/assets/tofu-stirfry.jpg', description: 'Tofu cubes with mixed veggies.', nutrients: 'Protein: 14g, Carbs: 20g, Fat: 8g' },
        { name: 'Rajma Brown Rice', img: '/assets/rajma-rice.jpg', description: 'Kidney beans with brown rice.', nutrients: 'Protein: 14g, Carbs: 50g, Fiber: 8g' },
        { name: 'Dal Makhani', img: '/assets/dal-makhani.jpg', description: 'Creamy black lentils.', nutrients: 'Protein: 16g, Carbs: 30g, Fat: 14g' },
        { name: 'Paneer Tawa Masala', img: '/assets/paneer-tawa.jpg', description: 'Paneer in rich tomato gravy.', nutrients: 'Protein: 20g, Carbs: 10g, Fat: 15g' },
        { name: 'Sprouted Moong Salad', img: '/assets/sprouted-moong.jpg', description: 'Sprouted lentils with veggies.', nutrients: 'Protein: 10g, Fiber: 6g, Carbs: 10g' },
        { name: 'Protein Smoothie', img: '/assets/protein-smoothie.jpg', description: 'Whey protein shake with fruits.', nutrients: 'Protein: 25g, Carbs: 20g, Fat: 5g' }
      ]
    },
    nonveg: {
      15: [
        { name: 'Grilled Chicken Breast', img: '/assets/grilled-chicken.jpg', description: 'Chicken breast grilled with herbs.', nutrients: 'Protein: 35g, Carbs: 0g, Fat: 3g' },
        { name: 'Fish Curry', img: '/assets/fish-curry.jpg', description: 'Spiced fish curry.', nutrients: 'Protein: 30g, Carbs: 10g, Fat: 10g' },
        { name: 'Egg White Omelette', img: '/assets/egg-white-omelette.jpg', description: 'Egg whites with spinach.', nutrients: 'Protein: 20g, Carbs: 2g, Fat: 0g' },
        { name: 'Chicken Tikka', img: '/assets/chicken-tikka.jpg', description: 'Spiced grilled chicken chunks.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 10g' },
        { name: 'Turkey Meatballs', img: '/assets/turkey-meatballs.jpg', description: 'Turkey meatballs in tomato sauce.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 12g' },
        { name: 'Protein Shake', img: '/assets/protein-shake.jpg', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
      ],
      30: [
        { name: 'Grilled Chicken Breast', img: '/assets/grilled-chicken.jpg', description: 'Chicken breast grilled with herbs.', nutrients: 'Protein: 35g, Carbs: 0g, Fat: 3g' },
        { name: 'Fish Curry', img: '/assets/fish-curry.jpg', description: 'Spiced fish curry.', nutrients: 'Protein: 30g, Carbs: 10g, Fat: 10g' },
        { name: 'Egg White Omelette', img: '/assets/egg-white-omelette.jpg', description: 'Egg whites with spinach.', nutrients: 'Protein: 20g, Carbs: 2g, Fat: 0g' },
        { name: 'Chicken Tikka', img: '/assets/chicken-tikka.jpg', description: 'Spiced grilled chicken chunks.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 10g' },
        { name: 'Turkey Meatballs', img: '/assets/turkey-meatballs.jpg', description: 'Turkey meatballs in tomato sauce.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 12g' },
        { name: 'Protein Shake', img: '/assets/protein-shake.jpg', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
      ]
    }
  },
  weightGain: {
    veg: {
      15: [
        { name: 'Peanut Butter Toast', img: '/assets/peanut-butter-toast.jpg', description: 'Whole-grain bread with peanut butter.', nutrients: 'Protein: 12g, Carbs: 40g, Fat: 16g' },
        { name: 'Vegetable Pulao', img: '/assets/veg-pulao.jpg', description: 'Rice cooked with veggies.', nutrients: 'Protein: 8g, Carbs: 60g, Fat: 10g' },
        { name: 'Paneer Butter Masala', img: '/assets/paneer-butter-masala.jpg', description: 'Paneer in creamy tomato gravy.', nutrients: 'Protein: 20g, Carbs: 20g, Fat: 18g' },
        { name: 'Banana Smoothie', img: '/assets/banana-smoothie.jpg', description: 'Banana with milk and honey.', nutrients: 'Protein: 10g, Carbs: 40g, Fat: 4g' },
        { name: 'Chole Bhature', img: '/assets/chole-bhature.jpg', description: 'Spiced chickpeas with fried bread.', nutrients: 'Protein: 15g, Carbs: 60g, Fat: 20g' },
        { name: 'Mixed Nuts', img: '/assets/mixed-nuts.jpg', description: 'Assorted nuts for calories.', nutrients: 'Protein: 8g, Carbs: 10g, Fat: 30g' }
      ],
      30: [
        { name: 'Peanut Butter Toast', img: '/assets/peanut-butter-toast.jpg', description: 'Whole-grain bread with peanut butter.', nutrients: 'Protein: 12g, Carbs: 40g, Fat: 16g' },
        { name: 'Vegetable Pulao', img: '/assets/veg-pulao.jpg', description: 'Rice cooked with veggies.', nutrients: 'Protein: 8g, Carbs: 60g, Fat: 10g' },
        { name: 'Paneer Butter Masala', img: '/assets/paneer-butter-masala.jpg', description: 'Paneer in creamy tomato gravy.', nutrients: 'Protein: 20g, Carbs: 20g, Fat: 18g' },
        { name: 'Banana Smoothie', img: '/assets/banana-smoothie.jpg', description: 'Banana with milk and honey.', nutrients: 'Protein: 10g, Carbs: 40g, Fat: 4g' },
        { name: 'Chole Bhature', img: '/assets/chole-bhature.jpg', description: 'Spiced chickpeas with fried bread.', nutrients: 'Protein: 15g, Carbs: 60g, Fat: 20g' },
        { name: 'Mixed Nuts', img: '/assets/mixed-nuts.jpg', description: 'Assorted nuts for calories.', nutrients: 'Protein: 8g, Carbs: 10g, Fat: 30g' }
      ]
    },
    nonveg: {
      15: [
        { name: 'Butter Chicken', img: '/assets/butter-chicken.jpg', description: 'Creamy spiced chicken curry.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 25g' },
        { name: 'Egg Curry', img: '/assets/egg-curry.jpg', description: 'Eggs cooked in tomato gravy.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 15g' },
        { name: 'Fried Fish', img: '/assets/fried-fish.jpg', description: 'Fish fried in oil.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 20g' },
        { name: 'Chicken Biryani', img: '/assets/chicken-biryani.jpg', description: 'Spiced chicken with rice.', nutrients: 'Protein: 35g, Carbs: 60g, Fat: 20g' },
        { name: 'Mutton Curry', img: '/assets/mutton-curry.jpg', description: 'Rich spicy mutton curry.', nutrients: 'Protein: 40g, Carbs: 10g, Fat: 30g' },
        { name: 'Protein Shake', img: '/assets/protein-shake.jpg', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
      ],
      30: [
        { name: 'Butter Chicken', img: '/assets/butter-chicken.jpg', description: 'Creamy spiced chicken curry.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 25g' },
        { name: 'Egg Curry', img: '/assets/egg-curry.jpg', description: 'Eggs cooked in tomato gravy.', nutrients: 'Protein: 25g, Carbs: 10g, Fat: 15g' },
        { name: 'Fried Fish', img: '/assets/fried-fish.jpg', description: 'Fish fried in oil.', nutrients: 'Protein: 30g, Carbs: 5g, Fat: 20g' },
        { name: 'Chicken Biryani', img: '/assets/chicken-biryani.jpg', description: 'Spiced chicken with rice.', nutrients: 'Protein: 35g, Carbs: 60g, Fat: 20g' },
        { name: 'Mutton Curry', img: '/assets/mutton-curry.jpg', description: 'Rich spicy mutton curry.', nutrients: 'Protein: 40g, Carbs: 10g, Fat: 30g' },
        { name: 'Protein Shake', img: '/assets/protein-shake.jpg', description: 'Whey protein with milk.', nutrients: 'Protein: 30g, Carbs: 20g, Fat: 5g' }
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