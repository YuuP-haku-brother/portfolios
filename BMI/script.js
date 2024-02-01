function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
  
    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
      var bmi = weight / ((height / 100) * (height / 100));
      var result = "BMI: " + bmi.toFixed(2) + " - ";
  
      var tableData = [
        { range: { min: 0, max: 18.5 }, label: "低体重(痩せ型)" },
        { range: { min: 18.5, max: 25 }, label: "正常体重" },
        { range: { min: 25, max: 30 }, label: "肥満（1度）" },
        { range: { min: 30, max: 35 }, label: "肥満（2度）" },
        { range: { min: 35, max: 40 }, label: "肥満（3度）" },
        { range: { min: 40, max: Number.POSITIVE_INFINITY }, label: "肥満（4度）" }
      ];
  
      var obesityDegree = getObesityDegree(bmi, tableData);
      result += obesityDegree.label;
  
      var healthyWeight = 22 * ((height / 100) * (height / 100));
      var weightDifference = weight - healthyWeight;
  
      var topResult = result;
      var bottomResult = "適正体重: " + healthyWeight.toFixed(2) + "kg - 適正体重との差: ";
      bottomResult += weightDifference >= 0 ? "+" + weightDifference.toFixed(2) + "kg" : weightDifference.toFixed(2) + "kg";
  
      document.getElementById("topResult").innerHTML = topResult;
      document.getElementById("bottomResult").innerHTML = bottomResult;
  
      // 表示中のBMI範囲に応じて色を変更
      highlightBMIRange(obesityDegree);
    } else {
      alert("正しい体重と身長を入力してください。");
    }
  }
  
  function highlightBMIRange(obesityDegree) {
    // 全てのセルから色をリセット
    var cells = document.querySelectorAll("td");
    cells.forEach(function(cell) {
      cell.style.backgroundColor = "white";
    });
  
    // 現在のBMI範囲に対応するセルとその隣接セルに色を付ける
    if (obesityDegree && obesityDegree.range) {
      var rangeCell = document.querySelector(`td[data-min="${obesityDegree.range.min}"][data-max="${obesityDegree.range.max}"]`);
      if (rangeCell) {
        rangeCell.style.backgroundColor = "lightblue";
  
        // 隣接セルにも同じ色を適用
        var nextCell = rangeCell.nextElementSibling;
        if (nextCell) {
          nextCell.style.backgroundColor = "lightblue";
        }
      }
    }
  }
  
  function getObesityDegree(bmi, tableData) {
    for (var i = 0; i < tableData.length; i++) {
      var range = tableData[i].range;
      if (bmi >= range.min && bmi < range.max) {
        return tableData[i];
      }
    }
    return { label: "未知" }; // テーブルにない範囲の場合は"未知"として扱う
  }
  
// ...（既存のコード）...

function resetInputs() {
  // 入力欄をリセット
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";

  // 結果をクリア
  document.getElementById("topResult").innerHTML = "";
  document.getElementById("bottomResult").innerHTML = "";

  // セルの色もリセット
  resetCellColors();
}

function resetCellColors() {
  // 全てのセルから色をリセット
  var cells = document.querySelectorAll("td");
  cells.forEach(function(cell) {
    cell.style.backgroundColor = "white";
  });
}

