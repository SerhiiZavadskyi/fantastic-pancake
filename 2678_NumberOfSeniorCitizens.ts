function countSeniors(details: string[]): number {
	return details.reduce(
		(cnt: number, personDetail: string) => cnt + Number(Number(personDetail.substring(11, 13)) > 60),
		0
	)
}
console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]))
