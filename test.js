var subsets = function (nums) {
	//Array finalOutput stores all the power sets
	let finalOutput = [];

	// Helper method is a recursive function that call's itself
	const helper = (currentIndex, set) => {
		// Check for base case as stated above
		if (currentIndex >= nums.length) {
			// push the set of current iteration in finalOutput
			finalOutput.push(set);
			return; //Necessary to end the recursion iteration
		}

		//This is the 1st case where we are including the currentIndex number
		// We increment currentIndex and add currentNumber i.e nums[currentIndex] in our set i.e. [...set, nums[currentIndex]]
		helper(currentIndex + 1, [...set, nums[currentIndex]]);

		// This is the second case where we are excluding the currentIndex number
		// We increment currentIndex and our set remains unchanged
		helper(currentIndex + 1, set);
	};
	//1st call to recursive function
	helper(0, []);

	// return our power set stored in finalOutput
	return finalOutput;
};

let arr = [1,2,3];
console.log(subsets(arr))