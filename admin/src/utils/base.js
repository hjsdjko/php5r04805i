const base = {
    get() {
        return {
            url : "http://localhost:8080/php5r04805i/",
            name: "php5r04805i",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php5r04805i/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "多媒体教室管理系统"
        } 
    }
}
export default base
