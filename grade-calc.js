// student score, total possible score

// 15/20- -> You got a C (75%)

// A 90-100, B 80 -89, C 70-79, D 60-69, F 0-59


let gradeCalc = function(studentScore = 18, totalMarks = 20){
       let percentTowhole = studentScore / totalMarks
       let finalGrade = percentTowhole * 100

      if (finalGrade >=90 || finalGrade ===100){
            return `You got an A (${finalGrade})%`
      } 
      else if (finalGrade >=80 || finalGrade ===89){
        return `You got an B (${finalGrade})%`
      } 
      else if (finalGrade >=70 || finalGrade ===79){
        return `You got an C (${finalGrade})%`
      } 
      else if (finalGrade >=60 || finalGrade ===69){
        return `You got an D (${finalGrade})%`
      }
      else{
        return `You got an F (${finalGrade})%` 
      }

    }

let gradeCalcultor = gradeCalc()
console.log(gradeCalcultor)