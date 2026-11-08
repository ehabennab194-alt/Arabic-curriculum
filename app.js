/* Arabic-curriculum: تشغيل واجهة المناهج */
(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const grade = $("#grade"), semester = $("#semester"), track = $("#track");
  const trackWrap = $("#trackWrap"), search = $("#search");
  if (!grade) return;

  // تعبئة الصفوف تلقائياً حتى لا تبقى قائمة الصف فارغة.
  if (!grade.options.length) {
    for (let n=4; n<=12; n++) {
      const option=document.createElement("option");
      option.value=String(n); option.textContent=`الصف ${n}`;
      grade.append(option);
    }
  }
  if (!grade.value) grade.value="4";

  const lessons = [
    ["النحو","الجملة الاسمية","تتكون الجملة الاسمية غالباً من مبتدأ وخبر، وكلاهما مرفوع. مثال: العلمُ نورٌ؛ العلم مبتدأ مرفوع، ونور خبر مرفوع."],
    ["النحو","الجملة الفعلية","تبدأ الجملة الفعلية بفعل، ويأتي بعدها الفاعل، وقد يأتي المفعول به. مثال: قرأ الطالبُ الدرسَ؛ قرأ فعل ماضٍ، الطالب فاعل، الدرس مفعول به."],
    ["النحو","النعت والمنعوت","النعت تابع يصف اسماً قبله يسمى المنعوت، ويتبعه في الإعراب والتعريف والتنكير والتذكير والتأنيث. مثال: قرأت كتاباً مفيداً؛ مفيداً نعت منصوب."],
    ["النحو","المضاف والمضاف إليه","الإضافة تركيب من اسمين، والثاني مضاف إليه مجرور دائماً. مثال: بابُ المدرسةِ؛ المدرسة مضاف إليه مجرور."],
    ["النحو","التمييز","التمييز اسم يزيل إبهاماً قبله، ويأتي منصوباً في صور كثيرة. مثال: ازداد الطالب علماً؛ علماً تمييز منصوب."],
    ["الإملاء","الهمزة المتوسطة","نقارن حركة الهمزة وحركة الحرف الذي قبلها، ونكتبها على ما يناسب أقوى الحركتين. ترتيب القوة: الكسرة ثم الضمة ثم الفتحة ثم السكون."],
    ["القراءة","الفكرة الرئيسة والفرعية","الفكرة الرئيسة هي محور النص، أما الأفكار الفرعية فتشرحها وتدعمها بالتفاصيل والأمثلة."],
    ["التعبير","كتابة فقرة مترابطة","ابدأ بجملة رئيسة، ثم أضف أفكاراً داعمة مرتبة وروابط مناسبة، واختم بجملة تلخص الفكرة."]
  ];

  const panels = $$(".panel");
  const lessonPanel = panels.find(p => p.querySelector("#search")) || panels[panels.length-1];
  let list = $("#lessonList") || (lessonPanel && lessonPanel.querySelector(".lesson-list"));
  if (!list && lessonPanel) {
    list=document.createElement("div"); list.id="lessonList";
    lessonPanel.append(list);
  }
  function render() {
    const g=Number(grade.value || 4);
    if (trackWrap) trackWrap.style.display = g>=11 ? "block" : "none";
    const term=semester ? semester.value : "1";
    const trackName=track && g>=11 ? (track.value==="vocational" ? "المهني" : "الأكاديمي") : "";
    const heading=lessonPanel && lessonPanel.querySelector("h2");
    if (heading) heading.textContent=`دروس الصف ${g} — الفصل ${term==="2"?"الثاني":"الأول"}${trackName?" — المسار "+trackName:""}`;
    const q=(search && search.value || "").trim();
    if (list) {
      const filtered=lessons.filter(x=>x.join(" ").includes(q));
      list.innerHTML=filtered.map(x=>`<article class="lesson"><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("") || "<p>لا توجد نتائج مطابقة.</p>";
    }
  }
  [grade,semester,track,search].filter(Boolean).forEach(el=>el.addEventListener(el===search?"input":"change",render));
  render();

  // التنقل بين تبويبات الصفحة إن وجدت.
  $$("[data-tab]").forEach(btn=>btn.addEventListener("click",()=>{
    const tab=btn.dataset.tab;
    $$("[data-tab]").forEach(b=>b.classList.toggle("active",b===btn));
    ["home","about","detail"].forEach(id=>{
      const section=$("#"+id);
      if(section) section.classList.toggle("hide",id!==tab);
    });
  }));
  const back=$("#back");
  if(back) back.addEventListener("click",()=>{const home=$("#home");if(home)home.classList.remove("hide");const detail=$("#detail");if(detail)detail.classList.remove("show");});
  const quiz=$("#checkQuiz");
  if(quiz) quiz.addEventListener("click",()=>alert("راجع أمثلة الدرس وتأكد من فهمك للقواعد قبل الانتقال إلى الدرس التالي."));
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    // لا حاجة إلى service worker في هذه النسخة؛ يظل الموقع قابلاً للفتح عبر GitHub Pages.
  }
})();