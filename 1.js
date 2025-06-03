function getFormattedTime() {
            const vWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            const date = new Date();
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            const vWeek_s = date.getDay();

            let wenhou;
            if (hours >= 5 && hours < 11) {
                wenhou = "上午好！现在是";
            } else if (hours >= 11 && hours < 14) {
                wenhou = "中午好！现在是";
            } else if (hours >= 14 && hours < 18) {
                wenhou = "下午好！现在是";
            } else {
                wenhou = "晚上好！现在是";
            }

            return wenhou + year + "年" + month + "月" + day + "日" + " " + hours + ":" + minutes + ":" + seconds + " " + vWeek[vWeek_s];
        }
function time() {
    alert(getFormattedTime());
}

        
function updateTime() {
    const timeNowElement = document.getElementById("time-now");
    timeNowElement.textContent = getFormattedTime();
}
function addRow() {
    let table = document.getElementById('table');
    let length = table.rows.length;
    let newRow = table.insertRow(length);
    console.log(newRow);
    
    let nameCol = newRow.insertCell(0);
    let phoneCol = newRow.insertCell(1);
    let actionCol = newRow.insertCell(2);
    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '无联系方式';
    actionCol.innerHTML = '<button onclick="editRow(this)">修改</button><button onclick="removeRow(this)">删除</button>';
}
function editRow(button) {
    let row = button.parentNode.parentNode;
    let name =row.cells[0];
    let phone =row.cells[1];
    let inputName = prompt("请输入姓名");
    let inputphone = prompt("请输入联系方式");
    name.innerHTML = inputName;
    phone.innerHTML = inputphone;
}
function removeRow(button) {
    let row = button.parentNode.parentNode;
    console.log(row);
    
    row.parentNode.removeChild(row);
}

/* time(); */
updateTime();
document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    setInterval(updateTime, 1000);  // 每秒更新一次
});