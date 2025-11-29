// プロンプト生成をクリックする
$("#makeprompt").on("click", function () {
  const name = $(".servicename").val();
  const what = $(".servicewhat").val();
  const point1 = $(".servicepoint1").val();
  const point2 = $(".servicepoint2").val();
  const point3 = $(".servicepoint3").val();
  const mission = $(".brandmission").val();
  const tagline = $(".brandtagline").val();
  const coremessage = $(".brandcoremessage").val();
  const tone = $(".brandtone").val();
  const standard = $(".brandstandard").val();
  const ng = $(".brandng").val();
  const industry = $(".targetindustry").val();
  const scall = $(".targetscall").val();
  const branch = $(".targetbranch").val();
  const job = $(".targetjob").val();
  const position = $(".targetposition").val();
  const pain = $(".targetpain").val();

  // 上記変数を1つの変数へと格納
  // 補足：localstorageは2つの文字列しか保存できないため、1つの変数に入れる必要がある
  const data ={
    servicename:name,
    servicewhat:what,
    servicepoint1:point1,
    servicepoint2:point2,
    servicepoint3:point3,
    brandmission:mission,
    brandcoremessage:coremessage,
    brandtone:tone,
    brandstandard:standard,
    targetindustry:industry,
    targetbranch:branch,
    targetjob:job,
    targetposition:position,
    targetpain:pain,
  } 

  //格納データを文字列へ変換
  //補足：localstorageは文字列しか保存できないため、キーと変数の関係性があるデータ構造を文字列へ変換
  const jsonData = JSON.stringify(data);

  // ローカルストレージへ保存
  // 補足：localstorageは2つの文字列しか保存できないため、nameをキーとし、それ以降のリストを値とする
  localStorage.setItem('latest_draft', jsonData);

  // プロンプトの出力画面
  const html = `
<li>
  <p>あなたは、BtoBマーケティングに精通したマーケターです。</p>
  <p>下記の情報を厳守しつつ、マーケティングの戦略を統一感を維持しつつ提案してください。</p>
  <br>
  <p>#サービスについて</p>
  <p>--サービス名：${name}</p>
  <p>--サービス概要：${what}</p>
  <p>--強み①：${point1}</p>
  <p>--強み②：${point2}</p>
  <p>--強み③：${point3}</p>
  <br>

  <p>#ブランドについて</p>
  <p>--ブランドミッション：${mission}</p>
  <p>--ブランドタグライン：${tagline}</p>
  <p>--ブランドコアメッセージ：${coremessage}</p>
  <p>--ブランドトーン:${tone}</p>
  <p>--ブランド統一基準:${standard}</p>
  <p>--ブランドのNGワード:${ng}</p>
  <br>

  <p>#ターゲットについて</p>
  <p>--業界：${industry}</p>
  <p>--社員数：${scall}</p>
  <p>--部署：${branch}</p>
  <p>--職種：${job}</p>
  <p>--役職：${position}</p>
  <p>--ペインポイント：${pain}</p>
</li>

`;
  $("#list").append(html);
});

// ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (!key) {
        continue; 
    }

    const jsonString = localStorage.getItem(key);
    let dataObject;
    try {
        dataObject = JSON.parse(jsonString);
    } catch (e) {
        continue;
    }
    
    // 復元したオブジェクトから必要な情報を取り出す
    // 補足：元の変数名を避けて、オブジェクトから直接値を取り出す
    const name = dataObject.servicename;
    const what = dataObject.servicewhat;
    const mission = dataObject.brandmission;
    const tagline = dataObject.brandtagline; 
    const coremessage = dataObject.brandcoremessage; 
    const tone = dataObject.brandtone;
    const standard = dataObject.brandstandard;
    const ng = dataObject.brandng;
    const industry = dataObject.targetindustry;
    const scall = dataObject.targetscall;
    const branch = dataObject.targetbranch;
    const job = dataObject.targetjob;
    const position = dataObject.targetposition;
    const pain = dataObject.targetpain;
}

// プロンプトのみリセットをクリックする
$("#clearprompt").on("click", function () {
  localStorage.clear();
  $("#list").empty();
});

// プロンプトをコピーをクリックする
$("#copyprompt").on("click", function() {
  const prompttext = $("#list").text(); 
  navigator.clipboard.writeText(prompttext)
});

// 全てリセットをクリックする
$("#clearall").on("click", function () {
  localStorage.clear();
  $("#list").empty();
  $("input, textarea").val('');
});