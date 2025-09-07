import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai","Lucknow"]
    },
    
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    return (
        <div className="w-full bg-white p-5 rounded-xl shadow-lg border border-gray-200">
            <h1 className="text-xl font-semibold mb-4 text-gray-700">🎯 Filter Jobs</h1>
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-6">
                {
                    filterData.map((section, index) => (
                        <div key={index} className="border-t pt-4">
                            <h2 className="text-lg font-medium text-gray-800 mb-2">{section.filterType}</h2>
                            {
                                section.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`;
                                    return (
                                        <div key={itemId} className="flex items-center space-x-2 my-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-all">
                                            <RadioGroupItem
                                                value={item}
                                                id={itemId}
                                                className="border-gray-300 focus:ring-blue-500"
                                            />
                                            <Label htmlFor={itemId} className="text-gray-600">{item}</Label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
