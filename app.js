/* Arabic-curriculum: محرك موسوعة اللغة العربية الأردنية */
(() => {
  "use strict";

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const grade = $("#grade");
  const semester = $("#semester");
  const track = $("#track");
  const trackWrap = $("#trackWrap");
  const search = $("#search");
  const lessonList = $("#lessonList");
  const home = $("#home");
  const detail = $("#detail");
  const dMeta = $("#dMeta");
  const dTitle = $("#dTitle");
  const dContent = $("#dContent");
  const quizBox = $("#quiz");
  const quizResult = $("#quizResult");
  const doneCount = $("#doneCount");
  const lessonCount = $("#lessonCount");

  if (!grade || !lessonList || !detail || !dContent) return;

  const lessons = [
    {
      id: "nominal", category: "النحو", title: "الجملة الاسمية: المبتدأ والخبر",
      grades: [4,5,6,7,8,9,10,11,12], semesters: [1,2],
      intro: "نستعمل الجملة الاسمية عندما نريد أن نخبر عن اسم أو نصفه أو نبيّن حاله. وهي من أهم أنواع الجمل في العربية.",
      explanation: [
        ["ما الجملة الاسمية؟", "هي الجملة التي تبدأ باسم، وتتكون في صورتها الأساسية من ركنين: المبتدأ والخبر."],
        ["المبتدأ", "اسم نبدأ به الكلام ونتحدث عنه، ويكون مرفوعاً غالباً. نسأل: عمّن أو عمّ نتحدث؟"],
        ["الخبر", "ما نخبر به عن المبتدأ ويتمم معنى الجملة، ويكون مرفوعاً إذا كان مفرداً."],
        ["علامات الرفع", "الضمة في المفرد وجمع التكسير وجمع المؤنث السالم، والألف في المثنى، والواو في جمع المذكر السالم والأسماء الخمسة بشروطها."]
      ],
      examples: [
        ["الحديقةُ جميلةٌ.", "الحديقةُ: مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة. جميلةٌ: خبر مرفوع وعلامة رفعه الضمة الظاهرة."],
        ["الطالبانِ مجتهدانِ.", "الطالبانِ: مبتدأ مرفوع وعلامة رفعه الألف لأنه مثنى. مجتهدانِ: خبر مرفوع وعلامة رفعه الألف لأنه مثنى."],
        ["المعلمونَ مخلصونَ.", "المعلمونَ: مبتدأ مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم. مخلصونَ: خبر مرفوع وعلامة رفعه الواو."]
      ],
      cautions: ["ليس كل ما يأتي بعد المبتدأ كلمة واحدة؛ فقد يكون الخبر جملة أو شبه جملة.", "قد يتقدم الخبر على المبتدأ في بعض التراكيب، مثل: في الصفِّ طلابٌ."],
      quiz: [
        {q:"ما ركنَا الجملة الاسمية الأساسية؟", a:["الفعل والفاعل","المبتدأ والخبر","الفعل والمفعول به"], correct:1, why:"الجملة الاسمية تتكون في أصلها من مبتدأ نحدث عنه وخبر يتمم المعنى."},
        {q:"ما إعراب كلمة (مشرقٌ) في: الجوُّ مشرقٌ؟", a:["مبتدأ مرفوع","خبر مرفوع","نعت منصوب"], correct:1, why:"مشرقٌ تخبرنا عن الجو، فهي خبر مرفوع بالضمة."}
      ]
    },
    {
      id:"verbal", category:"النحو", title:"الجملة الفعلية: الفعل والفاعل والمفعول به",
      grades:[4,5,6,7,8,9,10,11,12], semesters:[1,2],
      intro:"تدل الجملة الفعلية على حدث مرتبط بزمن، وتبدأ غالباً بفعل.",
      explanation:[
        ["الفعل", "كلمة تدل على حدث وزمن: ماضٍ مثل كتبَ، ومضارع مثل يكتبُ، وأمر مثل اكتبْ."],
        ["الفاعل", "اسم يدل على من قام بالفعل أو اتصف به، وهو مرفوع دائماً."],
        ["المفعول به", "اسم وقع عليه فعل الفاعل، ويكون منصوباً إذا كان فعلاً متعدياً."],
        ["ترتيب شائع", "فعل + فاعل + مفعول به، مثل: قرأَ الطالبُ القصةَ."]
      ],
      examples:[
        ["زرعَ الفلاحُ الشجرةَ.", "زرعَ: فعل ماضٍ مبني على الفتح. الفلاحُ: فاعل مرفوع بالضمة. الشجرةَ: مفعول به منصوب بالفتحة."],
        ["تكتبُ سلمى الواجبَ.", "تكتبُ: فعل مضارع مرفوع بالضمة. سلمى: فاعل مرفوع بضمة مقدرة على الألف. الواجبَ: مفعول به منصوب بالفتحة."]
      ],
      cautions:["لا تخلط بين الفاعل والمفعول به: الفاعل يقوم بالفعل، والمفعول به يقع عليه الفعل.","قد يكون الفاعل ضميراً مستتراً أو متصلاً بالفعل."],
      quiz:[
        {q:"في جملة (فتحَ الحارسُ البابَ)، ما الفاعل؟",a:["فتحَ","الحارسُ","البابَ"],correct:1,why:"الحارس هو الذي قام بالفتح، لذلك فهو الفاعل."},
        {q:"ما علامة نصب (الكتابَ) في: قرأتُ الكتابَ؟",a:["الضمة","الكسرة","الفتحة"],correct:2,why:"الكتاب مفعول به مفرد منصوب وعلامة نصبه الفتحة."}
      ]
    },
    {
      id:"adjective", category:"النحو", title:"النعت والمنعوت",
      grades:[4,5,6,7,8,9,10,11,12], semesters:[1,2],
      intro:"نستخدم النعت لإضافة وصف إلى اسم قبله، فيصبح المعنى أكثر تحديداً ووضوحاً.",
      explanation:[
        ["المنعوت", "هو الاسم الذي نريد وصفه، ويسمى أيضاً الموصوف."],
        ["النعت", "تابع يذكر لبيان صفة في المنعوت أو تخصيصه."],
        ["المطابقة", "يتبع النعت منعوته في الإعراب، والتعريف والتنكير، والتذكير والتأنيث، والإفراد والتثنية والجمع في النعت الحقيقي."],
        ["طريقة اكتشافه", "اسأل: أيُّ اسم وُصف؟ وما الصفة التي أضيفت إليه؟"]
      ],
      examples:[
        ["قرأتُ قصةً ممتعةً.", "قصةً: مفعول به منصوب بالفتحة، وهو المنعوت. ممتعةً: نعت منصوب بالفتحة؛ لأنه تبع منعوته في الإعراب والتنكير والتأنيث والإفراد."],
        ["مررتُ بالطالبِ المجتهدِ.", "الطالبِ: اسم مجرور بالباء وعلامة جره الكسرة، وهو المنعوت. المجتهدِ: نعت مجرور بالكسرة."],
        ["جاءت الطالبتانِ المجتهدتانِ.", "المجتهدتانِ نعت مرفوع بالألف لأنه مثنى، وقد طابق منعوته في التثنية والتأنيث والتعريف والرفع."]
      ],
      cautions:["إذا كان المنعوت مجروراً وجب أن يكون النعت الحقيقي مجروراً مثله.","انتبه إلى أن النعت قد يكون جملة أو شبه جملة في مواضع وشروط محددة."],
      quiz:[
        {q:"في (شاهدتُ طائراً جميلاً)، ما النعت؟",a:["شاهدتُ","طائراً","جميلاً"],correct:2,why:"جميلاً وصف للطائر، لذلك هو النعت."},
        {q:"يتبع النعت الحقيقي منعوته في:",a:["الإعراب فقط","الإعراب والتعريف والتنكير والتذكير والتأنيث والعدد","الزمن"],correct:1,why:"النعت الحقيقي يطابق منعوته في هذه الجوانب."}
      ]
    },
    {
      id:"addition", category:"النحو", title:"الإضافة: المضاف والمضاف إليه",
      grades:[4,5,6,7,8,9,10,11,12], semesters:[1,2],
      intro:"الإضافة تركيب من اسمين يربط بينهما معنى الملكية أو الاختصاص أو غير ذلك، مثل: كتابُ الطالبِ.",
      explanation:[
        ["المضاف", "الاسم الأول في التركيب، ويعرب حسب موقعه في الجملة، ولا يقبل التنوين في الإضافة."],
        ["المضاف إليه", "الاسم الثاني، ويكون مجروراً دائماً، وعلامة جره بحسب نوعه."],
        ["المعنى", "قد تدل الإضافة على الملكية: سيارةُ أبي، أو الاختصاص: بابُ الصفِّ."],
        ["علامات الجر", "الكسرة للمفرد وجمع التكسير وجمع المؤنث السالم، والياء للمثنى وجمع المذكر السالم والأسماء الخمسة بشروطها."]
      ],
      examples:[
        ["بابُ المدرسةِ مفتوحٌ.", "بابُ: مبتدأ مرفوع بالضمة، وهو مضاف. المدرسةِ: مضاف إليه مجرور بالكسرة. مفتوحٌ: خبر مرفوع بالضمة."],
        ["قرأتُ كتابَيِ الطالبينِ.", "كتابَيِ: مفعول به منصوب بالياء لأنه مثنى، وهو مضاف. الطالبينِ: مضاف إليه مجرور بالياء لأنه مثنى."]
      ],
      cautions:["المضاف إليه مجرور دائماً، أما المضاف فيتغير إعرابه حسب موقعه.","لا نضع التنوين على المضاف في الإضافة المباشرة."],
      quiz:[
        {q:"ما إعراب كلمة (البيتِ) في (بابُ البيتِ واسعٌ)؟",a:["فاعل مرفوع","مضاف إليه مجرور","مفعول به منصوب"],correct:1,why:"البيت هو الاسم الثاني في تركيب الإضافة، لذلك يعرب مضافاً إليه مجروراً."},
        {q:"أي الكلمات الآتية مضاف؟",a:["قلمُ في (قلمُ المعلمِ)","المعلمِ","في"],correct:0,why:"قلم هو الاسم الأول في تركيب الإضافة، فهو المضاف."}
      ]
    },
    {
      id:"tamyeez", category:"النحو", title:"التمييز",
      grades:[6,7,8,9,10,11,12], semesters:[1,2],
      intro:"التمييز اسم يزيل إبهاماً في كلمة أو جملة قبله، ويجعل المقصود أوضح.",
      explanation:[
        ["تعريفه", "اسم نكرة يوضح المقصود من اسم مبهم أو من نسبة مبهمة."],
        ["تمييز المفرد (الملفوظ)", "يأتي بعد ألفاظ المقادير والأعداد ونحوها، مثل: اشتريتُ لتراً زيتاً."],
        ["تمييز الجملة (الملحوظ)", "يفسر معنى جملة كاملة، مثل: ازداد الطالبُ علماً."],
        ["إعرابه", "يأتي منصوباً في صور كثيرة، وقد يجر بمن أو بالإضافة بحسب نوع التركيب والاستعمال."]
      ],
      examples:[
        ["ازدادَ الطالبُ علماً.", "ازدادَ: فعل ماضٍ. الطالبُ: فاعل مرفوع. علماً: تمييز منصوب بالفتحة، أزال الإبهام عن جهة الزيادة."],
        ["اشتريتُ كيلوغراماً تفاحاً.", "تفاحاً: تمييز منصوب بالفتحة، يوضح نوع المقدار المقصود."]
      ],
      cautions:["لا تحكم على الكلمة بأنها تمييز لمجرد أنها نكرة منصوبة؛ افحص المعنى والعلاقة بما قبلها.","قد يلتبس التمييز بالمفعول به أو الحال، والسياق هو الذي يحدد الوظيفة."],
      quiz:[
        {q:"في (امتلأ الإناءُ ماءً)، ما إعراب ماءً؟",a:["فاعل","تمييز منصوب","نعت"],correct:1,why:"ماءً يوضح الشيء الذي امتلأ به الإناء، فهو تمييز."},
        {q:"التمييز في الأصل اسم:",a:["معرفة","نكرة","موصول"],correct:1,why:"الأصل في التمييز أن يكون نكرة."}
      ]
    },
    {
      id:"hamza", category:"الإملاء", title:"الهمزة المتوسطة",
      grades:[5,6,7,8,9,10,11,12], semesters:[1,2],
      intro:"تكتب الهمزة المتوسطة بحسب أقوى الحركتين: حركة الهمزة وحركة الحرف الذي قبلها.",
      explanation:[
        ["ترتيب قوة الحركات", "الكسرة أقوى، ثم الضمة، ثم الفتحة، ثم السكون."],
        ["على نبرة (ئ)", "إذا كانت الكسرة أقوى، مثل: سُئِلَ، بئر."],
        ["على واو (ؤ)", "إذا كانت الضمة أقوى، مثل: مُؤمن، رؤوس."],
        ["على ألف (أ)", "إذا كانت الفتحة أقوى، مثل: سأل، مسألة، يأكل."],
        ["على السطر", "لها حالات خاصة، منها بعض صور الهمزة المفتوحة بعد ألف مد، مثل: قراءة، وتراعى القواعد التفصيلية والاستثناءات."]
      ],
      examples:[
        ["سُئِلَ", "الهمزة مكسورة، والكسرة أقوى الحركات؛ لذلك كتبت على نبرة."],
        ["مُؤمن", "الهمزة ساكنة وما قبلها مضموم؛ الضمة أقوى من السكون، فكتبت على واو."],
        ["سَأَلَ", "الهمزة مفتوحة وما قبلها مفتوح؛ كتبت على ألف."]
      ],
      cautions:["لا تنظر إلى حركة الهمزة وحدها؛ قارنها بحركة الحرف السابق.","هناك حالات تفصيلية تتعلق بحروف المد والتطرف والتقاء الهمزات، فلا تعمم قاعدة مختصرة عليها."],
      quiz:[
        {q:"لماذا كتبت الهمزة في (سُئِل) على نبرة؟",a:["لأن الكسرة أقوى","لأن الفتحة أقوى","لأن السكون أقوى"],correct:0,why:"الكسرة أقوى الحركات، ولذلك تناسبها النبرة."},
        {q:"اختر الكتابة الصحيحة:",a:["مأمن","مؤمن","مئمن"],correct:1,why:"الهمزة مضمومة وما قبلها مضموم، فتكتب على واو."}
      ]
    },
    {
      id:"reading", category:"القراءة", title:"الفكرة الرئيسة والأفكار الفرعية",
      grades:[4,5,6,7,8,9,10,11,12], semesters:[1,2],
      intro:"فهم النص لا يقتصر على قراءة الكلمات؛ بل يتطلب تحديد موضوعه والفكرة التي يريد الكاتب إيصالها.",
      explanation:[
        ["الفكرة الرئيسة", "المعنى العام الذي يدور حوله النص كله، ويمكن التعبير عنه بجملة موجزة."],
        ["الأفكار الفرعية", "تفاصيل أو أسباب أو أمثلة تشرح الفكرة الرئيسة وتدعمها."],
        ["خطوات الاستخراج", "اقرأ النص كاملاً، لاحظ الكلمات المتكررة، اسأل: ما الموضوع؟ ثم لخّص المعنى في جملة."],
        ["التحقق", "يجب أن تشمل الفكرة الرئيسة معظم أجزاء النص، لا جملة واحدة فقط."]
      ],
      examples:[
        ["نص عن أهمية الماء وترشيد استهلاكه.", "الفكرة الرئيسة المحتملة: الماء أساس الحياة ويجب المحافظة عليه. ومن الأفكار الفرعية: استعمال الماء في الزراعة، وعدم الإسراف، وطرق ترشيد الاستهلاك."]
      ],
      cautions:["عنوان النص قد يساعدك لكنه ليس دائماً الفكرة الرئيسة بصيغتها الدقيقة.","لا تكتب تفصيلاً صغيراً على أنه الفكرة الرئيسة."],
      quiz:[
        {q:"الفكرة الرئيسة هي:",a:["تفصيل واحد","المعنى العام للنص","كلمة صعبة"],correct:1,why:"الفكرة الرئيسة تلخص محور النص كله."},
        {q:"الأفكار الفرعية وظيفتها:",a:["دعم الفكرة الرئيسة وتوضيحها","مناقضة النص دائماً","استبدال العنوان"],correct:0,why:"الأفكار الفرعية تشرح الفكرة الرئيسة بالأسباب والتفاصيل والأمثلة."}
      ]
    },
    {
      id:"paragraph", category:"التعبير", title:"كتابة فقرة مترابطة",
      grades:[4,5,6,7,8,9,10,11,12], semesters:[1,2],
      intro:"الفقرة الجيدة تعرض فكرة واحدة مترابطة في جمل مرتبة وواضحة.",
      explanation:[
        ["الجملة الرئيسة", "تقدم موضوع الفقرة أو فكرتها الأساسية."],
        ["الجمل الداعمة", "تشرح الفكرة وتقدم أسباباً أو أمثلة أو معلومات مرتبطة بها."],
        ["أدوات الربط", "مثل: لأن، لذلك، ثم، بالإضافة إلى ذلك، وأخيراً."],
        ["الخاتمة", "تنهي الفقرة بجملة تلخص الفكرة أو تؤكد أهميتها."]
      ],
      examples:[
        ["موضوع: المحافظة على النظافة.", "النظافة سلوك حضاري يحافظ على صحة الإنسان وجمال المكان. فنحن نحافظ على نظافة بيوتنا ومدارسنا، ونضع النفايات في الأماكن المخصصة لها. كما أن التعاون على تنظيف البيئة يقلل انتشار الأمراض. لذلك يجب أن نجعل النظافة عادة يومية."]
      ],
      cautions:["تجنب الانتقال المفاجئ إلى فكرة لا ترتبط بموضوع الفقرة.","راجع علامات الترقيم والإملاء، ولا تكرر الفكرة نفسها بصيغ متعددة."],
      quiz:[
        {q:"ما الأفضل أن تتناوله الفقرة الواحدة؟",a:["أفكار كثيرة لا رابط بينها","فكرة رئيسة واحدة وتفاصيل داعمة","عنوان فقط"],correct:1,why:"وحدة الموضوع والترابط من أهم صفات الفقرة الجيدة."},
        {q:"أي أداة تفيد التعليل؟",a:["لأن","ثم","أخيراً"],correct:0,why:"لأن أداة تعليل تربط السبب بالنتيجة."}
      ]
    }
  ];

  function fillGrades() {
    if (!grade.options.length) {
      for (let n = 4; n <= 12; n++) {
        const op = document.createElement("option");
        op.value = String(n);
        op.textContent = `الصف ${n}`;
        grade.append(op);
      }
    }
    if (!grade.value) grade.value = "4";
  }

  function currentLessons() {
    const g = Number(grade.value || 4);
    const term = Number(semester?.value || 1);
    const trackValue = track?.value || "academic";
    const q = (search?.value || "").trim().toLocaleLowerCase("ar");
    return lessons.filter(item =>
      item.grades.includes(g) &&
      item.semesters.includes(term) &&
      (!q || `${item.category} ${item.title} ${item.intro}`.toLocaleLowerCase("ar").includes(q))
    ).map(item => ({...item, trackValue}));
  }

  function completedSet() {
    try { return new Set(JSON.parse(localStorage.getItem("arabicCurriculumDone") || "[]")); }
    catch (_) { return new Set(); }
  }

  function updateDoneCount() {
    if (doneCount) doneCount.textContent = String(completedSet().size);
  }

  function renderList() {
    const g = Number(grade.value || 4);
    if (trackWrap) trackWrap.style.display = g >= 11 ? "block" : "none";
    const items = currentLessons();
    if (lessonCount) lessonCount.textContent = `${items.length} درس`;
    lessonList.innerHTML = "";
    if (!items.length) {
      lessonList.innerHTML = '<p class="note">لا توجد دروس مطابقة لهذا الاختيار حالياً. جرّب تغيير الفصل أو كلمة البحث. ستضاف دروس كل صف بعد مراجعة الكتاب الرسمي.</p>';
      return;
    }
    const done = completedSet();
    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "lesson";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.innerHTML = `<small class="meta">${item.category} · الصف ${g} · الفصل ${semester?.value === "2" ? "الثاني" : "الأول"}</small><strong>${item.title}</strong><p>${item.intro}</p><span class="pill">${done.has(item.id) ? "مكتمل ✓" : "افتح الشرح"}</span>`;
      card.addEventListener("click", () => openLesson(item));
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLesson(item); } });
      lessonList.append(card);
    });
  }

  let activeLesson = null;
  function openLesson(item) {
    activeLesson = item;
    if (home) home.classList.add("hide");
    detail.classList.add("show");
    detail.classList.remove("hide");
    const g = Number(grade.value || 4);
    const path = g >= 11 ? ` · المسار ${track?.value === "vocational" ? "المهني" : "الأكاديمي"}` : "";
    if (dMeta) dMeta.textContent = `${item.category} · الصف ${g} · الفصل ${semester?.value === "2" ? "الثاني" : "الأول"}${path}`;
    if (dTitle) dTitle.textContent = item.title;
    dContent.innerHTML = "";
    addSection("تمهيد", item.intro);
    item.explanation.forEach(([title, body], i) => addSection(`الشرح ${i+1}: ${title}`, body));
    const exTitle = document.createElement("h3");
    exTitle.textContent = "أمثلة محلولة خطوة بخطوة";
    dContent.append(exTitle);
    item.examples.forEach(([sentence, solution], i) => {
      const box = document.createElement("div");
      box.className = "example";
      const strong = document.createElement("strong");
      strong.textContent = `المثال ${i+1}: ${sentence}`;
      const p = document.createElement("p");
      p.textContent = solution;
      box.append(strong, p);
      dContent.append(box);
    });
    const cautionTitle = document.createElement("h3");
    cautionTitle.textContent = "تنبيهات وأخطاء شائعة";
    dContent.append(cautionTitle);
    const ul = document.createElement("ul");
    item.cautions.forEach(t => { const li=document.createElement("li"); li.textContent=t; ul.append(li); });
    dContent.append(ul);
    const practiceTitle = document.createElement("h3");
    practiceTitle.textContent = "طريقة المذاكرة";
    dContent.append(practiceTitle);
    const practice = document.createElement("p");
    practice.textContent = "اقرأ التعريف، ثم أعد شرح القاعدة بأسلوبك، وحلّل الأمثلة بنفسك قبل قراءة الحل. بعد ذلك أجب عن أسئلة الاختبار وصحح أخطاءك.";
    dContent.append(practice);
    renderQuiz(item);
    const completeBtn = $("#completeBtn");
    if (completeBtn) {
      completeBtn.textContent = completedSet().has(item.id) ? "✓ الدرس مكتمل (اضغط لإلغاء العلامة)" : "✓ علّم الدرس بأنه مكتمل";
      completeBtn.onclick = toggleComplete;
    }
    if (quizResult) quizResult.textContent = "";
    window.scrollTo({top:0, behavior:"smooth"});
  }

  function addSection(title, body) {
    const h = document.createElement("h3"); h.textContent = title;
    const p = document.createElement("p"); p.textContent = body;
    dContent.append(h,p);
  }

  function renderQuiz(item) {
    if (!quizBox) return;
    quizBox.innerHTML = "";
    item.quiz.forEach((q, i) => {
      const wrap = document.createElement("div");
      wrap.className = "quizq";
      const title = document.createElement("strong");
      title.textContent = `${i+1}. ${q.q}`;
      wrap.append(title);
      q.a.forEach((answer, j) => {
        const label = document.createElement("label");
        label.className = "option";
        const radio = document.createElement("input");
        radio.type = "radio"; radio.name = `q${i}`; radio.value = String(j);
        radio.style.width = "auto"; radio.style.marginLeft = "8px";
        label.append(radio, document.createTextNode(answer));
        wrap.append(label);
      });
      quizBox.append(wrap);
    });
    const check = $("#checkQuiz");
    if (check) check.onclick = checkQuiz;
  }

  function checkQuiz() {
    if (!activeLesson || !quizBox) return;
    let score = 0;
    activeLesson.quiz.forEach((q, i) => {
      const chosen = quizBox.querySelector(`input[name="q${i}"]:checked`);
      const wrap = quizBox.children[i];
      const old = wrap.querySelector(".answer-feedback");
      if (old) old.remove();
      const feedback = document.createElement("p");
      feedback.className = "answer-feedback";
      if (chosen && Number(chosen.value) === q.correct) {
        score++;
        feedback.className += " correct";
        feedback.textContent = `إجابة صحيحة. ${q.why}`;
      } else {
        feedback.className += " wrong";
        feedback.textContent = `الإجابة الصحيحة: ${q.a[q.correct]}. ${q.why}`;
      }
      wrap.append(feedback);
    });
    if (quizResult) quizResult.textContent = `نتيجتك: ${score} من ${activeLesson.quiz.length}. راجع تفسير كل إجابة ثم أعد المحاولة.`;
  }

  function toggleComplete() {
    if (!activeLesson) return;
    const done = completedSet();
    if (done.has(activeLesson.id)) done.delete(activeLesson.id);
    else done.add(activeLesson.id);
    try { localStorage.setItem("arabicCurriculumDone", JSON.stringify([...done])); } catch (_) {}
    updateDoneCount();
    const btn = $("#completeBtn");
    if (btn) btn.textContent = done.has(activeLesson.id) ? "✓ الدرس مكتمل (اضغط لإلغاء العلامة)" : "✓ علّم الدرس بأنه مكتمل";
    renderList();
  }

  function backToList() {
    detail.classList.remove("show");
    detail.classList.add("hide");
    if (home) home.classList.remove("hide");
    window.scrollTo({top:0, behavior:"smooth"});
  }

  fillGrades();
  [grade, semester, track].filter(Boolean).forEach(el => el.addEventListener("change", renderList));
  if (search) search.addEventListener("input", renderList);
  const back = $("#back");
  if (back) back.addEventListener("click", backToList);
  $$("[data-tab]").forEach(btn => btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    if (tab === "home") {
      if (home) home.classList.remove("hide");
      detail.classList.remove("show"); detail.classList.add("hide");
      $("#about")?.classList.add("hide");
    } else if (tab === "about") {
      if (home) home.classList.add("hide");
      detail.classList.remove("show"); detail.classList.add("hide");
      $("#about")?.classList.remove("hide");
    }
    $$("[data-tab]").forEach(b => b.classList.toggle("active", b === btn));
  }));
  updateDoneCount();
  renderList();
})();
