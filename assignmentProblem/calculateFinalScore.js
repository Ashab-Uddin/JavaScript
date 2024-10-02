
function calculateFinalScore(obj) {
    let farmerScore = 0;
    let finalScore =0;

    if (obj.isFFamily === true) {
        farmerScore = 20; 
    }

    const testScore = obj.testScore || 0; 
    const schoolGrade = obj.schoolGrade || 0; 
    

    if (typeof obj !== 'object' || obj === null || Array.isArray(obj))
    {
        return "Invalid Input";
    }


    finalScore = testScore + schoolGrade + farmerScore;

    
    if (finalScore >= 80) {
        return true; 
    } else {
        return false;
    }
}

// Example usage:
const student1 = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  };

const student2 = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false };

const student3 = "hello";

const student4 = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };

console.log(calculateFinalScore(student1)); 
console.log(calculateFinalScore(student2)); 
console.log(calculateFinalScore(student3)); 
console.log(calculateFinalScore(student4)); 
