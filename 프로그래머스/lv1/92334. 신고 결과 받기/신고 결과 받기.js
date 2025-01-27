function solution(id_list, report, k) {
    report = [...new Set(report)];
    const reportedTiems = {};
    const mailReports = [];
    report.forEach(r => {
        const reportingID = r.split(' ')[0];
        const reportedID = r.split(' ')[1];
        reportedTiems[reportedID] = (reportedTiems[reportedID] || 0) + 1;
        mailReports.push([reportingID, reportedID]);
    })
    const blackList = Object.entries(reportedTiems).filter(r => r[1] >= k).map(arr => arr[0]);
    const blackListReports = mailReports.filter(r => blackList.some(id => r[1] === id));
    
    return id_list.map(id => blackListReports.reduce((count, report) => {
        report[0] === id && count++;
        return count;
    }, 0));
}