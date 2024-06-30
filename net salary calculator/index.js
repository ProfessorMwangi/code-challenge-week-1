/** @format */

const taxRate = {
	paye: [
		{ min: 0, max: 24000, Rate: 10 },
		{ min: 24001, max: 32333, Rate: 25 },
		{ min: 32334, max: 500000, Rate: 30 },
		{ min: 500001, max: 800000, Rate: 32.5 },
		{ min: 800001, max: Infinity, Rate: 35 },
	],
	nhif: [
		{ min: 500, max: 5999, amount: 150 },
		{ min: 6000, max: 7999, amount: 300 },
		{ min: 8000, max: 11999, amount: 400 },
		{ min: 12000, max: 14999, amount: 500 },
		{ min: 15000, max: 19999, amount: 600 },
		{ min: 20000, max: 24999, amount: 750 },
		{ min: 25000, max: 29999, amount: 850 },
		{ min: 30000, max: 34999, amount: 900 },
		{ min: 35000, max: 39999, amount: 950 },
		{ min: 40000, max: 44999, amount: 1000 },
		{ min: 45000, max: 49999, amount: 1100 },
		{ min: 50000, max: 59999, amount: 1200 },
		{ min: 60000, max: 69999, amount: 1300 },
		{ min: 70000, max: 79999, amount: 1400 },
		{ min: 80000, max: 89999, amount: 1500 },
		{ min: 90000, max: 99999, amount: 1600 },
		{ min: 100000, max: Infinity, amount: 1700 },
	],
	nssf_Rate: 6,
};

function calculateNetSalary(basicSalary, benefits) {
	const grossSalary = basicSalary + benefits;

	let nhifDeduction = 0;
	for (let i = 0; i < taxRate.nhif.length; i++) {
		const range = taxRate.nhif[i];
		if (grossSalary >= range.min && grossSalary <= range.max) {
			nhifDeduction = range.amount;
			break;
		}
	}

	const nssfDeduction = grossSalary * (taxRate.nssf_Rate / 100);

	let payeDeduction = 0;
	for (let i = 0; i < taxRate.paye.length; i++) {
		const range = taxRate.paye[i];
		if (grossSalary >= range.min && grossSalary <= range.max) {
			payeDeduction = (range.Rate / 100) * (grossSalary - range.min);
			break;
		}
	}

	const netSalary =
		grossSalary - (nhifDeduction + nssfDeduction + payeDeduction);

	return {
		grossSalary: grossSalary,
		nhifDeduction: nhifDeduction,
		nssfDeduction: nssfDeduction,
		payeDeduction: payeDeduction,
		netSalary: netSalary,
	};
}
console.log(calculateNetSalary(200000, 35000));
function calculateNetSalaryFromInput() {
	const basicSalary = Number(document.getElementById("basicSalaryInput").value);
	const benefits = Number(document.getElementById("benefitsInput").value);

	const salaryDetails = calculateNetSalary(basicSalary, benefits);

	document.getElementById("salaryResult").innerText = `
		Gross Salary: ${salaryDetails.grossSalary}
		nhif Deduction: ${salaryDetails.nhifDeduction}
		NSSF Deduction: ${salaryDetails.nssfDeduction}
		paye Deduction: ${salaryDetails.payeDeduction}
		Net Salary: ${salaryDetails.netSalary}
	`;
}
