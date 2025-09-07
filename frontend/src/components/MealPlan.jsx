import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Goal, Diet, Duration Options
const goalTypes = ['weightLoss', 'muscleGain', 'weightGain']
const goalLabels = {
  weightLoss: 'Weight Loss',
  muscleGain: 'Muscle Gain',
  weightGain: 'Weight Gain'
}
const diets = ['veg', 'nonveg']
const dietLabels = { veg: 'Vegetarian', nonveg: 'Non-Vegetarian' }
const durations = [15, 30]

// Importing data
import { mealData, routineData } from './mealAndRoutineData'
import Navbar from './shared/Navbar'

export default function MealPlan() {
  const [goal, setGoal] = useState('weightLoss')
  const [diet, setDiet] = useState('veg')
  const [days, setDays] = useState(15)

  const meals = mealData[goal]?.[diet]?.[days] || []
  const routine = routineData[goal]?.[days] || []

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-[#fef9f1] rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Interactive Meal Planner</h1>

        {/* Goal Selector */}
        <div className="flex justify-center space-x-4 mb-6">
          {goalTypes.map(g => (
            <button
              key={g}
              onClick={() => setGoal(g)}
              className={`px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 ${
                goal === g ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              aria-pressed={goal === g}
            >
              {goalLabels[g]}
            </button>
          ))}
        </div>

        {/* Diet Selector */}
        <div className="flex justify-center space-x-4 mb-6">
          {diets.map(d => (
            <button
              key={d}
              onClick={() => setDiet(d)}
              className={`px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 ${
                diet === d ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              aria-pressed={diet === d}
            >
              {dietLabels[d]}
            </button>
          ))}
        </div>

        {/* Duration Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {durations.map(d => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 ${
                days === d ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              aria-pressed={days === d}
            >
              {d}-Day
            </button>
          ))}
        </div>

        {/* Meal Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence>
            {meals.length > 0 ? (
              meals.map(meal => (
                <motion.div
                  key={meal.name}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  layout
                >
                  <div className="h-40 w-full bg-gray-200">
                    <img
                      src={meal.img}
                      alt={meal.name}
                      className="h-full w-full object-cover transition-transform transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-1">{meal.name}</h2>
                    {meal.description && (
                      <p className="text-sm text-gray-600 mb-2">{meal.description}</p>
                    )}
                    {meal.nutrients && (
                      <p className="text-sm font-medium">{meal.nutrients}</p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty"
                className="col-span-full text-center text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No meals available. Please select a different plan.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Daily Routine List */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Daily Routine</h2>
          {routine.length > 0 ? (
            <ul className="space-y-2">
              {routine.map(item => (
                <li key={item.day} className="flex justify-between border-b py-2">
                  <span className="font-medium">Day {item.day}</span>
                  <span>{item.activity}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No routine available for this plan.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
