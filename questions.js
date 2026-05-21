const quizzesData = [
  {
    id: "communication-foundations",
    title: "Quiz 1: Communication Models, Apprehension & Competence",
    description: "Master communication models, internal/external noise barriers, settings, communication apprehension (CA), and competence metrics.",
    timeLimit: 900, // 15 minutes
    questions: [
      {
        question: "A senior developer quickly sends a heavily abbreviated, highly technical text message to a non-technical client to explain a system failure. The message cost zero dollars and took five seconds to send, but the client completely misunderstood the problem and panicked. How would you classify this communication?",
        options: [
          "Highly effective but inefficient",
          "Highly efficient but completely ineffective",
          "Both effective and efficient",
          "Neither effective nor efficient"
        ],
        answer: 1,
        explanation: `التواصل الكفء (Efficient) هو الذي يتم بأقل تكلفة وجهد وموارد )مثل رسالة نصية في 5
ثوانٍ(. لكن التواصل الفعّال (Effective) لا يتحقق إلا إذا تطابق المعنى المقصود من المرسل مع المعنى الذي فهمه
المستقبل. هنا، العميل لم يفهم الرسالة، لذلك التواصل لم يكن فعالاً رغم كفاءته .`
      },
      {
        question: "During an architecture planning meeting, a lead engineer completely zones out while a colleague is presenting because he is deeply worried about his mother's recent medical diagnosis. He misses crucial details. What specific communication breakdown occurred here?",
        options: [
          "Semantic noise",
          "Physical interference",
          "Internal noise",
          "Historical context distortion"
        ],
        answer: 2,
        explanation: `التشويش الداخلي (Internal noise) يندرج تحت التشويش النفسي، ويحدث عندما تتنافس
أفكار ومشاعر شخصية )مثل القلق على العائلة( مع الرسالة الموجهة للشخص، مما يشتت انتباهه بالكامل ويمنعه من التركي ز .`
      },
      {
        question: "A project manager is normally confident when speaking to her team of 15 developers. However, when she is asked to present the exact same project update at an annual conference in front of 500 industry strangers, she experiences severe anxiety and forgets her words. What type of apprehension is this?",
        options: [
          "Trait-like communication apprehension",
          "Audience-based communication apprehension",
          "Situational communication apprehension",
          "Context-based communication apprehension"
        ],
        answer: 3,
        explanation: `القلق المبني على السياق (Context-based CA) يظهر في مواقف أو بيئات معينة، مثل
التحدث أمام جمهور كبي ر (Public speaking)، بينما يكون الشخص طبيعيا وواثقا في سياقات أخرى كالتحدث مع فريقه .`
      },
      {
        question: "A marketing director wants to discuss a serious drop in an employee's performance. Instead of scheduling a private office meeting, he brings it up while standing in the middle of a loud, busy company hallway. The employee feels exposed and defensive. Which context of the communication was poorly chosen?",
        options: [
          "The social context",
          "The psychological context",
          "The historical context",
          "The physical context"
        ],
        answer: 3,
        explanation: `السياق المادي (Physical context) يشمل المكان، الإضاءة، الضوضاء، ومستوى
الخصوصية )المسافة بين الأشخاص(. مناقشة تقييم أداء سلبي في ممر مزدحم وصاخب هو فشل ذريع في إدارة السياق
المادي .`
      },
      {
        question: "An IT consultant is an expert in cloud computing theory and understands exactly what the client needs. He also strongly desires to win the contract. However, when trying to explain his strategy, he is unable to structure his thoughts sequentially or use appropriate body language, causing him to lose the pitch. According to communication competence, what does he lack?",
        options: [
          "Knowledge",
          "Skill",
          "Motivation",
          "Context"
        ],
        answer: 1,
        explanation: `المهارة (Skill) في التواصل هي القدرة العملية على تنفيذ المعرفة بخطوات متسلسلة وموجهة
نحو الهدف. المستشار يمتمل الدافع (Motivation) والمعرفة (Knowledge) ، لكنه يفتقد للمهارة العملية لتطبيق هذه
المعرفة على أرض الواقع .`
      },
      {
        question: "A software testing team rejects a new reporting tool proposed by the QA manager. Their rejection is not based on the tool's quality, but because the same manager forced a broken tool on them two years ago, causing them weeks of overtime. Which context is dominating their reaction?",
        options: [
          "Cultural context",
          "Social context",
          "Historical context",
          "Psychological context"
        ],
        answer: 2,
        explanation: `السياق التاريخي (Historical context) يعتمد على التفاعلات السابقة والتاريخ المشترك
بين الأطراف. ذاكرة الفريق السيئة مع المدير في الماضي هي التي شكلت طريقة استقبالهم وتفسيرهم لرسالته الحالية .`
      },
      {
        question: "While debugging a complex code block at 2 AM, a programmer talks aloud to himself, analyzing the loop logic and questioning why a variable is returning null. What communication setting does this specific scenario represent?",
        options: [
          "Interpersonal communication",
          "Small group communication",
          "Intrapersonal communication",
          "Semantic encoding"
        ],
        answer: 2,
        explanation: `التواصل الذاتي (Intrapersonal communication) هو التفاعل الذي يحدث داخل عقل
الشخص، أو عندما يتحدث مع نفسه )حتى لو بصوت مسموع( لتحليل أفكاره أو حل مشكلة ما .`
      },
      {
        question: "A CEO delivers an inspiring company-wide broadcast regarding the new yearly goals. At one point, she uses a highly controversial political metaphor. Many employees immediately get offended and stop listening to the rest of the business goals. What type of interference is this?",
        options: [
          "Internal noise",
          "Semantic noise",
          "Physical interference",
          "Decoding dysfunction"
        ],
        answer: 1,
        explanation: `التشويش الدلالي (Semantic noise) يحدث عندما يستخدم المتحدث كلمات أو رموزاً )مثل
مصطلحات معقدة أو عبارات مستفزة( تشتت انتباه المستمعين وتثير ردود فعل سلبية تصرفهم عن المعنى الأساسي للرسالة .`
      },
      {
        question: "You are providing IT support via a live text chat. After guiding a user through a long configuration process, the user simply replies with a \"thumbs up\" (👍) emoji and logs off. In the communication model, this emoji serves exactly as:",
        options: [
          "Nonverbal decoding",
          "Verbal feedback",
          "Nonverbal feedback",
          "Psychological context"
        ],
        answer: 2,
        explanation: `التغذية الراجعة (Feedback) في بيئة الإنترنت (Online interactions) لا تقتصر على
الكلمات المكتوبة، بل يمكن التعبير عنها بأسلوب غير لفظي باستخدام الرموز التعبيرية (Emoticons) والاختصارات
لتأكيد الفهم .`
      },
      {
        question: "An IT director prepares a 45-minute presentation explaining a massive system migration. To ensure the non-technical staff don't get lost, she explicitly breaks the presentation into three clear phases with summary slides in between. Which element of the \"Message\" component is she prioritizing?",
        options: [
          "Form (Organization)",
          "Internal Symbols",
          "Sender Decoding",
          "Semantic Context"
        ],
        answer: 0,
        explanation: `تنظيم الرسالة (Form/Organization) يكون حاسما عندما تكون الرسالة معقدة أو طويلة
جداً. ترتيب الأفكار في أقسام واضحة يساعد الجمهور على متابعة الخطاب العام دون تشتت .`
      },
      {
        question: "According to the lecture, the assumption that communication is an innate talent that cannot be fundamentally changed is:",
        options: [
          "Correct, because basic personality traits dictate communication styles.",
          "Incorrect, because communication is a learned style that can be improved through practice.",
          "Correct, but only for introverted individuals.",
          "Incorrect, because communication relies solely on academic IT qualifications."
        ],
        answer: 1,
        explanation: "المحاضرة تنفي تماما أن التواصل موهبة فطرية ثابتة، بل تؤكد أنه \"أسلوب مكتسب \" (Learned style) نتعلمه منذ الطفولة، ويمكننا كبالغين تحسينه بمراقبة الآخرين وتعلم مهارات جديدة ."
      },
      {
        question: "In the communication process, what distinguishes \"meanings\" from \"symbols\"?",
        options: [
          "Meanings are spoken words, while symbols are visual images.",
          "Meanings are the mental interpretations, while symbols are the tools (words/actions) used to represent them.",
          "Meanings are generated by the receiver, while symbols are generated only by the sender.",
          "Meanings are physical context elements, while symbols are psychological."
        ],
        answer: 1,
        explanation: `المعاني (Meanings) هي الأفكار والتفسيرات الموجودة داخل العقل. أما الرموز
(Symbols) فهي الأدوات الخارجية )مثل الكلمات أو الإيماءات( التي نستخدمها لتمثيل هذه الأفكار ونقلها للآخرين .`
      },
      {
        question: "When a software engineer mentally translates a complex set of client requirements from a document into a technical understanding of the desired architecture, this mental translation is called:",
        options: [
          "Encoding",
          "Interference",
          "Decoding",
          "Feedback generation"
        ],
        answer: 2,
        explanation: `فك الشفرة أو التفسي ر (Decoding) هو العملية التي يقوم بها المستقبل لترجمة رسالة )سواء
كانت نصا أو كلاما(ً إلى معنى مفهوم داخل عقله .`
      },
      {
        question: "Which component of the communication context focuses exclusively on the values, underlying assumptions, and rituals prevalent among a society?",
        options: [
          "Social context",
          "Historical context",
          "Psychological context",
          "Cultural context"
        ],
        answer: 3,
        explanation: `السياق الثقافي (Cultural context) هو البيئة الثقافية الأوسع التي تشمل المعتقدات والقيم
والعادات التي تؤثر على طريقة تواصل الأفراد داخل مجتمع معين .`
      },
      {
        question: "A manager needs to rapidly gather spontaneous ideas from her team and resolve any immediate misunderstandings about a new project. Which channel is strategically best for this specific goal?",
        options: [
          "A detailed written report",
          "An oral communication medium (like a face-to-face meeting)",
          "A formal email thread",
          "A company-wide physical memo"
        ],
        answer: 1,
        explanation: `القناة الشفهية (Oral channel) هي الأنسب عندما يكون الهدف الحصول على تغذية راجعة
فورية (Spontaneous feedback) وتوضيح أي سوء فهم في نفس اللحظة، على عكس التواصل المكتوب الذي يتسم
بالبطء .`
      },
      {
        question: "If a communicative behavior effectively achieves the sender's goal but completely violates the expected social norms of the workplace, how is it evaluated in terms of communication competence?",
        options: [
          "It is appropriate but not effective.",
          "It is effective but not appropriate.",
          "It is both appropriate and effective.",
          "It is neither appropriate nor effective."
        ],
        answer: 1,
        explanation: `الكفاءة التواصلية (Competence) تتطلب عنصرين: الفعالية )تحقيق الهدف( والملاءمة
)التوافق مع القواعد الاجتماعية للموقف(. إذا حققت الهدف بطريقة تخالف الذوق أو القواعد، فالتواصل فعال ولكنه غير
مناسب .`
      },
      {
        question: "What is the primary difference between Interpersonal communication and Small Group communication?",
        options: [
          "Interpersonal involves more than 20 people, while small groups are less than 5.",
          "Interpersonal is strictly formal, while small groups are entirely informal.",
          "Interpersonal is an informal interaction based on a relationship, while small groups come together for a specific purpose like solving a problem.",
          "Interpersonal requires an oral channel, while small groups require written channels."
        ],
        answer: 2,
        explanation: `التواصل بين شخصين (Interpersonal) يكون عادة غير رسمي ومبنيا على طبيعة العلاقة
بينهما. بينما المجموعات الصغيرة (Small group) لا تتميز فقط بالعدد، بل بأن أفرادها يجتمعون لهدف محدد جداً مثل
اتخاذ قرار أو حل مشكلة .`
      },
      {
        question: "Which component of communication competence involves managing your anxiety so that you project an image of confidence and poise?",
        options: [
          "Credibility",
          "Motivation",
          "Social ease",
          "Knowledge"
        ],
        answer: 2,
        explanation: `السهولة الاجتماعية (Social ease) هي القدرة على التحكم في قلق التواصل
(Communication apprehension) بحيث تظهر أمام الناس واثقا وهادئا،ً مما يعزز نظرتهم لكفاءتك .`
      },
      {
        question: "A highly knowledgeable systems analyst always panics during job interviews, even though she is comfortable presenting to her current team. This short-lived anxiety specific to interviews is called:",
        options: [
          "Trait-like communication apprehension",
          "Audience-based communication apprehension",
          "Situational communication apprehension",
          "Context-based communication apprehension"
        ],
        answer: 2,
        explanation: `القلق الموقفي (Situational CA) هو شعور مؤقت وعابر بالقلق يحدث أثناء لقاء أو موقف
محدد جداً لمرة واحدة أو مرات نادرة )مثل مقابلة العمل(، ولا يمتد ليصبح طبعا دائم اً .`
      },
      {
        question: "Why do employers in the IT industry look for good communication skills beyond technical qualifications?",
        options: [
          "Because technical roles are slowly being replaced by pure management roles.",
          "Because IT professionals must write code that computers can read intuitively.",
          "Because working in a global, diverse workplace requires interacting effectively with teams and clients.",
          "Because technical qualifications are no longer considered necessary for IT jobs."
        ],
        answer: 2,
        explanation: "المحاضرة تؤكد في نهايتها أن النجاح في بيئة العمل العالمية والمتنوعة (Global and diverse workplace) يتطلب مهارات تواصل ممتازة لتوصيل الأفكار التقنية لفريق العمل والعملاء ."
      },
      {
        question: "Which of the following accurately describes \"Encoding\" in the communication process?",
        options: [
          "The process of interpreting a complex message from another person.",
          "The process of putting internal thoughts and feelings into words, nonverbal cues, and images.",
          "The environmental distractions that hinder message delivery.",
          "The background provided by previous episodes between communicators."
        ],
        answer: 1,
        explanation: `التشفي ر (Encoding) هو العملية التي يقوم بها المرسل لتحويل أفكاره ومشاعره الداخلية إلى
شكل خارجي ملموس )رموز، كلمات، إيماءات( لكي يتمكن من إرسالها للآخرين .`
      },
      {
        question: "According to the basic communication model, what is the role of \"Interference\"?",
        options: [
          "It ensures the message reaches the receiver faster.",
          "It is any stimulus that hinders the process of sharing meaning.",
          "It organizes complex messages into sections.",
          "It represents the receiver's reaction to the sender's message."
        ],
        answer: 1,
        explanation: `التشويش (Interference/Noise) هو أي عامل داخلي أو خارجي يعيق أو يمنع وصول
المعنى المقصود بدقة بين المرسل والمستقبل .`
      },
      {
        question: "When communication takes place among family members versus strangers, the differences in how messages are formed and interpreted are primarily influenced by the:",
        options: [
          "Physical context",
          "Historical context",
          "Social context",
          "Semantic interference"
        ],
        answer: 2,
        explanation: `السياق الاجتماعي (Social context) يركز على طبيعة العلاقة بين أطراف التواصل.
طريقة حديثك مع عائلتك تختلف تماما عن طريقة حديثك مع شخص غريب بسبب اختلاف هذا السياق الاجتماعي .`
      },
      {
        question: "Which of the following best defines \"Credibility\" as a component of communication competence?",
        options: [
          "A speaker's mastery over complex technical vocabulary.",
          "A perception of a speaker’s knowledge, trustworthiness, and warmth.",
          "The ability to use the least amount of resources to send a message.",
          "The elimination of all physical noise during an interaction."
        ],
        answer: 1,
        explanation: `المصداقية (Credibility) ليست حقيقة مطلقة، بل هي الانطباع الذي يتركه المتحدث لدى
المستمعين بأنه شخص يمتلك المعرفة، جدير بالثقة، وودود في تعامله (Warmth).`
      },
      {
        question: "About what percentage of people experience \"Trait-like communication apprehension\" (feeling anxious in almost most speaking situations)?",
        options: [
          "10 percent",
          "20 percent",
          "50 percent",
          "80 percent"
        ],
        answer: 1,
        explanation: `المحاضرة ذكرت إحصائية محددة بأن حوالي 20 % من الناس يعانون من قلق التواصل كسمة
شخصية (Trait-like CA) ، مما يعني أنهم يشعرون بالتوتر في أغلب مواقف التحدث بشكل عام .`
      },
      {
        question: "\"Public communication\" is best characterized by:",
        options: [
          "2 to 20 people aiming to solve a specific business problem.",
          "An informal exchange between two friends in a public setting.",
          "One participant delivering a prepared message to an assembled group or audience.",
          "A person interpreting their own internal thoughts while walking outside."
        ],
        answer: 2,
        explanation: `التواصل العام (Public communication) يحدث عندما يكون هناك متحدث واحد يلقي
رسالة مُجهزة مسبقا لجمهور مجتمع للاستماع إليه )مثل إلقاء خطبة أو محاضرة( .`
      },
      {
        question: "If a communicator lacks \"Motivation,\" how does this affect their communication competence?",
        options: [
          "They will not be able to improve their communication because they lack the desire to do so.",
          "They will inherently lack all technical knowledge.",
          "They will suffer from permanent trait-like apprehension.",
          "They will automatically rely entirely on non-verbal channels."
        ],
        answer: 0,
        explanation: `الدافع (Motivation) هو الخطوة الأولى للكفاءة. بدون الرغبة الشخصية في التحسن، لن
يبذل الشخص جهداً لاكتساب المعرفة أو المهارات اللازمة لتطوير طريقة تواصله .`
      },
      {
        question: "In face-to-face communication, how is feedback most commonly expressed?",
        options: [
          "Exclusively through spoken words.",
          "Through semantic noise and internal thoughts.",
          "Verbally through words, or nonverbally through body language.",
          "Primarily through written acronyms and emoticons."
        ],
        answer: 2,
        explanation: `في التواصل المباشر )وجه ا لوجه(، التغذية الراجعة تكون مزدوجة؛ لفظية )كالرد بالكلام(
وغير لفظية )كتعبيرات الوجه ولغة الجسد ).`
      },
      {
        question: "A written medium is generally the preferred channel of communication when:",
        options: [
          "Spontaneous feedback is urgently required.",
          "A message has to be conveyed uniformly to a small or large group of people.",
          "The emotional psychological context needs strict management.",
          "The sender wants to assess the receiver's body language."
        ],
        answer: 1,
        explanation: `التواصل المكتوب (Written medium) يفضّل عندما نريد إرسال رسالة موحدة ودقيقة
لمجموعة من الأشخاص دون الحاجة لرد فعل لحظي، حيث يوفر توثيقا للمعلومات .`
      },
      {
        question: "A student is trying to listen to a lecture but is distracted by the loud construction work happening right outside the classroom window. This is an example of:",
        options: [
          "Semantic noise",
          "Psychological interference",
          "Physical interference",
          "Historical context"
        ],
        answer: 2,
        explanation: `التشويش المادي (Physical interference) يشمل أي عوامل خارجية في البيئة المحيطة
)مثل أصوات الحفر، الإضاءة المزعجة( تسحب انتباه المستمع بعيداً عن الرسالة .`
      },
      {
        question: "The \"moods and feelings each person brings to the interpersonal encounter\" describes the:",
        options: [
          "Psychological context",
          "Social context",
          "Physical context",
          "Semantic context"
        ],
        answer: 0,
        explanation: `السياق النفسي (Psychological context) يتعلق بالحالة المزاجية والعاطفية التي يدخل
بها الشخص الموقف التواصلي، والتي تؤثر بشدة على كيفية تفسيره للكلام وتفاعله معه .`
      },
      {
        question: "The fundamental difference between \"Effective\" and \"Efficient\" communication is that Effective communication ensures:",
        options: [
          "Minimum resource utilization.",
          "Identical meaning between sender and receiver.",
          "The fastest channel is used.",
          "Elimination of all apprehension."
        ],
        answer: 1,
        explanation: `الفعالية (Effectiveness) تُقاس بمدى تطابق الفهم. إذا فهم المستقبل الرسالة بالضبط كما
قصدها المرسل، فالتواصل هنا فعال، بغض النظر عن الوقت أو التكلفة التي استغرقها .`
      },
      {
        question: "To establish communication competence, \"Knowledge\" is important because:",
        options: [
          "It proves you have a university degree.",
          "It provides the understanding of what behavior is appropriate in a given situation.",
          "It automatically eliminates all internal noise.",
          "It guarantees that the audience will agree with your message."
        ],
        answer: 1,
        explanation: `المعرفة (Knowledge) في التواصل تعني إدراك الشخص لطبيعة الموقف وما هي
السلوكيات والقواعد المتوقعة فيه لكي يتصرف بأسلوب مناسب وفعال .`
      },
      {
        question: "When a sender uses verbal symbols to transmit a message, they are using:",
        options: [
          "Pictures and graphs",
          "Emoticons",
          "Words and language",
          "Hand gestures"
        ],
        answer: 2,
        explanation: `الرموز اللفظية (Verbal symbols) تشير إلى الكلمات واللغة المنطوقة أو المكتوبة، بينما
تمثل الإيماءات والصور رموزاً غير لفظية (Nonverbal/Visual).`
      },
      {
        question: "Which of the following is NOT one of the main components of the basic communication process outlined in the lecture?",
        options: [
          "Feedback",
          "Context",
          "Apprehension",
          "Channels"
        ],
        answer: 2,
        explanation: `مكونات عملية التواصل الأساسية هي: المشاركون، الرسالة، السياق، القنوات، التشويش،
والتغذية الراجعة. \"قلق التواصل \" (Apprehension) هو حالة نفسية تؤثر على الكفاءة ولكنه ليس مكونا هيكليا في نموذج
العملية نفسه .`
      },
      {
        question: "A participant acting as a \"Receiver\" primarily performs which action?",
        options: [
          "Forming the initial physical context.",
          "Interpreting the messages that have been transmitted to them.",
          "Transmitting nonverbal behavior exclusively.",
          "Organizing the message form."
        ],
        answer: 1,
        explanation: `دور المستقبل (Receiver) هو استقبال الرسائل وتفسيرها (Decoding) لإعطائها معنى
داخل عقله بناءً على تجاربه وسياقه .`
      },
      {
        question: "According to the lecture, the perception that communicative behavior is appropriate and effective is called:",
        options: [
          "Communication setting",
          "Communication apprehension",
          "Communication competence",
          "Communication channeling"
        ],
        answer: 2,
        explanation: `الكفاءة التواصلية (Communication competence) تُعرف بأنها الانطباع بأن سلوك
الشخص في التواصل كان فعالاً )حقق الهدف( ومناسبا )احترم السياق( في موقف معين .`
      },
      {
        question: "In some cases, why is it recommended to use BOTH oral and written channels to communicate a message?",
        options: [
          "Because the physical context requires loud noises.",
          "Because one medium supplements the other, combining clear documentation with immediate feedback.",
          "Because it decreases the historical context.",
          "Because it guarantees the elimination of semantic noise."
        ],
        answer: 1,
        explanation: `دمج القناتين يعطي أفضل النتائج؛ المكتوب يوثق المعلومة بدقة، والشفهي يسمح بالشرح والتأكد
من الفهم والإجابة على الأسئلة فور اً (one supplements the other).`
      },
      {
        question: "When a president delivers a speech to a live audience, while simultaneously broadcasting it on TV and printing it in newspapers, they are demonstrating:",
        options: [
          "Intrapersonal communication",
          "Psychological interference",
          "The use of multiple communication channels",
          "Audience-based apprehension"
        ],
        answer: 2,
        explanation: `الرئيس هنا يستخدم قناة شفهية بصرية )مباشرة وتلفزيونية( وقناة مكتوبة )صحف( في نفس
الوقت للوصول لأكبر قدر ممكن من الجمهور، مما يوضح تنوع استخدام القنوات (Channels).`
      },
      {
        question: "You are talking to a colleague, but you completely miss their main point because you are confused by a highly unusual acronym they just used. This specific distraction is:",
        options: [
          "Internal noise",
          "Semantic noise",
          "Physical noise",
          "Contextual noise"
        ],
        answer: 1,
        explanation: `التشويش الدلالي (Semantic noise) يحدث عندما تسحب كلمة معينة أو رمز غير مفهوم
انتباهنا، فنظل نفكر في معنى الكلمة ونفقد التركيز على بقية الحديث .`
      },
      {
        question: "What characterizes \"Interpersonal communication\" regarding the relationship of the participants?",
        options: [
          "They must be total strangers.",
          "They must be a large group assembled for an event.",
          "They are two people who have an identifiable relationship with each other.",
          "They must not share the same historical context."
        ],
        answer: 2,
        explanation: `التواصل بين شخصين (Interpersonal) يفترض وجود علاقة قابلة للتحديد بين الطرفين
)سواء كانوا زملاء، أصدقاء، أو أفراد عائلة(، وهذا يحدد مسار التواصل بينهما .`
      },
      {
        question: "The \"social ease\" component of communication competence directly aims to manage and reduce:",
        options: [
          "Written channels",
          "Communication apprehension",
          "Physical context distance",
          "Historical context baggage"
        ],
        answer: 1,
        explanation: `السهولة الاجتماعية (Social ease) ترتبط بشكل مباشر بالقدرة على إدارة القلق والتوت ر
(Communication apprehension) لكي يظهر المتحدث بمظهر الواثق والثابت .`
      },
      {
        question: "Which of the following creates the \"perception\" that we are competent communicators?",
        options: [
          "Only the verbal messages we send.",
          "Our technical IT qualifications exclusively.",
          "The combination of verbal messages, nonverbal behaviors, and visual images.",
          "The physical location of the meeting."
        ],
        answer: 2,
        explanation: `الناس يحكمون على كفاءتنا في التواصل ليس فقط من خلال الكلمات (Verbal) ، بل أيضا من
خلال لغة الجسد (Nonverbal) والمظهر أو الصور المرافقة (Visual images) ، وكلها تشكل انطباعا متكامللا .`
      },
      {
        question: "A communicator who appears extremely anxious and nervous is unlikely to be regarded as competent, REGARDLESS of their:",
        options: [
          "Motivation or knowledge.",
          "Physical context.",
          "Channel selection.",
          "Internal noise."
        ],
        answer: 0,
        explanation: `المحاضرة نصت صراحة على أن المتحدث إذا بدا متوتراً جدا (يفتقد ل Social ease) ، فإن
الجمهور لن يراه كفؤاً، حتى لو كان لديه دافع قوي جداً ويمتلك معرفة واسعة بالموضوع (Motivation or knowledge).`
      },
      {
        question: "Which of the following defines the \"Participants\" in a communication process?",
        options: [
          "The environmental conditions where the talk happens.",
          "The individuals who assume the roles of senders and receivers.",
          "The mental interpretations made during a talk.",
          "The reactions sent back to the speaker."
        ],
        answer: 1,
        explanation: `المشاركون (Participants) هم الأفراد الأساسيون في عملية التواصل، ويتبادلون أدوار
الإرسال (Senders) والاستقبال (Receivers) طوال فترة التفاعل .`
      },
      {
        question: "Why is it important for an IT professional to be a \"team worker, but able to work independently\"?",
        options: [
          "Employers want staff who never communicate with management.",
          "The IT industry requires collaboration for large systems, but individual focus for coding and specific tasks.",
          "IT projects do not require any communication channels.",
          "Independent work prevents all semantic noise."
        ],
        answer: 1,
        explanation: `أصحاب العمل في مجال ال IT يبحثون عن هذه المهارة المزدوجة لأن طبيعة العمل التقني
تتطلب الانعزال والتركيز الشديد أحيانا )للبرمجة(، وفي نفس الوقت تتطلب عملاً جماعيا لربط هذه الأكواد وإخراج منتج
نهائي متكامل .`
      },
      {
        question: "In the context of the communication process, \"Decoding\" is closely associated with which participant role?",
        options: [
          "The Sender",
          "The Channel manager",
          "The Receiver",
          "The Context creator"
        ],
        answer: 2,
        explanation: `المُستقبل (Receiver) هو الشخص الذي يقع على عاتقه مهمة فك الشفرة (Decoding)
للرسالة التي وصلته لكي يفهم معناها .`
      },
      {
        question: "A student feels a rush of anxiety specifically when presenting their final project to the grading committee. This is best described as:",
        options: [
          "Trait-like apprehension",
          "Context-based apprehension",
          "Audience-based apprehension",
          "Situational apprehension"
        ],
        answer: 3,
        explanation: `هذا القلق مرتبط بموقف محدد وعابر )عرض مشروع التخرج أمام لجنة(، وبمجرد انتهاء
الموقف يزول القلق، لذا يسمى قلقا موقفي اً (Situational CA). (إذا اعتبرنا اللجنة كفئة معينة قد يكون Audience-based ، ولكن التركيز على الحدث العابر يجعله Situational).`
      },
      {
        question: "Which type of context includes the background provided by previous communication episodes?",
        options: [
          "Social",
          "Historical",
          "Psychological",
          "Physical"
        ],
        answer: 1,
        explanation: `السياق التاريخي (Historical context) هو التاريخ المشترك والتفاعلات السابقة التي توفر
خلفية تؤثر على كيفية فهمنا للمواقف الحالية بيننا وبين نفس الأشخاص .`
      },
      {
        question: "The primary reason communication is described as a \"learned style\" is because:",
        options: [
          "We are born with fixed communication patterns.",
          "It is entirely dependent on our genetic makeup.",
          "We acquire it through observing adults as children and can intentionally practice to improve it as adults.",
          "It cannot be improved after childhood."
        ],
        answer: 2,
        explanation: `أسلوب التواصل مكتسب لأننا نبدأ بتعلمه من خلال مراقبة والدينا، ومع الوقت والنضج، يمكننا
بوعي مراقبة أساليب تواصل فعالة أخرى وممارستها لتحسين قدراتنا الشخصية .`
      }
    ]
  },
    {
    id: "settings-competence",
    title: "Quiz 2: Verbal Communication, Meaning & Culture",
    description: "Master the purposes of language, high vs. low context, gendered communication styles, concrete vs. abstract words, and clarity techniques.",
    timeLimit: 900, // 15 minutes
    questions: [
      {
        question: "A team leader is reviewing a junior developer's code. Instead of saying the developer \"took a long time,\" the leader tells the manager that the developer was \"meticulous and thorough.\" Which purpose of language is the team leader primarily using?",
        options: [
          "To designate and label a new concept.",
          "To evaluate and convey a positive attitude.",
          "To discuss things outside immediate experience.",
          "To practice linguistic sensitivity regarding gender."
        ],
        answer: 1,
        explanation: `القائد هنا لا يكتفي بوصف الفعل، بل يختار كلمات تحمل طابعا إيجابي ا (meticulous and thorough) بدلاً من كلمات سلبية (slow أو dawdling). هذا يمثل استخدام اللغة للتقييم (Evaluate) ، حيث ننقل مواقفنا وانطباعاتنا (إيجابية أو سلبية) تجاه الأشخاص أو الأشياء .`
      },
      {
        question: "During a negotiation, an American manager explicitly states the exact discount rates expected. The Japanese counterpart nods, smiles, and talks generally about \"building a long-term harmonious partnership,\" expecting the American to understand that the aggressive discount is unacceptable. What is the root cause of this miscommunication?",
        options: [
          "A clash between low-context and high-context cultural communication styles.",
          "A difference in denotative dictionary meanings of the word \"discount.\"",
          "The American manager's use of overly feminine language styles.",
          "A lack of dating information in the Japanese counterpart's response."
        ],
        answer: 0,
        explanation: `الثقافة الأمريكية هي ثقافة "منخفضة السياق " (Low-context) تعتمد على الصراحة والوضوح التام في الكلمات. بينما الثقافة اليابانية "عالية السياق " (High-context) وتعتمد على التلميحات، السياق، والمعاني غير المباشرة. هذا الاختلاف يؤدي إلى سوء فهم متكرر في بيئة العمل .`
      },
      {
        question: "A project manager notices that two team members are constantly arguing. She pulls them aside and says, \"I can understand how you both feel, and I've had similar experiences. Let's see if we can find a way to support each other.\" This communication approach strongly aligns with:",
        options: [
          "Masculine language styles.",
          "High-context language styles.",
          "Feminine language styles.",
          "Abstract and general language."
        ],
        answer: 2,
        explanation: `الأسلوب الأنثوي في اللغة (Feminine style) يركز على إظهار التعاطف (Empathy) ، تقديم الدعم، واستخدام التجارب الشخصية لبناء الروابط وتقليل حدة الخلاف، وهو بالضبط ما فعلته مديرة المشروع هنا بدلاً من فرض حل مباش ر .`
      },
      {
        question: "A marketing director presents a strategy saying, \"Our competitor's software is completely outdated and useless.\" A team member replies, \"That was true when we reviewed them in 2019, but they released a major overhaul last month.\" Which language clarity technique did the director fail to use?",
        options: [
          "Indexing generalizations.",
          "Dating information.",
          "Using concrete language.",
          "Applying linguistic sensitivity."
        ],
        answer: 1,
        explanation: `"تأريخ المعلومات " (Dating information) يعني تحديد الزمن الذي كانت فيه المعلومة صحيحة. لأن كل شيء يتغير بمرور الوقت، فإن عدم ذكر متى كانت البرمجيات قديمة أدى إلى استنتاج خاطئ بأنها لا تزال كذلك في الوقت الحاض ر .`
      },
      {
        question: "A software engineer tells a client, \"Deploying this update is like performing open-heart surgery while the patient is running a marathon.\" What technique is the engineer using to make the message memorable?",
        options: [
          "Metaphor",
          "Simile",
          "Abstract designation",
          "Syntactic evaluation"
        ],
        answer: 1,
        explanation: `المهندس هنا استخدم أداة تشبيه (like) للمقارنة بين شيئين مختلفين تماما (تحديث النظام وعملية القلب المفتوح). هذا يسمى (Simile) وهو يهدف إلى جعل الرسالة حية (Vivid) ولا تُنسى. لو قال "التحديث هو عملية قلب مفتوح" لكانت (Metaphor).`
      },
      {
        question: "A senior executive complains, \"All millennials in the IT department are obsessed with remote work and lack loyalty.\" A manager responds, \"While many prefer remote work, Ahmed and Sara have been coming to the office daily for three years and are highly dedicated.\" The manager is correcting the executive by using:",
        options: [
          "Indexing generalizations.",
          "Masculine communication style.",
          "Low-context communication.",
          "Denotative alignment."
        ],
        answer: 0,
        explanation: `"فهرسة التعميمات " (Indexing generalizations) هي ممارسة عقلية ولفظية نعترف من خلالها بوجود اختلافات فردية عند إطلاق أحكام عامة. المدير هنا يوضح أنه لا يمكن تطبيق حكم عام على كل أفراد الجيل بفضل وجود استثناءات مثل أحمد وسارة .`
      },
      {
        question: "In a feedback session, an IT manager says, \"You should rewrite this code completely. The way you should handle this is by using a microservices architecture. I have no doubt it will fix the bug.\" This style of phrasing is heavily associated with:",
        options: [
          "Feminine communication styles.",
          "Masculine communication styles.",
          "Linguistic sensitivity.",
          "High-context ambiguity."
        ],
        answer: 1,
        explanation: `الأسلوب الذكوري (Masculine style) يتميز بالتركيز على حل المشكلات وإعطاء النصائح المباشرة (You should...) وإظهار السيطرة والثقة التامة (I have no doubt) ، وهو يميل ليكون مباشراً وحازما مقارنة بالأسلوب الأنثوي .`
      },
      {
        question: "A developer excitedly tells his non-technical boss, \"The new API is incredibly cheap to run!\" The boss gets worried, assuming \"cheap\" means low quality and unreliable, while the developer meant it was cost-effective. This misunderstanding illustrates that:",
        options: [
          "The denotative meanings of words are inherently unstable.",
          "High-context cultures ignore dictionary definitions.",
          "Meaning resides in people, not in the words themselves.",
          "The syntactic context of the sentence was grammatically incorrect."
        ],
        answer: 2,
        explanation: `المعنى يوجد في عقول الناس وليس في الكلمات ذاتها (Meaning is in people). كلمة "رخيص" لها دلالات شخصية وعاطفية (Connotations) تختلف من شخص لآخر. المطور ركز على التكلفة، والمدير فسرها على أنها ضعف في الجودة .`
      },
      {
        question: "During a meeting, the team spends 20 minutes discussing why yesterday's email caused so much panic among the staff, analyzing the tone and the specific words used in that email. Which purpose of language does this scenario best represent?",
        options: [
          "Using language to designate and label.",
          "Using language to discuss things outside immediate experience.",
          "Using language to evaluate physical objects.",
          "Using language to structure syntactic grammar."
        ],
        answer: 1,
        explanation: `من أهم أهداف اللغة أنها تتيح لنا مناقشة أشياء ليست حاضرة أمامنا في اللحظة الحالية (الماضي، المستقبل)، والأهم من ذلك أنها تسمح لنا ب "استخدام اللغة للحديث عن اللغة" وتحليل طرق تواصلنا السابقة، وهو ما يفعله الفريق هنا .`
      },
      {
        question: "An IT consultant is presenting to a group of elderly hospital administrators. Instead of using complex terms like \"Kubernetes clustering\" and \"asynchronous data fetching,\" she simply says, \"We will group your computers together so they share the workload without slowing down.\" The consultant is demonstrating:",
        options: [
          "High-context ambiguity.",
          "Linguistic sensitivity.",
          "Denotative rigidity.",
          "Feminine tentativeness."
        ],
        answer: 1,
        explanation: `الحساسية اللغوية (Linguistic sensitivity) تعني اختيار الكلمات والرموز التي تظهر الاحترام للمستمع. من أهم صور هذا الاحترام هو تجنب المصطلحات المعقدة التي قد لا يفهمها الجمهور، وتبسيط الرسالة لتناسب مستوى استيعابهم دون تعا ل .`
      },
      {
        question: "What defines a \"speech community\" according to the lecture?",
        options: [
          "A group of people who share the exact same connotations for all words.",
          "A group of individuals who use the exact same rules of high-context communication.",
          "A group of people who speak the same language and share systems for using its symbols.",
          "A professional group that uses specialized industry jargon."
        ],
        answer: 2,
        explanation: `مجتمع التحدث (Speech community) يُعرف بأنه مجموعة من الناس يتحدثون نفس اللغة ويشتركون في استخدام نفس مجموعة الرموز (الكلمات) وقواعد ترتيبها للتواصل فيما بينهم .`
      },
      {
        question: "If someone refers to a specific music genre as \"indie\" to differentiate it from \"pop\" or \"rock,\" which fundamental purpose of language are they fulfilling?",
        options: [
          "Evaluating",
          "Designating, labeling, and defining",
          "Metacommunication",
          "Indexing generalizations"
        ],
        answer: 1,
        explanation: `إطلاق أسماء على الأشياء لتصنيفها وتفريقها عن الأشياء الأخرى (مثل تصنيف أنواع الموسيقى) هو التطبيق المباشر لاستخدام اللغة من أجل التسمية، التصنيف، والتعريف (Designate, label, define).`
      },
      {
        question: "Which of the following best describes the difference in syntactic structure between English and Mandarin Chinese?",
        options: [
          "English relies heavily on tone, while Mandarin relies on the alphabet.",
          "English statements typically place a subject before a predicate, while Mandarin often expresses an idea with a verb and a complement.",
          "English uses only concrete words, while Mandarin uses only abstract words.",
          "English is a high-context syntax, while Mandarin is a low-context syntax."
        ],
        answer: 1,
        explanation: `السياق النحوي (Syntax) يختلف من لغة لأخرى. المحاضرة تذكر تحديداً أن الإنجليزية تتطلب فاعلاً ثم فعلا (Subject before predicate)، بينما الماندرين غالبا تعبر عن الفكرة باستخدام فعل ومكمل (Verb and complement).`
      },
      {
        question: "Why are abstract words more likely to cause misunderstandings than concrete words?",
        options: [
          "Because abstract words do not have a dictionary denotation.",
          "Because abstract words depend solely on the syntactic context.",
          "Because abstract words have multiple meanings depending on who is using and hearing them.",
          "Because abstract words are only used in high-context cultures."
        ],
        answer: 2,
        explanation: `الكلمات المجردة (مثل: الحرية، العدالة، باهظ الثمن) لا ترتبط بشيء مادي ملموس، لذا فهي تحتمل تفسيرات ومعاني متعددة جداً بناءً على خبرة وعقلية كل شخص، مما يزيد من احتمالية سوء الفهم .`
      },
      {
        question: "A dictionary defines the word \"hacker\" as a person who uses computers to gain unauthorized access to data. This specific, explicit definition represents the word's:",
        options: [
          "Connotation",
          "Denotation",
          "Metaphorical syntax",
          "Linguistic index"
        ],
        answer: 1,
        explanation: `الدلالة الصريحة (Denotation) هي المعنى المباشر والرسمي للكلمة كما يتم تعريفه في القواميس والمتفق عليه داخل مجتمع اللغة، بعيداً عن المشاعر الشخصية أو الانطباعات .`
      },
      {
        question: "Which of the following statements about \"connotation\" is true?",
        options: [
          "It is less important to communication than denotation.",
          "It refers to the feelings or evaluations we associate with a word.",
          "It is strictly determined by the rules of grammar.",
          "It ensures that the intended meaning is identical to the received meaning."
        ],
        answer: 1,
        explanation: `الإيحاء أو التضمين (Connotation) يمثل المشاعر، الانطباعات، والتقييمات التي يربطها الأشخاص بكلمة معينة. وتؤكد المحاضرة أن هذه المشاعر قد تكون أهم بكثير من المعنى القاموسي في تحديد كيف يفهم الناس الرسالة .`
      },
      {
        question: "When a person says, \"I saw a bat flying in the cave\" versus \"He hit the ball with a bat,\" we understand the different meanings of the word \"bat\" primarily through:",
        options: [
          "Cultural context",
          "Connotative evaluation",
          "Syntactic context",
          "Dating information"
        ],
        answer: 2,
        explanation: `السياق النحوي والتركيبي (Syntactic context) يشير إلى موقع الكلمة في الجملة والكلمات المحيطة بها. هذا السياق هو ما يساعدنا على التفريق بين الكلمات التي لها نفس النطق أو الكتابة ولكن بمعا ن مختلفة .`
      },
      {
        question: "The English language recently absorbed words like \"sushi\" and \"taco\" into its everyday vocabulary. This illustrates which concept regarding the relationship between language and meaning?",
        options: [
          "Speech communities are rigidly isolated.",
          "Languages of dominant groups absorb words from immigrant cultures over time.",
          "Meaning relies heavily on low-context explicitness.",
          "Denotative meanings never change."
        ],
        answer: 1,
        explanation: `اللغة كائن حي يتغير بمرور الوقت. عندما يستقبل المجتمع مهاجرين من ثقافات أخرى وتصبح البيئة متعددة الثقافات، فإن لغة المجموعة المهيمنة تمتص تدريجيا كلمات من لغات أخرى لتوسيع مفرداتها .`
      },
      {
        question: "In which type of culture are verbal messages typically very direct, explicit, and detailed?",
        options: [
          "High-context cultures",
          "Low-context cultures",
          "Masculine-dominated cultures",
          "Abstract cultures"
        ],
        answer: 1,
        explanation: `الثقافات منخفضة السياق (Low-context cultures) مثل أمريكا والدول الأوروبية الشمالية، يعتمد الأفراد فيها على أن تحمل الكلمات نفسها المعنى كاملاً، فيكون التواصل مباشراً، صريحا،ً ومليئا بالتفاصيل الدقيقة .`
      },
      {
        question: "In high-context cultures, the true meaning of a message is heavily dependent on:",
        options: [
          "The literal dictionary definition of the words used.",
          "The use of highly specific and concrete terminology.",
          "The setting, relationship, and contextual cues rather than the explicit words.",
          "The strict application of indexing generalizations."
        ],
        answer: 2,
        explanation: `في الثقافات عالية السياق (مثل الدول الآسيوية والعربية)، لا يتم الاعتماد على الكلمات المنطوقة فقط. المستمع يجب أن يقرأ ما بين السطور ويربط الكلمات ببيئة الموقف (Setting) ، التلميحات غير اللفظية، وطبيعة العلاقة بين المتحدثين .`
      },
      {
        question: "Which of the following phrases is most characteristic of a feminine style of language?",
        options: [
          "\"I am absolutely sure that...\"",
          "\"The way you should handle this is...\"",
          "\"I don't want to step on anyone's toes, but perhaps...\"",
          "\"My experience tells me...\""
        ],
        answer: 2,
        explanation: `الأسلوب الأنثوي يتميز باستخدام لغة تظهر الاحترام والتردد اللطيف (Tentativeness) لتجنب فرض السيطرة أو جرح مشاعر الآخرين (مثل قول: ربما، أو لا أريد التدخل ولكن...) .`
      },
      {
        question: "Masculine communication styles typically prioritize:",
        options: [
          "Abstract concepts, status, and problem-solving.",
          "Concrete language, personal disclosures, and empathy.",
          "High-context indirectness and ambiguity.",
          "Building consensus through tentative language."
        ],
        answer: 0,
        explanation: `الأسلوب الذكوري في التواصل يميل عادةً إلى التركيز على إظهار المكانة (Status) ، تقديم الحلول المباشرة للمشكلات، والحديث عن نظريات أو أفكار عامة ومجردة (Abstract) بدلاً من مشاركة التفاصيل والمشاعر الشخصية .`
      },
      {
        question: "True or False substitute: The lecture asserts that women strictly use feminine communication styles and men strictly use masculine styles. Is this concept supported by the lecture?",
        options: [
          "Yes, biology strictly determines communication style.",
          "Yes, cultural norms strictly forbid crossing these boundaries.",
          "No, men and women can use both styles depending on what is suited to the situation.",
          "No, speech communities do not recognize gender differences in language."
        ],
        answer: 2,
        explanation: `المحاضرة تنفي بشدة هذا التعميم، وتؤكد أن الرجال والنساء قادرون تماما على استخدام كلا الأسلوبين (الذكوري والأنثوي). اختيار الأسلوب لا يعتمد على جنس المتحدث بل على "طبيعة الموقف" وما يتطلبه من حزم أو تعاطف .`
      },
      {
        question: "To ensure listeners correctly decode a message, a speaker should shift from using general categories to using:",
        options: [
          "Abstract concepts.",
          "Highly specific words.",
          "Complex jargon.",
          "Ambiguous high-context phrases."
        ],
        answer: 1,
        explanation: `الكلمات العامة تسبب ارتباكا لتعدد تفسيراتها. لكي نضمن أن المستمع يفهم قصدنا بدقة، يجب استخدام "كلمات محددة " (Specific words) تضيق نطاق الفهم من فئة عامة إلى شيء دقيق لا يختلف عليه اثنان .`
      },
      {
        question: "Instead of saying \"the animal sounded loud,\" a writer says, \"the lion roared fiercely.\" The word \"roared\" improves clarity because it is a(n):",
        options: [
          "Abstract word.",
          "Concrete word appealing to the sense of hearing.",
          "Indexing generalizations.",
          "Metaphorical expression."
        ],
        answer: 1,
        explanation: `الكلمات الملموسة (Concrete words) هي التي تخاطب الحواس الخمس (الرؤية، السمع، الشم، التذوق، اللمس). استخدام كلمة "يزأر" يخلق صورة سمعية واضحة جداً في العقل مقارنة بكلمة "صوت عا ل" المجردة .`
      },
      {
        question: "\"Faithful to an idea, person, or company\" is the definition of loyalty. Because this definition cannot be physically seen or touched, the word \"loyal\" is classified as:",
        options: [
          "Concrete",
          "Abstract",
          "Specific",
          "Syntactic"
        ],
        answer: 1,
        explanation: `الكلمات المجردة (Abstract words) هي تلك التي تشير إلى أفكار، مفاهيم، أو صفات غير ملموسة لا يمكن إدراكها بالحواس الخمس، مثل الوفاء، الحرية، أو العدالة، مما يتطلب إعطاء أمثلة لتوضيحها .`
      },
      {
        question: "Why is it important to add details or examples when using abstract language?",
        options: [
          "To make the speaker sound more highly educated.",
          "To transform low-context cultures into high-context cultures.",
          "To avoid ambiguity and ensure the listener understands exactly what the abstract concept means in this situation.",
          "To practice dating information effectively."
        ],
        answer: 2,
        explanation: `لأن الكلمات المجردة تحتمل معاني واسعة ومختلفة، فإن إضافة التفاصيل والأمثلة الواقعية (Details and examples) تقطع الشك باليقين وتوضح للمستمع كيف نطبق هذا المفهوم المجرد في هذا السياق بالذات لتجنب الغموض (Ambiguity).`
      },
      {
        question: "An investor reads a statement saying, \"The company's stock is highly profitable.\" If the investor acts on this without confirming the time period of the statement, they fall victim to a lack of:",
        options: [
          "Linguistic sensitivity.",
          "Dating information.",
          "Masculine problem-solving.",
          "Simile application."
        ],
        answer: 1,
        explanation: `عدم الانتباه إلى "تأريخ المعلومات " (Dating information) يجعل الشخص يظن أن المعلومة القديمة لا تزال سارية في الوقت الحاضر. ربما كان السهم مربحا في عام 2020 ولكنه منهار الآن .`
      },
      {
        question: "What is the primary cognitive function of \"indexing generalizations\"?",
        options: [
          "To assume that all members of a specific group behave identically.",
          "To strictly separate denotative and connotative meanings.",
          "To mentally and verbally acknowledge individual differences within a broad group.",
          "To categorize words alphabetically in a speech community."
        ],
        answer: 2,
        explanation: `الهدف الأساسي من الفهرسة (Indexing generalizations) هو منع العقل من الوقوع في فخ التنميط الأعمى. إنها ممارسة تجعلنا نعترف بأن التعميمات (مثل: كل الأطباء أغنياء) ليست حقائق مطلقة، وأن هناك اختلافات فردية .`
      },
      {
        question: "A speaker states, \"The new processor is a lightning bolt.\" This phrase is an example of a:",
        options: [
          "Metaphor",
          "Simile",
          "Generalization",
          "Specific designation"
        ],
        answer: 0,
        explanation: `الاستعارة (Metaphor) تقوم بإجراء مقارنة بين شيئين بأن تدعي أن الشيء "هو" شيء آخر مجازيا (المعالج هو صاعقة)، بدون استخدام أدوات التشبيه المباشرة مثل "ك" أو "مثل " (like or as).`
      },
      {
        question: "Why does the lecture advise novice speakers to avoid unnecessarily large or obscure vocabularies?",
        options: [
          "Because large words belong strictly to written communication.",
          "Because it can make the speaker seem pompous, affected, or stilted, alienating the audience.",
          "Because large words cannot contain concrete meanings.",
          "Because large vocabularies violate masculine communication norms."
        ],
        answer: 1,
        explanation: `يظن بعض المتحدثين المبتدئين أن الكلمات المعقدة تجعلهم يبدون أكثر ذكاءً. لكن المحاضرة تحذر من ذلك لأن استخدام مصطلحات غريبة ومتقعرة يزعج المستمعين ويجعل المتحدث يبدو متعجرفا أو متصنع اً (Pompous and affected).`
      },
      {
        question: "The ultimate and most critical goal of practicing clear language strategies (specificity, dating, indexing, etc.) is to:",
        options: [
          "Prove the speaker's superior intellect.",
          "Ensure the verbal message is beautifully poetic.",
          "Help listeners assign a meaning that is as similar as possible to what the speaker intended.",
          "Convert high-context listeners to a low-context mentality."
        ],
        answer: 2,
        explanation: `الهدف النهائي والأهم لأي تواصل هو "الفهم المشترك " (To be understood). كل هذه الاستراتيجيات لا تهدف للاستعراض، بل لضمان أن الصورة الموجودة في عقل المرسل تنتقل بأكبر قدر من الدقة إلى عقل المستقبل .`
      },
      {
        question: "Which of the following is an example of a \"speech community\" as defined in the lecture?",
        options: [
          "All mammals that use vocalizations.",
          "A group of software developers who only write code in Python.",
          "The group of people globally who speak Spanish and share its grammatical systems.",
          "People who prefer low-context communication styles over high-context ones."
        ],
        answer: 2,
        explanation: `مجتمع اللغة (Speech community) يتشكل من الأشخاص الذين يتحدثون لغة طبيعية معينة (مثل الإسبانية، الإنجليزية، العربية) ويشتركون في استخدام رموزها وقواعدها النحوية .`
      },
      {
        question: "When trying to recall a past event, Sarah says, \"Remember the time we went to that... um... place with the things?\" Sarah is failing at which basic purpose of language?",
        options: [
          "Evaluating",
          "Using language to designate, label, and limit",
          "Metacommunication",
          "Linguistic sensitivity"
        ],
        answer: 1,
        explanation: `سارة تعجز عن إعطاء أسماء أو تصنيفات محددة للأشياء التي تتحدث عنها ( فشلت في استخدام اللغة ل label and designate)، مما جعل رسالتها مبهمة تماما وغير مفيدة .`
      },
      {
        question: "\"The only message that counts is the message that is understood, regardless of whether it is the one you intended.\" This principle highlights the danger of ignoring:",
        options: [
          "The literal dictionary definition of a word.",
          "The connotative meanings listeners might attach to your words.",
          "The syntactic position of verbs.",
          "The grammatical rules of the speech community."
        ],
        answer: 1,
        explanation: `هذه القاعدة الذهبية تحذرنا من أن نوايانا الطيبة لا تكفي. إذا استخدمت كلمة لها دلالات سلبية قوية (Connotation) لدى المستمع، فإنه سيأخذ بهذا المعنى السلبي، ولن يهم ما كنت تقصده أنت في عقلك .`
      },
      {
        question: "A manager is reviewing an employee's performance. Instead of focusing solely on the numbers, she shares a story about how she also struggled in her first year but learned to adapt. This approach leans toward:",
        options: [
          "Abstract masculine framing.",
          "Feminine personal disclosure.",
          "High-context avoidance.",
          "General indexing."
        ],
        answer: 1,
        explanation: `مشاركة تفاصيل شخصية أو إفصاحات ذاتية (Personal disclosures) لتقريب المسافات وتقليل التوتر هو أحد السمات البارزة للأسلوب الأنثوي في التواصل، والذي يعتمد على بناء العلاقات أكثر من مجرد نقل المعلومات الجافة .`
      },
      {
        question: "If a speaker uses the phrase \"I would...\" or \"You should...\" when approached with a problem, they are employing:",
        options: [
          "Empathic listening strategies.",
          "Masculine advice-giving communication.",
          "Indexing generalizations.",
          "Feminine support language."
        ],
        answer: 1,
        explanation: `الأسلوب الذكوري يرى المشاكل كفرصة لإظهار الكفاءة عبر تقديم الحلول والنصائح الفورية (Problem solving or advice giving) باستخدام عبارات التوجيه المباشر مثل (يجب عليك أن تفعل كذا) .`
      },
      {
        question: "Why might a person from the United States (low-context) find a business partner from Latin America (high-context) confusing?",
        options: [
          "The Latin American partner may use too many specific and harsh concrete details.",
          "The Latin American partner may expect the US partner to read between the lines rather than being explicitly direct.",
          "The Latin American partner will use too many indexing generalizations.",
          "The Latin American partner will completely ignore the physical context."
        ],
        answer: 1,
        explanation: `لأن ثقافة أمريكا اللاتينية عالية السياق (High-context) ، فإن الشريك سيتحدث بطريقة غير مباشرة ومهذبة، متوقعا أن يفهم الأمريكي القصد الخفي من خلال سياق الحديث. هذا يربك الأمريكي الذي ينتظر رسالة لفظية واضحة ومباشرة .`
      },
      {
        question: "To make a description of a car accident clearer, a witness says, \"The blue sedan skidded with a loud screeching sound before hitting the pole.\" The words \"loud screeching sound\" are an example of:",
        options: [
          "Evaluating language.",
          "Abstract language.",
          "Concrete language.",
          "Syntactic ambiguity."
        ],
        answer: 2,
        explanation: `الكلمات الملموسة (Concrete) لا تقتصر على ما نراه، بل تشمل كل ما ندركه بالحواس. "صوت صرير مرتفع" يستدعي حاسة السمع ويجعل المتلقي يتخيل الموقف بوضوح شديد .`
      },
      {
        question: "\"All politicians are corrupt.\" How could this statement be improved using a technique learned in the lecture?",
        options: [
          "By dating the information (e.g., \"All politicians in 2010 were corrupt\").",
          "By indexing generalizations (e.g., \"While many politicians face corruption scandals, there are certainly honest ones\").",
          "By using a metaphor (e.g., \"Politicians are a den of thieves\").",
          "By using abstract words (e.g., \"Politics is fundamentally flawed\")."
        ],
        answer: 1,
        explanation: `الجملة تمثل تعميما مطلقا وخاطئا.ً استخدام "فهرسة التعميمات " (Indexing) يسمح للمتحدث بالاعتراف بوجود استثناءات واختلافات فردية، مما يجعل الجملة أكثر دقة ومنطقية .`
      },
      {
        question: "When making your messages memorable, what is the best rule of thumb regarding word choice?",
        options: [
          "Always use the most complex vocabulary available to establish authority.",
          "Use obscure images so the audience has to think deeply.",
          "Choose common vivid words or images over obscure ones.",
          "Avoid similes completely as they dilute the message."
        ],
        answer: 2,
        explanation: `المحاضرة تنصح صراحةً بأنه عند الخيار بين كلمة/صورة حية ومألوفة للناس، وبين كلمة نادرة وغامضة (Obscure)، يجب دائما اختيار المألوف ليظل التواصل واضحا وقريبا من أذهان المستمعين .`
      },
      {
        question: "Which of the following scenarios best demonstrates \"Linguistic Sensitivity\"?",
        options: [
          "Using heavy IT jargon to explain a router issue to a 70-year-old grandfather.",
          "A doctor using simple analogies instead of medical terminology to explain a procedure to a patient.",
          "A speaker refusing to date their information during a historical debate.",
          "Using masculine language to dominate a collaborative brainstorming session."
        ],
        answer: 1,
        explanation: `الحساسية اللغوية تعني احترام المتلقي. الطبيب الذي يتنازل عن مصطلحاته المعقدة ويستخدم لغة تناسب فهم المريض البسيط يطبق هذه المهارة بأفضل شكل، لأنه يضمن وصول المعنى دون إشعار المريض بالجهل .`
      },
      {
        question: "Which of the following is an example of metacommunication (using language to talk about language)?",
        options: [
          "\"The sky is particularly blue today.\"",
          "\"I felt that your tone in the last email was a bit too aggressive.\"",
          "\"We need to finish this project by tomorrow.\"",
          "\"Can you define what a 'server' is?\""
        ],
        answer: 1,
        explanation: `التواصل حول التواصل (Metacommunication) يحدث عندما نستخدم اللغة لمناقشة أو تحليل الطريقة التي تواصلنا بها سابقا (مثل مناقشة نبرة الصوت في إيميل سابق) لحل سوء الفهم أو تحسين العلاقة .`
      },
      {
        question: "A student complains, \"My professor grades poorly.\" The word \"poorly\" is too general. Which statement represents a shift to specific and concrete language?",
        options: [
          "\"My professor is bad at evaluating students.\"",
          "\"My professor deducts 5 points for every minor spelling mistake on our essays.\"",
          "\"My professor has a deeply flawed academic framework.\"",
          "\"My professor acts like a harsh dictator.\""
        ],
        answer: 1,
        explanation: `الانتقال من اللغة العامة (poorly) إلى لغة محددة وملموسة يتطلب إعطاء تفاصيل دقيقة قابلة للقياس أو الملاحظة. ذكر "خصم 5 درجات على كل خطأ إملائي" يوضح المشكلة بدقة متناهية .`
      },
      {
        question: "Which of the following languages is ranked among the five largest speech communities in the world according to the lecture?",
        options: [
          "German",
          "French",
          "Arabic",
          "Russian"
        ],
        answer: 2,
        explanation: `المحاضرة ذكرت صراحةً أن أكبر 5 مجتمعات لغوية بالترتيب هي: الماندرين الصينية، الإسبانية، الإنجليزية، العربية، والهندية .`
      },
      {
        question: "Why do different speech communities use different word symbols (e.g., \"spring\" vs \"printemps\") for the exact same phenomenon?",
        options: [
          "Because the phenomenon itself changes depending on the country.",
          "Because words are arbitrary symbols agreed upon by a specific speech community.",
          "Because low-context cultures naturally create shorter words.",
          "Because masculine communication dictates natural phenomena."
        ],
        answer: 1,
        explanation: `الكلمات ليست لها علاقة مادية بالشيء الذي تصفه، بل هي مجرد "رموز عشوائية " (Symbols) يتفق عليها أفراد مجتمع معين لتمثيل فكرة أو شيء. لذلك تختلف الرموز باختلاف المجتمعات .`
      },
      {
        question: "\"The project is going to be difficult, maybe we should reconsider our timeline, perhaps?\" This sentence structure is heavily indicative of:",
        options: [
          "Masculine problem-solving.",
          "Feminine tentativeness.",
          "Metacommunication.",
          "Linguistic insensitivity."
        ],
        answer: 1,
        explanation: `استخدام كلمات تعبر عن الاحتمالية والتردد (مثل: ربما، من الممكن) هو من سمات التردد اللطيف (Tentativeness) في الأسلوب الأنثوي لتجنب الظهور بمظهر ديكتاتوري أو متسلط .`
      },
      {
        question: "If a speaker wants to appear masculine in a corporate setting, they are most likely to:",
        options: [
          "Avoid giving personal information about themselves.",
          "Go into deep detail about a recent personal struggle.",
          "Focus heavily on others' feelings during a technical crisis.",
          "Use frequent empathic phrases to support the team."
        ],
        answer: 0,
        explanation: `الأسلوب الذكوري يميل لتجنب الإفصاح عن المعلومات والمشاعر الشخصية (Avoid personal disclosures) ، ويركز بدلاً من ذلك على الجوانب النظرية، العامة، والعملية البحتة لإنجاز المهام وإثبات الكفاءة .`
      },
      {
        question: "To clear up confusion caused by general words, a communicator must:",
        options: [
          "Increase the volume of their speech.",
          "Rely more heavily on connotative meaning.",
          "Narrow what is understood from a broad category to a particular item within that category.",
          "Switch from the English language to Mandarin."
        ],
        answer: 2,
        explanation: `لكي نزيل الارتباك، يجب أن ننتقل من العام إلى الخاص. أي أن نقوم ب "تضييق نطاق" الفهم من فئة واسعة (سيارة) إلى عنصر محدد ودقيق داخل تلك الفئة (تويوتا كامري حمراء 2020).`
      },
      {
        question: "A speech community that numbers under 10,000 speakers accounts for approximately what percentage of all speech communities globally?",
        options: [
          "10 percent",
          "30 percent",
          "60 percent",
          "90 percent"
        ],
        answer: 2,
        explanation: `ورد في المحاضرة كمعلومة صريحة أن حوالي 60 % من مجتمعات التحدث حول العالم تعتبر مجتمعات صغيرة يبلغ عدد المتحدثين بها أقل من 10 آلاف شخص .`
      }
    ]
  },
  {
    id: "language-verbal",
    title: "Quiz 3: Nonverbal Communication: Body, Voice & Space",
    description: "Master nonverbal communication categories including kinesics, oculistics, vocalics (paralanguage), haptics, proxemics, chronemics, and body gestures.",
    timeLimit: 900, // 15 minutes
    questions: [
      {
        question: "During a high-stakes meeting, an employee insists to their manager, \"I am perfectly happy with the new project timeline.\" However, the employee is avoiding eye contact, sighing heavily, and keeping their arms tightly crossed. The manager concludes the employee is actually upset. Which characteristic of nonverbal communication is the manager primarily relying on?",
        options: [
          "Nonverbal communication is multi-channeled.",
          "Nonverbal communication is the primary conveyor of our emotions.",
          "Nonverbal communication is highly ambiguous.",
          "Nonverbal communication completely substitutes for verbal interaction."
        ],
        answer: 1,
        explanation: `الاعتماد الأساسي للمدير هنا كان على القاعدة التي تقول إن التواصل غير اللفظي هو "الناقل الأساسي لمشاعرنا " (Primary conveyor of emotions). عندما تتناقض الكلمات (I am happy) مع لغة الجسد (تجنب النظر، التنهد، وتكتيف الأذرع)، يميل البشر تلقائيا إلى تصديق لغة الجسد لأنها تعبر عن المشاعر الحقيقية بصدق أكبر من الكلمات التي يمكن تزييفها .`
      },
      {
        question: "An American software engineer travels to Tunisia for a client presentation. To signal that the system implementation was flawless, the engineer gives the client the classic American \"OK\" hand gesture (thumb and index finger forming a circle). The client suddenly becomes offended and angry. What specific concept of kinesics explains this communication breakdown?",
        options: [
          "The engineer used an illustrator that contradicted the verbal message.",
          "The engineer used an unmotivated body movement.",
          "The meaning assigned to an emblem varies drastically across cultures.",
          "The engineer demonstrated indirect body orientation."
        ],
        answer: 2,
        explanation: `الإيماءات التي تحمل معنى مستقلاً بذاتها وتغني عن الكلمات تسمى "الرمو ز " (Emblems). علامة "OK" هي رمز متفق عليه في الثقافة الأمريكية بمعنى "كل شيء على ما يرام"، لكن نفس الرمز في تونس يعني إهانة شديدة. هذا يثبت أن الرموز تفتقر إلى العالمية وتعتمد على الاتفاق الثقافي، مما أدى إلى سوء فهم متكرر في بيئة العمل .`
      },
      {
        question: "A job candidate is sitting in the interview chair. While answering questions brilliantly, the candidate is constantly pacing their feet, tapping their pen on the desk, and shifting their weight. According to the study of posture and movement, the interviewer is likely to be distracted because these actions are classified as:",
        options: [
          "Indirect body orientation.",
          "Motivated movements.",
          "Paralinguistic cues.",
          "Unmotivated movements."
        ],
        answer: 3,
        explanation: `الحركة غير الُمحفزة (Unmotivated movement) هي أي حركة جسدية لا تخدم المعنى ولا تساعد في توضيح الرسالة، بل على العكس، تشتت انتباه المستمع عن النقطة الأساسية (مثل النقر بالقلم أو الاهتزاز المستمر). بينما الحركة المحفزة (Motivated) هي التي تدعم المعنى وتوضحه .`
      },
      {
        question: "During a crisis management call, the lead developer begins speaking at a rate of roughly 250 words per minute, significantly faster than their normal pace. Based on the study of vocalics, what psychological state is the developer most likely projecting to the team?",
        options: [
          "They are carefully problem-solving out loud.",
          "They are deeply emphasizing a critical, complex point.",
          "They are frightened, nervous, or highly excited.",
          "They are projecting a cold and unsympathetic attitude."
        ],
        answer: 2,
        explanation: `سرعة التحدث (Rate) الطبيعية تتراوح بين 100 و 200 كلمة في الدقيقة. عندما يتحدث الشخص بسرعة زائدة جداً (مثل 250 كلمة)، فهذا يعطي انطباعا واضحا بأنه يشعر بالخوف، التوتر، أو الإثارة العالية. أما التحدث ببطء فيرتبط عادة بالتفكير بصوت عالٍ أو التأكيد على نقطة معينة .`
      },
      {
        question: "Sarah is an entry-level programmer discussing an issue with her senior manager. Out of respect, Sarah looks down at her notes and avoids direct eye contact while the manager speaks. However, the American manager interprets this as evasive and disrespectful. This scenario best illustrates which characteristic of nonverbal communication?",
        options: [
          "Nonverbal communication is inevitable.",
          "Nonverbal communication is ambiguous.",
          "Nonverbal communication relies on vocalized pauses.",
          "Nonverbal communication is motivated by haptics."
        ],
        answer: 1,
        explanation: `الغموض (Ambiguity) هو أحد أهم خصائص التواصل غير اللفظي. السلوك الواحد (مثل تجنب التواصل البصري) قد يعني "الاحترام" في بعض الثقافات (مثل الثقافات اللاتينية أو بعض الآسيوية)، ولكنه قد يعني "الخداع أو عدم الاحترام" في الثقافة الأمريكية. هذا التعدد في التفسيرات للسلوك الواحد يسمى غموض اً .`
      },
      {
        question: "An executive is delivering a keynote address. Whenever she mentions the phrase \"huge market expansion,\" she stretches her arms wide apart. In the context of kinesics, her arm movement functions exactly as an:",
        options: [
          "Emblem",
          "Oculistic",
          "Illustrator",
          "Adaptor"
        ],
        answer: 2,
        explanation: `الحركة التي تصاحب الكلام اللفظي لتوضيحه أو تضخيمه تسمى "المُو ضِّح" أو (Illustrator). هنا، فتح الذراعين لا معنى له بمفرده، ولكنه جاء ليدعم ويكمل الجملة اللفظية "توسع ضخم ". ( لو كانت إشارة الصمت بالسبابة مثلاً بدون كلام لكانت Emblem).`
      },
      {
        question: "A presenter has a habit of filling every brief silence with \"um,\" \"like,\" and \"you know\" while searching for the next slide. Although these sounds hold his turn to speak, the audience begins to doubt his expertise. This occurs because the audience is evaluating his:",
        options: [
          "Pitch and volume.",
          "Timbre and stridence.",
          "Vocalized pauses.",
          "Syntactic kinesics."
        ],
        answer: 2,
        explanation: `الأصوات والكلمات الدخيلة التي تقطع تدفق الكلام السلس تسمى (Vocalized pauses). على الرغم من أننا نستخدمها للحفاظ على دورنا في الحديث أثناء التفكير، إلا أن الإفراط فيها يجعل المستمعين ينظرون للمتحدث على أنه متوتر أو غير واثق من معلوماته، مما يضر بمصداقيته .`
      },
      {
        question: "A customer service representative is explaining a company policy. The representative has a naturally \"strident\" voice quality. According to vocalic interpretation, how might a frustrated customer incorrectly perceive this representative's attitude?",
        options: [
          "As frail and physically weak.",
          "As cold and unsympathetic.",
          "As immature and unintelligent.",
          "As hypertense and overly stressed."
        ],
        answer: 3,
        explanation: `جودة الصوت (Timbre/Quality) تترك انطباعا نفسيا لدى المستمع. الصوت "الحاد أو المزعج " (Strident) يجعل الناس يعتقدون أن المتحدث يعاني من فرط التوتر أو العصبية (Hypertense) ، مما قد يزيد من توتر العميل . (بينما الصوت المليء بالهواء Breathy يوحي بالضعف، والصوت من الحنجرة Throaty يوحي بالبرود، والصوت الأنفي Nasal يوحي بعدم النضج ).`
      },
      {
        question: "John and Mark are having a discussion. Mark positions his chair so he is completely facing John shoulder-to-shoulder. John, however, twists his torso away, looking over his shoulder to reply to Mark. What nonverbal dynamic is taking place here?",
        options: [
          "Mark is using direct body orientation (attentiveness); John is using indirect body orientation (inattentiveness).",
          "Mark is demonstrating motivated movement; John is demonstrating unmotivated movement.",
          "Both are demonstrating chronemic dominance.",
          "John is utilizing haptics to maintain personal space."
        ],
        answer: 0,
        explanation: `توجيه الجسد (Body orientation) يعكس مدى الاهتمام. مواجهة الشخص بشكل مباشر (Direct) تدل على الاحترام والانتباه الكامل، وهو ما يفعله مارك. أما الجلوس بزاوية أو الالتفاف بعيد اً (Indirect) فيدل على عدم الانتباه أو عدم الاحترام، وهو ما يفعله جون .`
      },
      {
        question: "A team is in a silent room waiting for an exam to begin. One student simply sits back and stares blankly at the wall, intentionally trying not to send any messages to anyone. However, the proctor interprets this blank stare as extreme exhaustion. This confirms the principle that nonverbal communication is:",
        options: [
          "Multi-channeled.",
          "Inevitable.",
          "A substitute for vocalics.",
          "Universally standard across cultures."
        ],
        answer: 1,
        explanation: `الحتمية (Inevitability) تعني أننا "لا يمكننا ألا نتواصل " (We cannot NOT communicate). حتى عندما تقرر الصمت التام والجلوس بلا حراك، فإن صمتك ووضعيتك يتم تفسيرها من قبل الآخرين كرسالة (مثلاً: الإرهاق، أو الملل)، لذا فالتواصل غير اللفظي يحدث رغما عنا .`
      },
      {
        question: "Researchers estimate that in face-to-face communication, up to 60 percent of the social meaning is derived from:",
        options: [
          "The strict grammatical structure of the verbal message.",
          "The syntactic context of the spoken words.",
          "The nonverbal behavior that accompanies the verbal message.",
          "The explicitly stated emotional intent."
        ],
        answer: 2,
        explanation: `أكدت الدراسات أن ما يصل إلى 60 % من المعنى الاجتماعي في المقابلات المباشرة يُستمد من السلوكيات غير اللفظية (مثل نبرة الصوت، ولغة الجسد) التي تصاحب وتحيط بالرسالة اللفظية، وليس من الكلمات نفسها .`
      },
      {
        question: "Which term serves as the technical name for the study of how body motions communicate meaning?",
        options: [
          "Proxemics",
          "Chronemics",
          "Vocalics",
          "Kinesics"
        ],
        answer: 3,
        explanation: `علم حركيات الجسد (Kinesics) هو المصطلح التقني لدراسة وتفسير ما تنقله حركات الجسم (مثل الإيماءات، التواصل البصري، تعبيرات الوجه، والوضعية) من معانٍ .`
      },
      {
        question: "Paralanguage (or vocalics) specifically refers to:",
        options: [
          "The voiced but strictly nonverbal part of a spoken message.",
          "The grammatical and syntactic choices a speaker makes.",
          "The physical distance a speaker maintains while talking.",
          "The movement of the vocal cords during silent thought."
        ],
        answer: 0,
        explanation: `شبه اللغة أو الصوتيات (Paralanguage/Vocalics) تشير إلى "كيف" تُقال الكلمات وليس "ماذا" يُقال. فهي تشمل الجزء المسموع ولكن غير اللفظي من الرسالة، مثل النبرة، مستوى الصوت، وسرعة الكلام .`
      },
      {
        question: "Why is nonverbal communication described as \"multi-channeled\"?",
        options: [
          "Because it relies exclusively on modern communication technologies.",
          "Because it translates verbal languages into multiple foreign dialects.",
          "Because meaning is perceived from a combination of behaviors like posture, voice, and facial expressions simultaneously.",
          "Because different cultures use different channels for different words."
        ],
        answer: 2,
        explanation: `يوصف التواصل غير اللفظي بأنه "متعدد القنوات " (Multi-channeled) لأننا لا نعتمد على حركة واحدة لفهم الشخص، بل نلتقط المعنى من مزيج متزامن من القنوات المختلفة في نفس اللحظة: نظرة العين، مع نبرة الصوت، مع حركة اليدين، مع وضعية الجسد .`
      },
      {
        question: "According to the lecture, which of the following nonverbal behaviors is considered the primary conveyor of our emotions?",
        options: [
          "The specific vocabulary we choose to describe our feelings.",
          "The unmotivated movements of our feet.",
          "The overall nonverbal behavior accompanying our words.",
          "The chronemic cues regarding time management."
        ],
        answer: 2,
        explanation: `السلوك غير اللفظي ككل (بما يشمل تعابير الوجه ونبرة الصوت) هو الناقل الأساسي للمشاعر (Primary conveyor of emotions). نحن نستنتج الحالة العاطفية للشخص من سلوكه غير اللفظي أكثر بكثير مما نستنتجه من كلماته المنطوقة .`
      },
      {
        question: "Which of the following is an example of an \"emblem\"?",
        options: [
          "Spreading your hands to show the size of a fish you caught.",
          "Placing a vertical finger over your lips to demand quiet.",
          "Smiling warmly while shaking someone's hand.",
          "Speaking loudly to emphasize a crucial point."
        ],
        answer: 1,
        explanation: `الرم ز (Emblem) هو إيماءة جسدية لها معنى محدد ومتفق عليه ثقافيا ويمكن أن تستبدل الكلمة بالكامل. وضع الإصبع على الشفاه يعني "اصمت"، ولا يحتاج لأي كلام إضافي لكي يُفهم .`
      },
      {
        question: "Under the study of Kinesics, what does \"Oculistics\" specifically analyze?",
        options: [
          "Voice pitch and volume.",
          "Touch and physical contact.",
          "Eye contact and gaze.",
          "Personal space and boundaries."
        ],
        answer: 2,
        explanation: `علم (Oculistics) هو المصطلح التقني المتفرع من حركيات الجسد والذي يختص بدراسة الاتصال البصري (Eye contact or gaze) وكيفية التعبير عن المشاعر أو مراقبة التفاعل من خلال النظرات .`
      },
      {
        question: "Studies on eye contact indicate a clear difference between the behaviors of talkers and listeners. Typically, what is this difference?",
        options: [
          "Talkers maintain eye contact 70% of the time, while listeners maintain it 40% of the time.",
          "Talkers maintain eye contact 40% of the time, while listeners maintain it 70% of the time.",
          "Both talkers and listeners maintain eye contact exactly 50% of the time.",
          "Talkers avoid eye contact completely, while listeners stare continuously."
        ],
        answer: 1,
        explanation: `تشير الدراسات إلى أن المستمع (Listener) يحافظ على التواصل البصري بنسبة 70 % من الوقت لإظهار الانتباه والتركيز، بينما المتحدث (Talker) ينظر في عين المستمع بنسبة 40 % فقط لأنه يكون مشغولاً عقليا بصياغة أفكاره وتجميع كلماته .`
      },
      {
        question: "Which of the following emotions is NOT listed as one of the six basic human emotions conveyed through universal facial expressions?",
        options: [
          "Disgust",
          "Jealousy",
          "Surprise",
          "Happiness"
        ],
        answer: 1,
        explanation: `المشاعر الستة الأساسية التي تمتلك تعبيرات وجه عالمية متشابهة عبر الثقافات هي: السعادة، الحزن، المفاجأة، الخوف، الغضب، والاشمئزاز (Disgust). الغيرة (Jealousy) شعور معقد وليس له تعبير وجهي قاعدي واحد متفق عليه .`
      },
      {
        question: "What is the primary motivation behind the extensive use of emoticons (like ☺ or ☹) in text-based communication?",
        options: [
          "To save characters in restricted messaging applications.",
          "To demonstrate mastery over typographic symbols.",
          "To replace the crucial emotional meaning normally conveyed by facial expressions.",
          "To provide a vocalic pause in written text."
        ],
        answer: 2,
        explanation: `نظراً لأن تعبيرات الوجه مهمة جداً في نقل الجزء العاطفي من الرسالة، وفي ظل غيابها في الرسائل النصية، لجأ الناس لاستخدام الوجوه التعبيرية (Emoticons) كبديل لتعويض هذا النقص ولنقل حالتهم الشعورية للمتلقي .`
      },
      {
        question: "If a speaker uses unmotivated movements while giving a presentation, what is the most likely effect on the audience?",
        options: [
          "The audience will better understand the complex parts of the speech.",
          "The audience will perceive the speaker as culturally sensitive.",
          "The audience will be distracted from the point being made.",
          "The audience will assume the speaker is demonstrating direct body orientation."
        ],
        answer: 2,
        explanation: `الحركة غير المُحفزة (Unmotivated movement) لا تضيف أي قيمة للرسالة بل هي عادة ناتجة عن التوتر (مثل التململ أو السير ذهابا وإيابا بلا هدف)، وبالتالي فهي تشتت انتباه المستمعين (Distract listeners) وتضعف تركيزهم على محتوى الكلام .`
      },
      {
        question: "Haptics is the technical term for nonverbal communication involving:",
        options: [
          "The arrangement of facial muscles.",
          "The speed and pitch of the voice.",
          "How physical touch communicates meaning.",
          "The physical distance between two communicators."
        ],
        answer: 2,
        explanation: `علم (Haptics) هو المصطلح التقني الذي يدرس لغة اللمس (Touch) ، وكيف أن أفعالاً مثل التربيت، العناق، أو المصافحة تنقل رسائل معينة، وكيف تختلف قواعد هذا اللمس باختلاف الثقافات والأشخاص .`
      },
      {
        question: "When observing cross-cultural differences in Haptics, how does mainstream Japanese culture generally view interpersonal touching compared to American culture?",
        options: [
          "Japanese culture relies heavily on high fives and handshakes, whereas American culture avoids them.",
          "Japanese culture frowns upon personal displays of affection and limits touch to family and friends.",
          "Japanese culture requires touch as a sign of respect for superiors in the workplace.",
          "There is no significant difference; both cultures avoid touch in professional settings."
        ],
        answer: 1,
        explanation: `الثقافة اليابانية متحفظة جداً فيما يخص اللمس (Haptics) ، فهم لا يحبون اللمس المتبادل إلا في حدود ضيقة جداً مع العائلة والأصدقاء، وتُعتبر مظاهر العاطفة الجسدية المفتوحة أمراً غير محبذ. في المقابل، الثقافة الأمريكية منفتحة على المصافحات والتربيت على الظه ر .`
      },
      {
        question: "Which of the following vocalic features refers strictly to the highness or lowness of a vocal tone?",
        options: [
          "Volume",
          "Quality",
          "Rate",
          "Pitch"
        ],
        answer: 3,
        explanation: `طبقة الصوت (Pitch) تشير إلى مدى حدة أو غلظة الصوت (Highness or lowness). نغير طبقة صوتنا للتركيز على فكرة، لطرح سؤال، أو للتعبير عن العصبية (طبقة عالية) أو الحزن والسلام (طبقة منخفضة) .`
      },
      {
        question: "A speaker with a naturally booming, loud voice must be careful in professional settings because excessive volume runs the risk of making them appear:",
        options: [
          "Timid and unsure of themselves.",
          "Cold and unsympathetic.",
          "Obnoxious or pushy.",
          "Immature and frail."
        ],
        answer: 2,
        explanation: `مستوى الصوت (Volume) يترك انطباعا قويا.ً الشخص الذي يتحدث بصوت عالٍ جداً يخاطر بأن يراه الآخرون كشخص مزعج، فظ، أو متسلط (Obnoxious or pushy). بينما الصوت المنخفض جداً يوحي بالخجل أو انعدام الثقة .`
      },
      {
        question: "If a person speaks at a rate of 80 words per minute during a casual story, what is the most likely risk they face regarding their listeners?",
        options: [
          "They will appear excessively happy and excited.",
          "Their speech will become completely unintelligible.",
          "They run the risk of boring their listeners.",
          "They will be perceived as hypertense."
        ],
        answer: 2,
        explanation: `معدل التحدث الطبيعي يتراوح بين 100 و 200 كلمة في الدقيقة. التحدث ببطء شديد (مثل 80 كلمة في الدقيقة) بدون سبب درامي أو توضيحي يضع المتحدث في خطر إشعار مستمعيه بالملل الشديد (Boring listeners).`
      },
      {
        question: "A person's vocal quality (timbre) is described as \"throaty.\" According to vocalic perceptions, how is this person likely to be judged by strangers?",
        options: [
          "As frail and weak.",
          "As cold and unsympathetic.",
          "As hypertense and anxious.",
          "As immature and unintelligent."
        ],
        answer: 1,
        explanation: `خامة الصوت المنبعثة بعمق من الحنجرة (Throaty) تعطي انطباعا نفسيا بأن المتحدث شخص بارد المشاعر وقاسٍ أو غير متعاطف (Cold and unsympathetic).`
      },
      {
        question: "What role do \"vocalized pauses\" play when they are used moderately and occasionally in speech?",
        options: [
          "They completely substitute the need for facial expressions.",
          "They lower the pitch of the voice to convey peacefulness.",
          "They hold the speaker's turn while they search for the right word.",
          "They demonstrate direct body orientation."
        ],
        answer: 2,
        explanation: `رغم أن الوقفات الصوتية (مثل: إممم، حسنا)ً تعد أصواتا دخيلة، إلا أن استخدامها بشكل معتدل له وظيفة وهي "حجز دور المتحدث " (Hold our turn) وإخبار المستمع بأنه لم ينت ه من الكلام ولكنه يبحث عقليا عن الكلمة المناسبة .`
      },
      {
        question: "Paralanguage can interact with a verbal message in three distinct ways. It can complement the verbal message, supplement it, or:",
        options: [
          "Delete it completely.",
          "Contradict it.",
          "Translate it to kinesics.",
          "Transform it into proxemics."
        ],
        answer: 1,
        explanation: `شبه اللغة (مثل النبرة) إما أن تتوافق وتكمل الرسالة اللفظية، أو تضيف إليها، أو "تتناقض" معها (Contradict). مثل أن تقول "أنا لست غاضبا"ً ولكن بصوت مرتفع وحاد، هنا النبرة تناقضت مع الكلمات .`
      },
      {
        question: "Which of the following best defines \"Proxemics\" as categorized under types of nonverbal communication?",
        options: [
          "The interpretation of what and how body motions communicate.",
          "The interpretation of a verbal message based on paralinguistic features.",
          "The way we communicate nonverbally with our use of space.",
          "The way we communicate nonverbally with our use of time."
        ],
        answer: 2,
        explanation: `بناءً على شريحة أنواع التواصل غير اللفظي (Proxemics) هو المصطلح الخاص بدراسة استخدام "المسافة والمساحة " (Use of Space) بين الأشخاص كوسيلة للتواصل الدال على الحميمية أو الرسمية .`
      },
      {
        question: "Which of the following best defines \"Chronemics\"?",
        options: [
          "Nonverbal communication through the use of time.",
          "Nonverbal communication through vocal pitch.",
          "Nonverbal communication through touch.",
          "Nonverbal communication through personal appearance."
        ],
        answer: 0,
        explanation: `بناءً على شريحة أنواع التواصل، (Chronemics) يختص بكيفية استخدامنا للوقت (Use of Time) كرسالة غير لفظية، مثل دلالات التأخير عن المواعيد أو الاستعجال في الحديث .`
      },
      {
        question: "If an individual’s voice has too much \"nasality,\" research suggests listeners are most likely to form which negative perception?",
        options: [
          "The individual seems frail and physically unwell.",
          "The individual sounds immature or unintelligent.",
          "The individual appears overly aggressive and pushy.",
          "The individual sounds hypertense and stressed."
        ],
        answer: 1,
        explanation: `جودة الصوت الأنفي (Nasal) ، وهو الصوت الذي يخرج كأنه مسدود من الأنف، يجعل المستمعين يربطون المتحدث بشكل لاإرادي بعدم النضج الطفولي أو قلة الذكاء (Immature or unintelligent).`
      },
      {
        question: "The statement \"We cannot NOT communicate\" directly explains which core characteristic of nonverbal behavior?",
        options: [
          "Multi-channeled processing",
          "Cultural ambiguity",
          "Inevitability",
          "Vocalic supplementation"
        ],
        answer: 2,
        explanation: `مقولة "لا يمكننا ألا نتواصل" هي الشرح الحرفي لصفة "الحتمية " (Inevitability). أي أن مجرد وجودك الجسدي، حتى لو التزمت الصمت التام، يرسل رسائل غير لفظية للآخرين لا يمكنك إيقافها .`
      },
      {
        question: "When Renee interprets her sister Janelle's true feelings, she listens to the sigh and observes the averted eyes rather than believing the words \"I'm fine.\" This implies that nonverbal communication is typically trusted more because:",
        options: [
          "It relies on arbitrary emblems.",
          "It is less ambiguous than spoken language.",
          "It is the primary conveyor of emotions and is harder to fake.",
          "It represents exactly 100% of social meaning."
        ],
        answer: 2,
        explanation: `البشر مبرمجون على الاعتماد على الإشارات غير اللفظية لأنها تعبر عن المشاعر بصدق وعفوية (Primary conveyor of emotions) ويصعب التحكم فيها وتزييفها مقارنة بالكلمات اللفظية التي يمكن اختيارها بعناية لإخفاء الحقيقة .`
      },
      {
        question: "In mainstream American culture, parents telling children to \"Look at me when I'm talking to you\" highlights the cultural belief that direct eye contact signifies:",
        options: [
          "Disrespect and challenge.",
          "Respect and interest.",
          "Unmotivated body movement.",
          "Excessive haptics."
        ],
        answer: 1,
        explanation: `في الثقافة الأمريكية السائدة، يُنظر إلى التواصل البصري المباش ر (Direct eye contact) على أنه دليل قاطع على الانتباه، الاهتمام، والاحترام للمتحدث .`
      },
      {
        question: "Why might a manager from a Caribbean culture perceive an employee's direct eye contact as inappropriate during a reprimand?",
        options: [
          "Because in that culture, direct gaze towards a superior can be interpreted as disrespectful.",
          "Because it indicates the employee is using unmotivated movements.",
          "Because direct eye contact is an emblem for \"I don't care.\"",
          "Because oculistics do not exist in Caribbean cultures."
        ],
        answer: 0,
        explanation: `على عكس الثقافة الأمريكية، العديد من الثقافات (مثل الكاريبية، اللاتينية، وبعض الآسيوية والأفريقية) تعتبر أن النظر المباشر في عين الشخص الأعلى مكانة (كشخصية إدارية أو أب) هو نوع من التحدي وقلة الاحترام (Disrespectful).`
      },
      {
        question: "What is the structural difference between an \"illustrator\" and an \"emblem\"?",
        options: [
          "Emblems are vocalic; illustrators are kinesic.",
          "Illustrators are universal across all cultures; emblems only exist in America.",
          "Emblems can substitute completely for words; illustrators only augment the verbal message.",
          "Illustrators are unmotivated movements; emblems are motivated movements."
        ],
        answer: 2,
        explanation: `الفرق الجوهري هو أن "الرم ز " (Emblem) يمتلك معنى مستقلاً بذاته ويمكنه استبدال الجملة تماما (مثل رفع الإبهام للموافقة). بينما "المُو ضِّح " (Illustrator) يفقد معناه إذا تم استخدامه بدون كلام، فهو يأتي فقط ليرافق ويدعم الكلمة المنطوقة .`
      },
      {
        question: "Which category of nonverbal communication do \"Self-Presentation Cues\" like appearance and clothing fall under?",
        options: [
          "They are a subcategory of Vocalics.",
          "They form their own distinct category of nonverbal communication types.",
          "They belong exclusively to Proxemics.",
          "They are considered a form of Haptics."
        ],
        answer: 1,
        explanation: `بناءً على شريحة "أنواع التواصل غير اللفظي"، صُممت إشارات التقديم الذاتي أو المظه ر (Self-Presentation Cues) كفئة رئيسية ومستقلة بحد ذاتها، تختلف عن حركيات الجسد والصوتيات والمساحة والوقت .`
      },
      {
        question: "When a person's voice quality sounds too \"breathy,\" listeners are most prone to interpret this nonverbal cue as a sign that the speaker is:",
        options: [
          "Confident and pushy.",
          "Frail.",
          "Cold and unsympathetic.",
          "Hypertense."
        ],
        answer: 1,
        explanation: `الصوت المليء بالهواء أو المبحوح بشكل مفرط (Breathy) يوحي للمستمع بشكل لاإرادي بأن المتحدث يعاني من الضعف أو الهشاشة الجسدية أو النفسية (Frail).`
      },
      {
        question: "What is the consequence of pacing back and forth during a speech without a specific purpose?",
        options: [
          "It functions as an emblem indicating deep thought.",
          "It is an unmotivated movement that distracts listeners from the point being made.",
          "It acts as an illustrator that augments the verbal argument.",
          "It increases the volume and pitch of the speaker's vocalics."
        ],
        answer: 1,
        explanation: `السير ذهابا وإياب اً (Pacing) بدون هدف مسرحي يُصنف على أنه حركة غير مُحفزة (Unmotivated movement) ، وهي حركات عصبية تسحب تركيز الجمهور من محتوى الكلام إلى متابعة حركة المتحدث المربكة .`
      },
      {
        question: "A teacher lowers their pitch and speaks very slowly while describing a tragic historical event. In this instance, what are pitch and rate primarily being used for?",
        options: [
          "To substitute an emblem.",
          "To create an ambiguous paralinguistic pause.",
          "To convey sadness and emphasize the gravity of the point.",
          "To demonstrate direct body orientation."
        ],
        answer: 2,
        explanation: `خفض طبقة الصوت (Pitch) يعبر بوضوح عن مشاعر الهدوء أو الحزن، وإبطاء سرعة التحدث (Rate) يُستخدم عادةً للتأكيد وإبراز أهمية الفكرة (Emphasize a point). كلاهما اجتمعا هنا لخدمة الغرض العاطفي للقصة .`
      },
      {
        question: "Which nonverbal characteristic explains why attempting to interpret a single gesture out of context is often prone to error?",
        options: [
          "Nonverbal communication is inevitable.",
          "Nonverbal communication is multi-channeled.",
          "Nonverbal communication is inherently strident.",
          "Nonverbal communication is primarily chronological."
        ],
        answer: 1,
        explanation: `لأن التواصل غير اللفظي "متعدد القنوات " (Multi-channeled) ، فإن المعنى الحقيقي لا يكتمل إلا بدمج إيماءة اليد مع تعبير الوجه ونبرة الصوت. عزل حركة واحدة وتفسيرها قد يؤدي إلى فهم خاطئ تمام اً .`
      },
      {
        question: "Which of the following is NOT considered a component of \"Kinesics\"?",
        options: [
          "Gestures",
          "Facial expression",
          "Vocalized pauses",
          "Posture"
        ],
        answer: 2,
        explanation: `الوقفات الصوتية (Vocalized pauses) هي جزء من علم الصوتيات أو شبه اللغة (Vocalics/Paralanguage)، وليست جزءاً من علم حركيات الجسد (Kinesics) الذي يشمل الإيماءات، الوضعية، الوجه، العين، واللمس .`
      },
      {
        question: "A manager typically speaks softly, but raises their volume significantly when confronting an employee about a missed deadline. This demonstrates that volume varies not only by natural tendency, but also depending on:",
        options: [
          "Haptics and chronemics.",
          "The situation, the topic of discussion, and emotional intent.",
          "The direct body orientation of the listener.",
          "The amount of vocalized pauses used."
        ],
        answer: 1,
        explanation: `رغم أن لكل إنسان مستوى صوت طبيعي (مرتفع أو منخفض)، إلا أن حجم الصوت يتغير ديناميكيا استجابةً لظروف الموقف، طبيعة الموضوع، والهدف العاطفي المراد توصيله (Emotional intent) ، مثل إظهار الحزم أو الغضب في هذه الحالة .`
      },
      {
        question: "How do emoticons function similarly to facial expressions in digital communication?",
        options: [
          "Both serve as vocalic cues that adjust the pitch of the text.",
          "Both are used exclusively as unmotivated movements.",
          "Both convey the emotional state or reactions to the accompanying message.",
          "Both guarantee that the communication is no longer ambiguous."
        ],
        answer: 2,
        explanation: `الوظيفة الأساسية لتعبيرات الوجه هي نقل الحالة العاطفية المرافقة للكلام. ونظراً لغياب الوجه الحقيقي في الرسائل النصية، تقوم الرموز التعبيرية (Emoticons) بلعب نفس الدور من خلال إضافة الطابع العاطفي للرسالة المكتوبة .`
      },
      {
        question: "When interpreting nonverbal messages, why is the concept of ambiguity a significant challenge?",
        options: [
          "Because nonverbal behaviors are impossible to observe accurately.",
          "Because very few nonverbal behaviors mean the same thing to everyone across different cultures and contexts.",
          "Because all nonverbal behaviors are classified as vocalics.",
          "Because humans can turn off their nonverbal communication entirely."
        ],
        answer: 1,
        explanation: `التحدي الأكبر في التواصل غير اللفظي هو "الغموض " (Ambiguity) ؛ فلا يوجد قاموس ثابت للغة الجسد، ونفس الحركة قد تعني أشياء متناقضة تماما باخلاف ثقافة الشخص، جنسه، أو السياق الذي حدثت فيه .`
      },
      {
        question: "A student feels highly nervous before giving a speech. Despite planning out exactly what to say, their voice trembles and they avoid looking at the audience. This contrast occurs because:",
        options: [
          "We have full control over both our verbal and nonverbal behaviors.",
          "While we can carefully choose our verbal message, we often don't control our nonverbal behavior.",
          "The student is intentionally using indirect body orientation to show respect.",
          "Vocal trembling is an emblem for academic achievement."
        ],
        answer: 1,
        explanation: `الكلمات (Verbal message) تخضع لسيطرة العقل الواعي ويمكن تحضيرها بعناية، لكن السلوكيات غير اللفظية (التعرق، ارتجاف الصوت، تجنب النظر) تصدر غالبا من العقل اللاواعي، مما يجعل التحكم فيها أو إخفاءها أمراً بالغ الصعوبة .`
      },
      {
        question: "If a speaker uses \"uh\" and \"um\" repeatedly while presenting data, what happens to the audience's perception of the message?",
        options: [
          "They ignore it completely as extraneous noise.",
          "They interpret it as a sign of extreme aggression.",
          "They are likely to perceive the speaker as nervous or unsure of what they are saying.",
          "They view it as a motivated movement that clarifies the data."
        ],
        answer: 2,
        explanation: `الوقفات الصوتية العرضية يتم تجاهلها عادة، ولكن عندما تصل إلى حد "الإفراط " (Excess) ، فإنها تعطي المستمعين دليلاً غير لفظي على أن المتحدث إما غير واثق من معلوماته، أو أنه متوتر جداً وغير متمكن من الموقف .`
      },
      {
        question: "Facing a colleague squarely with your shoulders aligned to theirs is an example of:",
        options: [
          "Direct body orientation signaling attentiveness.",
          "Indirect body orientation signaling dominance.",
          "Unmotivated body movement signaling nervousness.",
          "Chronemic awareness signaling punctuality."
        ],
        answer: 0,
        explanation: `مواجهة الشخص وجها لوجه وبشكل مستقيم تسمى "التوجيه الجسدي المباش ر " (Direct body orientation). هذه الوضعية ترسل رسالة إيجابية واضحة مفادها أنك تمنح الشخص الآخر انتباهك الكامل وتحترمه .`
      },
      {
        question: "The phrase \"actions speak louder than words\" is deeply supported by communication research because:",
        options: [
          "People generally listen to paralanguage but ignore actual words.",
          "Gestures generate physical sound waves that are louder than speech.",
          "As much as 60 percent of social meaning comes from nonverbal behavior, making actions more impactful in conveying meaning.",
          "Only unmotivated movements are interpreted by listeners."
        ],
        answer: 2,
        explanation: `المقولة الشهيرة "الأفعال أبلغ من الأقوال" تُدعم علميا بأن الغالبية العظمى من المعنى في أي تفاعل اجتماعي (تصل إلى 60 %) تُستمد من الأفعال والإشارات الجسدية والصوتية (Actions/Nonverbal behavior)، مما يجعلها ذات تأثير يفوق الكلمات المجردة .`
      }
    ]
  },
  {
    id: "meaning-context-culture",
    title: "Quiz 4: Nonverbal Dimensions: Space, Time & Appearance",
    description: "Master spatial proxemics, monochronic vs. polychronic chronemics, and self-presentation cues like appearance and grooming.",
    timeLimit: 900, // 15 minutes
    questions: [
      {
        question: "During a job interview, Ahmed decides to sit only 2 feet away from the HR manager to show enthusiasm. However, the HR manager feels uncomfortable and perceives Ahmed as overly pushy. Which concept best explains this communication breakdown?",
        options: [
          "Ahmed violated the rules of chronemics by rushing the interview.",
          "Ahmed used personal distance in a setting that requires social distance.",
          "Ahmed utilized artifacts inappropriately for a formal setting.",
          "Ahmed used intimate distance instead of public distance."
        ],
        answer: 1,
        explanation: `في علم المسافات (Proxemics) ، تُستخدم "المسافة الشخصية" )من 18 بوصة إلى 4 أقدام( في المحادثات العادية بين المعارف، بينما المقابلات الرسمية (Job Interviews) تتطلب "مسافة اجتماعية" )من 4 إلى 12 قدما(ً. جلوس أحمد على بُعد قدمين جعله يقتحم المساحة الشخصية للمدير، مما أعطى انطباعا بالتطفل .`
      },
      {
        question: "A company merges with an international firm. The local team gets frustrated because their new international partners often answer phone calls and reply to emails during important strategic meetings. This conflict is fundamentally a clash between:",
        options: [
          "High proxemic and low proxemic cultures.",
          "Monochronic and polychronic time orientations.",
          "Artifactual and spatial communication styles.",
          "Inherited and controllable self-presentation cues."
        ],
        answer: 1,
        explanation: `الخلاف هنا يتعلق بعلم الزمن (Chronemics). الفريق المحلي يتبع توجها "أحادي الزمن " (Monochronic) يركز على إنجاز مهمة واحدة في كل مرة )الاجتماع فقط(، بينما الشركاء الدوليون يتبعون توجها "متعدد الزمن " (Polychronic) يسمح بالقيام بمهام متعددة في نفس الوقت دون اعتبار ذلك قلة احترام .`
      },
      {
        question: "Sara is delivering a presentation about a serious financial crisis in her company. While reading the gloomy statistics, she unconsciously bounces her leg rapidly and plays with her hair. Afterwards, the audience is confused and doesn't take the crisis seriously. Which guideline for sending nonverbal messages did Sara violate?",
        options: [
          "Use perception checking to understand the audience.",
          "Do not assume universal meaning for your gestures.",
          "Make sure your nonverbal cues do not distract from your message.",
          "Adapt your chronemic behavior to the cultural context."
        ],
        answer: 2,
        explanation: `الحركات اللاإرادية مثل هز الساق أو اللعب بالشعر أثناء الحديث عن موضوع جاد تشتت انتباه الجمهو ر (Distract from the message). القاعدة الأساسية هنا هي الانتباه للإشارات غير اللفظية التي نصدرها وتجنب أي حركة قد تسحب تركيز المستمعين بعيداً عن محتوى الرسالة اللفظية .`
      },
      {
        question: "You walk into a new manager's office. The desk is massive and placed perfectly in the center, decorated with expensive, rare sculptures, and several framed certificates are hung high on the wall. Before the manager even speaks, you feel a sense of their authority. You are interpreting nonverbal messages primarily through:",
        options: [
          "Self-presentation cues.",
          "Kinesics.",
          "Artifacts.",
          "Intimate proxemics."
        ],
        answer: 2,
        explanation: `الأشياء التي نستخدمها لتزيين مساحتنا المادية تُعرف ب "المصنوعات " (Artifacts). المدير هنا لم يختر هذه المقتنيات لوظيفتها فقط، بل للرسالة التي تنقلها )السلطة والنجاح(. ترتيب المكتب واختيار الديكور هو شكل من أشكال التواصل غير اللفظي عن طريق المساحة .`
      },
      {
        question: "Mona asks her colleague, \"Are you upset with my proposal?\" Her colleague says, \"No, it's fine,\" but crosses his arms, avoids eye contact, and steps back. Mona decides he is actually upset. Why is Mona's interpretation likely accurate according to communication principles?",
        options: [
          "Verbal messages are always intentionally deceptive in the workplace.",
          "As much as 60% of social meaning in face-to-face communication comes from nonverbal behavior.",
          "Indirect body orientation is a chronemic sign of disagreement.",
          "The colleague is using polychronic behavior to show disapproval."
        ],
        answer: 1,
        explanation: `الدراسات تشير إلى أن حوالي 60 % من المعنى الاجتماعي في المقابلات المباشرة يُستمد من السلوك غير اللفظي. عندما تتناقض الكلمات اللفظية )لا، الأمر بخير( مع لغة الجسد )تكتيف الأذرع وتجنب النظر(، يعتمد الإنسان لا إراديا على الإشارات غير اللفظية لأنها أصدق في التعبير عن المشاع ر .`
      },
      {
        question: "Khaled is leading a team of people from diverse cultural backgrounds. During a meeting, one member remains completely silent and maintains a rigid posture. Khaled thinks the member is angry, but later realizes that in their culture, this indicates deep respect. Which guideline for interpreting nonverbal messages did Khaled ignore?",
        options: [
          "Ensure nonverbal communication matches verbal communication.",
          "Be purposeful in the use of personal space.",
          "Do not automatically assume that a particular behavior means the same thing to everyone.",
          "Always use monochronic time management to avoid cultural friction."
        ],
        answer: 2,
        explanation: `السلوك غير اللفظي يتسم ب "الغمو ض " (Ambiguity). حركة أو وضعية معينة قد تعني الغضب في ثقافة معينة والاحترام في ثقافة أخرى. خطأ خالد كان افتراض أن لغة الجسد لها معنى "عالمي" وثابت ينطبق على الجميع بنفس الطريقة .`
      },
      {
        question: "During a negotiation, the client leans forward, lowers his voice, and moves to within 15 inches of your face to share a final offer. According to proxemics, what distance zone has the client entered, and why might this cause discomfort?",
        options: [
          "Intimate distance; it is usually reserved for private conversations between close friends.",
          "Personal distance; it is meant for casual, non-business conversations.",
          "Social distance; it is too close for a formal business interaction.",
          "Public distance; it indicates extreme aloofness."
        ],
        answer: 0,
        explanation: `المسافة الحميمة (Intimate distance) تمتد من التلامس الجسدي حتى 18 بوصة، وهي مخصصة للمقربين جداً. دخول عميل أو شريك عمل في هذه المساحة ) 15 بوصة( يكسر القواعد الاجتماعية الخاصة بالمسافة المهنية، مما يولد شعوراً كبيراً بعدم الارتياح والتطفل (Pushy).`
      },
      {
        question: "A politician wants to appear youthful and energetic for an upcoming campaign. They hire a stylist, start a strict exercise and diet routine, and wear modernly tailored suits. This scenario emphasizes which aspect of nonverbal communication?",
        options: [
          "The multichanneled nature of kinesics.",
          "The controllable aspects of self-presentation cues.",
          "The inherited traits of physical appearance.",
          "The use of artifacts to establish social distance."
        ],
        answer: 1,
        explanation: `إشارات التقديم الذاتي (Self-Presentation Cues) تشمل المظهر الخارجي. بينما توجد صفات موروثة لا يمكن تغييرها، يبرز هذا السيناريو الجوانب "القابلة للتحكم " (Controllable) مثل اللياقة البدنية )عن طريق الرياضة والنظام الغذائي( والملابس، والتي تُستخدم لتوجيه أحكام الآخرين علينا .`
      },
      {
        question: "A student complains to a professor, saying, \"You seem to not care about my question because you are packing your bag while I am talking.\" The professor replies, \"I'm sorry, I am just late for my next class, but I am listening.\" The student's initial statement is an excellent example of:",
        options: [
          "Polychronic time orientation.",
          "Multichanneled sending.",
          "Perception checking.",
          "Ambiguous kinesics."
        ],
        answer: 2,
        explanation: `"التحقق من الإدراك " (Perception checking) هو مهارة تفسيرية يقوم فيها الشخص بوصف السلوك غير اللفظي الذي يراه ويطرح استنتاجه ليسمح للطرف الآخر بتأكيده أو تصحيحه، بدلاً من القفز إلى استنتاجات صامتة قد تكون خاطئة .`
      },
      {
        question: "Ali tells his friend a very sad story about losing his job, but Ali has a wide smile on his face and is laughing nervously. His friend is completely confused about how to react. This confusion occurs because Ali failed to follow which specific guideline?",
        options: [
          "Make your nonverbal communication match your verbal communication.",
          "Consider nonverbal behaviors as they relate to artifacts.",
          "Pay attention to the multiple chronemic cues being sent.",
          "Use perception checking to analyze the friend's reaction."
        ],
        answer: 0,
        explanation: `الارتباك حدث لأن هناك تناقضا صارخا بين الرسالة اللفظية )قصة حزينة( والإشارات غير اللفظية )الابتسام والضحك(. لكي يكون التواصل فعالاً، يجب أن "تتطابق " (Match) الإشارات غير اللفظية مع الكلمات المنطوقة لدعم المعنى بدلاً من تشويشه .`
      },
      {
        question: "What is the formal term used to describe how space and distance communicate meaning between people?",
        options: [
          "Chronemics",
          "Proxemics",
          "Kinesics",
          "Vocalics"
        ],
        answer: 1,
        explanation: `علم (Proxemics) هو المصطلح الأكاديمي والرسمي الذي يدرس كيفية استخدام البشر للمسافة والمساحة المادية المحيطة بهم للتواصل وإرسال إشارات عن طبيعة العلاقة .`
      },
      {
        question: "If someone maintains a distance that is farther away than you are typically accustomed to during a conversation, how are you most likely to interpret this nonverbal cue?",
        options: [
          "As a sign of them being overly familiar or pushy.",
          "As an indication of a polychronic orientation.",
          "As a sign of aloofness or standoffishness.",
          "As an invitation into their intimate distance."
        ],
        answer: 2,
        explanation: `عندما يقف الشخص بعيداً جداً أكثر من المعتاد، فإن العقل يفسر هذه المسافة الزائدة كعلامة على التحفظ، البرود العاطفي، أو الرغبة في الانعزال (Aloofness).`
      },
      {
        question: "Which of the following ranges represents the \"Personal distance\" zone, typically used for casual conversations?",
        options: [
          "Up to 18 inches.",
          "From 18 inches to 4 feet.",
          "From 4 to 12 feet.",
          "Anything more than 12 feet."
        ],
        answer: 1,
        explanation: `"المسافة الشخصية " (Personal distance) تُقدر في الدراسات بأنها تتراوح من 18 بوصة )نهاية المساحة الحميمة( إلى 4 أقدام، وهي المساحة المريحة التي نستخدمها للحديث مع الأصدقاء العاديين والزملاء في المواقف غير الرسمية .`
      },
      {
        question: "In the context of proxemics, what defines an \"Artifact\"?",
        options: [
          "An inherited physical feature that influences appearance.",
          "The specific distance maintained during formal business.",
          "Objects and possessions used to decorate the physical space we control.",
          "The vocal qualities that accompany a verbal message."
        ],
        answer: 2,
        explanation: `المصنوعات أو المقتنيات (Artifacts) هي الأشياء المادية، مثل الأثاث، اللوحات، الديكورات، التي نضعها في مساحتنا الخاصة. نحن نستخدمها لتزيين المكان ونقل رسائل عن شخصياتنا واهتماماتنا للآخرين .`
      },
      {
        question: "According to the lecture, people choose artifacts for their physical space not just for their practical function, but also for:",
        options: [
          "Establishing a polychronic environment.",
          "The message that the objects convey about them.",
          "Minimizing their intimate distance.",
          "Avoiding the need for verbal communication entirely."
        ],
        answer: 1,
        explanation: `اختيار الأشياء في مكاتبنا أو منازلنا لا يقتصر على الحاجة العملية (Function) ، بل نختارها بعناية من أجل الانطباع أو "الرسالة " (Message) التي تعكسها عن ذوقنا، مكانتنا، واهتماماتنا أمام زوارنا .`
      },
      {
        question: "The study of how we interpret the use of time in communication is formally known as:",
        options: [
          "Proxemics",
          "Kinesics",
          "Chronemics",
          "Artifacts"
        ],
        answer: 2,
        explanation: `علم (Chronemics) يختص بدراسة الزمن وكيف يفسر البشر استخدام الوقت )مثل التأخير، إنجاز المهام، إدارة المواعيد( كرسائل غير لفظية تختلف باختلاف الثقافات .`
      },
      {
        question: "Which of the following statements best describes people from Western cultures regarding their use of time?",
        options: [
          "They generally lack any time consciousness.",
          "They lean heavily towards a polychronic orientation in all aspects.",
          "They tend to be very time-conscious.",
          "Time is entirely irrelevant to their social meaning."
        ],
        answer: 2,
        explanation: `الثقافات الغربية (Western cultures) تُعرف بأنها ثقافات تقدر الوقت بشكل كبير جد اً (Time-conscious)، وتعتبر الدقة في المواعيد وإدارة الوقت أموراً حاسمة في الاحترام والمهنية .`
      },
      {
        question: "A person who prefers to complete one task entirely before starting the next, and strictly follows a schedule, demonstrates a:",
        options: [
          "Polychronic time orientation.",
          "Monochronic time orientation.",
          "Public distance preference.",
          "Proxemic time orientation."
        ],
        answer: 1,
        explanation: `التوجه "أحادي الزمن " (Monochronic) يعني التركيز على أداء "مهمة واحدة في كل مرة " (Doing one thing at a time) واحترام الجداول الزمنية بصرامة، على عكس التعددية الزمنية .`
      },
      {
        question: "Polychronic time orientation is characterized primarily by:",
        options: [
          "Emphasizing doing one thing at a time.",
          "Maintaining strict social distance during work.",
          "Emphasizing doing multiple things at once.",
          "Using artifacts to dictate schedules."
        ],
        answer: 2,
        explanation: `التوجه "متعدد الزمن " (Polychronic) يتميز بالمرونة العالية والقدرة على "القيام بأشياء متعددة في نفس الوقت " (Doing multiple things at once) ، وتكون العلاقات الإنسانية فيه أحيانا أهم من الالتزام الصارم بالجدول .`
      },
      {
        question: "Self-presentation cues largely dictate how others make judgments about us. Which of the following is considered an inherited physical feature rather than a controllable one?",
        options: [
          "Body type",
          "Grooming",
          "Clothing choices",
          "Muscle tone from exercise"
        ],
        answer: 0,
        explanation: `إشارات التقديم الذاتي تنقسم إلى ما يمكن التحكم فيه )كالنظافة الشخصية، الملابس، والوزن إلى حد ما( وما هو "موروث" جيني اً (Inherited) مثل طبيعة ونوع الجسم الأساسي (Body type) ، لون العينين، وطبيعة الشع ر .`
      },
      {
        question: "Which combination makes interpreting nonverbal behaviors particularly tricky?",
        options: [
          "They are universally identical, static, and easy to isolate.",
          "They are exclusively polychronic and artifact-based.",
          "They are inevitable, multichanneled, ambiguous, and sometimes unintentional.",
          "They rely solely on the literal interpretation of spoken words."
        ],
        answer: 2,
        explanation: `صعوبة قراءة لغة الجسد تكمن في خصائصها المعقدة: فهي تحدث رغما عنا )حتمية(، وتصل عبر عدة قنوات في نفس اللحظة )متعددة القنوات(، وتحتمل أكثر من معنى )غامضة(، وقد نصدرها دون وعي منا )غير مقصودة( .`
      },
      {
        question: "When you look closely at someone’s nonverbal behavior, you should consider it in relation to the \"context\" of the message. What does \"context\" mean in this situation?",
        options: [
          "The specific dictionary definition of the words they are using.",
          "The historical, physical, and situational environment in which the communication occurs.",
          "Their inherited physical features like eye color.",
          "Only the chronemic orientation of the speaker."
        ],
        answer: 1,
        explanation: `"السياق " (Context) هو الإطار الذي يحيط بالحدث، ويشمل المكان، طبيعة العلاقة، والثقافة المحيطة. تفسير سلوك مثل "الصمت" يختلف تماما إذا كان في جنازة، مقابل صمت في اجتماع عمل، لذا لا بد من ربط السلوك بسياقه .`
      },
      {
        question: "The meaning assigned to any face-to-face communication is based on two main components. What are they?",
        options: [
          "The sender's clothing and the receiver's chronological orientation.",
          "The content of the verbal message and the interpretation of the accompanying nonverbal behavior.",
          "The artifacts present in the room and the personal space maintained.",
          "The grammatical accuracy and the pitch of the voice."
        ],
        answer: 1,
        explanation: `المعنى الكامل الذي نصل إليه يتشكل من تفاعل شقين: المحتوى اللفظي )ما قيل بالكلمات( وتفسيرنا للسلوكيات غير اللفظية التي صاحبت هذا الكلام )كيف قيلت وبأي لغة جسد( .`
      },
      {
        question: "Which distance zone is generally considered appropriate for conducting impersonal business, such as a formal meeting with a stranger?",
        options: [
          "Intimate distance",
          "Personal distance",
          "Social distance",
          "Public distance"
        ],
        answer: 2,
        explanation: `"المسافة الاجتماعية " (Social distance) والتي تتراوح من 4 إلى 12 قدما،ً هي المسافة المصممة للمواقف الرسمية والأعمال غير الشخصية (Impersonal business) ، حيث توفر مساحة مهنية وآمنة لكلا الطرفين .`
      },
      {
        question: "Why is the phrase \"actions speak louder than words\" highly relevant to the study of nonverbal communication?",
        options: [
          "Because vocalics produce sound waves stronger than consonants.",
          "Because kinesics is the only recognized form of human communication.",
          "Because a significant majority of social meaning is derived from nonverbal cues rather than the spoken text.",
          "Because artifacts emit physical sounds in a professional space."
        ],
        answer: 2,
        explanation: `الأفعال أبلغ من الأقوال لأن لغة الجسد والإشارات غير اللفظية تحمل النسبة الأكبر )حوالي 60 %( من التأثير والمعنى، ولأن الناس يثقون في الأفعال العفوية أكثر من الكلمات المدروسة عند وجود تعارض بينهما .`
      },
      {
        question: "If a speaker delivers a message and notices the audience looking confused, the speaker should evaluate whether their nonverbal cues:",
        options: [
          "Successfully matched the polychronic time orientation.",
          "Were hidden in the intimate distance zone.",
          "Distracted from their verbal message.",
          "Increased the artifacts in the room."
        ],
        answer: 2,
        explanation: `كقاعدة أساسية في "إرسال" الرسائل، إذا كان الجمهور مشتتا،ً يجب على المتحدث مراجعة ما إذا كانت حركاته )مثل لغة الجسد العصبية أو النبرة المربكة( تسحب الانتباه وتشتتهم عن استيعاب محتوى الرسالة .`
      },
      {
        question: "An effective communicator will adapt their nonverbal behavior depending on the situation. This means:",
        options: [
          "Acting identical in a funeral, a party, and a board meeting.",
          "Modifying aspects like posture, voice volume, and distance to fit the specific setting and audience.",
          "Always maintaining intimate distance to show high engagement.",
          "Ignoring cultural contexts to maintain personal authenticity."
        ],
        answer: 1,
        explanation: `التكيف (Adapting) يعني أن السلوك المقبول في حفلة مع الأصدقاء )صوت عالٍ، مسافة قريبة( لا يصح استخدامه في اجتماع مجلس إدارة. التواصل الفعال يتطلب تعديل لغة الجسد لتناسب وتتلاءم مع طبيعة كل موقف .`
      },
      {
        question: "Which of the following is considered a primary rule when \"Interpreting\" nonverbal messages?",
        options: [
          "Assume every gesture has a strict, universal dictionary meaning.",
          "Base your judgment entirely on one single nonverbal cue.",
          "Pay attention to multiple nonverbal cues and how they relate to the verbal message.",
          "Ignore the context and focus solely on the chronemic data."
        ],
        answer: 2,
        explanation: `نظراً لأن التواصل غير اللفظي "متعدد القنوات"، لا يجب الاعتماد على حركة واحدة )مثل فرك الأنف( للحكم على شخص بالكذب. التفسير الصحيح يتطلب مراقبة "مجموعة متكاملة" من الإشارات وربطها بالكلام المنطوق .`
      },
      {
        question: "What determines how much \"Personal space\" we perceive as appropriate?",
        options: [
          "Only our genetic and inherited traits.",
          "Individual preference, nature of the relationship, and culture.",
          "Exclusively the physical artifacts in the room.",
          "Whether we are using vocalics or kinesics."
        ],
        answer: 1,
        explanation: `)بالعربي(: مقدار المساحة الشخصية التي نشعر فيها بالراحة ليس ثابتا،ً بل يتغير بناءً على ثلاثة عوامل: التفضيل الشخصي للفرد، مدى قرب العلاقة مع الطرف الآخر )صديق مقابل غريب(، والقواعد الثقافية للمجتمع .`
      },
      {
        question: "A teacher is lecturing to a hall of 150 students. The teacher remains on a stage situated 15 feet away from the front row. The teacher is utilizing:",
        options: [
          "Social distance.",
          "Public distance.",
          "Polychronic distance.",
          "Intimate distance."
        ],
        answer: 1,
        explanation: `"المسافة العامة " (Public distance) هي أي مسافة تزيد عن 12 قدما.ً تُستخدم هذه المسافة عادةً في الخطابات العامة، المحاضرات الكبيرة، والمواقف التي يكون فيها التفاعل الفردي غير متوقع .`
      },
      {
        question: "Which of the following elements is NOT considered a part of \"Self-Presentation Cues\"?",
        options: [
          "The clothes we choose to wear.",
          "Our body type and physical features.",
          "The speed at which we speak.",
          "Our personal grooming habits."
        ],
        answer: 2,
        explanation: `سرعة التحدث (Rate of speech) تندرج تحت علم الصوتيات (Vocalics). أما إشارات التقديم الذاتي (Self-Presentation) فتتعلق فقط بالمظهر المرئي والشكل الخارجي )الملابس، النظافة، شكل الجسم( .`
      },
      {
        question: "You notice a colleague looking repeatedly at their watch while you are speaking to them. Interpreting this behavior correctly requires an understanding of:",
        options: [
          "Proxemics",
          "Artifacts",
          "Chronemics",
          "Inherited features"
        ],
        answer: 2,
        explanation: `النظر المستمر إلى الساعة هو استخدام للوقت للتعبير عن رسالة )الاستعجال، الملل، أو ضيق الوقت(. هذا يندرج مباشرة تحت علم (Chronemics) الذي يدرس دلالات الوقت في التواصل .`
      },
      {
        question: "The fact that a single nonverbal behavior, like eye contact, can mean \"respect\" in one culture and \"disrespect\" in another is proof that nonverbal communication is:",
        options: [
          "Inevitable.",
          "Monochronic.",
          "Ambiguous.",
          "Intentional."
        ],
        answer: 2,
        explanation: `الغموض (Ambiguity) هو الصفة التي تجعل إشارة واحدة تحتمل تفسيرات مختلفة ومتناقضة أحيانا باختلاف الثقافة أو الموقف، مما يجعل قراءة لغة الجسد عملية غير قطعية .`
      },
      {
        question: "To improve nonverbal sending skills, a person must first:",
        options: [
          "Eliminate all artifacts from their environment.",
          "Be conscious of the nonverbal behaviors they are currently displaying.",
          "Adopt a strictly monochronic view of time.",
          "Maintain a public distance from all coworkers."
        ],
        answer: 1,
        explanation: `الخطوة الأولى لتحسين الرسائل غير اللفظية هي "الوعي " (Be conscious). لا يمكنك إصلح لغة جسدك السلبية إذا لم تكن مدركا أصلاً لحركاتك اللاإرادية، مثل العبوس أو التململ أثناء الحديث .`
      },
      {
        question: "\"Be purposeful in your use of nonverbal communication\" means:",
        options: [
          "Using nonverbal cues randomly to keep the audience guessing.",
          "Intentionally selecting gestures, posture, and tone that support and enhance your message.",
          "Relying entirely on artifacts to do the communicating for you.",
          "Suppressing all nonverbal emotions during business hours."
        ],
        answer: 1,
        explanation: `أن تكون "هادف اً " (Purposeful) يعني ألا تترك لغة جسدك للصدفة، بل تتعمد استخدام نبرة صوت معينة أو حركة يد محددة لخدمة هدف رسالتك وزيادة تأثيرها الإيجبي على المتلقي .`
      },
      {
        question: "A common mistake in interpreting nonverbal communication is:",
        options: [
          "Assuming that a specific gesture has a universal meaning applicable to everyone.",
          "Analyzing the context before making a judgment.",
          "Asking the sender to clarify their feelings via perception checking.",
          "Noting the contradiction between the voice and the words."
        ],
        answer: 0,
        explanation: `الخطأ الشائع هو الافتراض التلقائي بأن ابتسامة أو حركة يد تعني نفس الشيء لكل البشر في كل المواقف. المحاضرة تحذر صراحة من هذا الافتراض الخاطئ بسبب الاختلافات الثقافية والشخصية .`
      },
      {
        question: "If the physical distance between two communicators is less than what is expected for the situation, the receiver usually feels:",
        options: [
          "Respected and elevated.",
          "Uncomfortable, perceiving the sender as pushy.",
          "Indifferent, as distance does not affect communication.",
          "Aloof and disconnected."
        ],
        answer: 1,
        explanation: `انتهاك المساحة وتقليل المسافة بشكل غير متوقع )الاقتراب الزائد( يهدد منطقة الراحة الخاصة بالشخص، مما يولد شعوراً بالانزعاج ويجعل الشخص الآخر يبدو متطفلاً أو هجومي اً (Pushy).`
      },
      {
        question: "Which of the following is NOT considered a part of self-presentation?",
        options: [
          "Clothes.",
          "Eye contact.",
          "Physical characteristics.",
          "Grooming."
        ],
        answer: 1,
        explanation: `اتصال العين (Eye contact) يندرج تحت حركيات الجسد (Kinesics) وتحديداً علم (Oculistics) ، وليس من إشارات التقديم الذاتي (Self-presentation) التي تشمل الملابس، السمات الجسدية الموروثة، والنظافة الشخصية .`
      },
      {
        question: "When a sender's nonverbal messages are \"unintentional,\" it means:",
        options: [
          "The sender planned the gesture but executed it poorly.",
          "The sender is communicating a message without consciously deciding to do so.",
          "The sender is relying entirely on verbal text.",
          "The nonverbal message cannot be decoded by anyone."
        ],
        answer: 1,
        explanation: `الرسائل غير المتعمدة (Unintentional) هي تلك التي تصدر من اللاوعي، مثل تورد الوجنتين عند الخجل أو اتساع حدقة العين. نحن نرسل هذه الإشارات دون أن نأخذ قراراً عقليا بآدائها، ومع ذلك يقرأها الآخرون ويفهمونها .`
      },
      {
        question: "Grooming is categorized under which type of nonverbal communication?",
        options: [
          "Proxemics",
          "Chronemics",
          "Self-presentation cues",
          "Vocalics"
        ],
        answer: 2,
        explanation: `النظافة الشخصية والعناية بالمظه ر (Grooming) هي جزء لا يتجزأ من كيفية تقديمنا لأنفسنا للعالم، وتندرج تحت إشارات التقديم الذاتي (Self-presentation) التي تبني الانطباع الأول عنا .`
      },
      {
        question: "A medical student enters a senior doctor's office and notices medical journals perfectly aligned, framed prestigious degrees, and an organized, minimalist desk. This careful arrangement of objects is an example of using:",
        options: [
          "Artifacts to communicate professionalism and expertise.",
          "Chronemics to show respect for the student's time.",
          "Personal distance to create an intimate atmosphere.",
          "Unintentional nonverbal errors."
        ],
        answer: 0,
        explanation: `ترتيب المكتب ووضع الشهادات ليس مجرد صدفة، بل هو استخدام متعمد ل "المصنوعات " (Artifacts) لنقل رسالة غير لفظية قوية للزوار بأن صاحب المكتب خبير، منظم، ومحترف .`
      },
      {
        question: "Which nonverbal channel is most likely to cause misunderstandings between a manager from New York (typically time-conscious) and an employee from a rural, relaxed village?",
        options: [
          "Artifactual presentation",
          "Chronemics",
          "Intimate distance",
          "Inherited physical cues"
        ],
        answer: 1,
        explanation: `الاختلاف في الوعي بالوقت وإدارته )الصرامة في نيويورك مقابل الاسترخاء في الثقافات الأخرى( هو جوهر دراسة (Chronemics)، وهو المسبب الأول للتوتر الثقافي في هذا السيناريو .`
      },
      {
        question: "Which distance zone is strictly defined as \"up to 18 inches\"?",
        options: [
          "Social distance",
          "Personal distance",
          "Intimate distance",
          "Public distance"
        ],
        answer: 2,
        explanation: `المساحة التي تبدأ من التلامس وتصل إلى مسافة 18 بوصة تُصنف في علم ال Proxemics على أنها "المسافة الحميمة " (Intimate distance) ، وهي محجوزة للشركاء العاطفيين والمقربين جد اً .`
      },
      {
        question: "A key concept from the lecture is that people make judgments about others based heavily on:",
        options: [
          "The hidden artifactual meanings of their office only.",
          "How they look, including physical appearance and clothing.",
          "The monochronic speed at which they walk.",
          "Their ability to maintain public distance constantly."
        ],
        answer: 1,
        explanation: `المحاضرة تنص صراحة على أن البشر يطلقون أحكامهم على الآخرين بشكل كبير بناءً على مظهرهم الخارجي (How they look)، وهذا يشمل الملابس، النظافة، والسمات الجسدية (Self-presentation cues).`
      },
      {
        question: "Why should you \"pay attention to the multiple nonverbal cues being sent\" rather than just one?",
        options: [
          "Because single nonverbal cues are always accurate.",
          "Because nonverbal communication is multichanneled, and meaning is derived from the combination of behaviors.",
          "Because verbal communication is irrelevant in face-to-face settings.",
          "Because artifacts can change the meaning of chronemics."
        ],
        answer: 1,
        explanation: `نظراً لكون التواصل غير اللفظي يتدفق عبر عدة قنوات )الوجه، الصوت، الجسد(، فإن التركيز على إشارة واحدة يعطي صورة ناقصة. المعنى الدقيق يتشكل من مراقبة المجموعة المتكاملة من هذه الإشارات مع اً (Combination of behaviors).`
      },
      {
        question: "If a communicator is described as \"aloof,\" it most likely means they are manipulating which nonverbal aspect to keep people away?",
        options: [
          "Maintaining an excessively far proxemic distance.",
          "Using polychronic time management aggressively.",
          "Speaking with monochronic vocalics.",
          "Displaying inappropriate artifacts."
        ],
        answer: 0,
        explanation: `مصطلح (Aloof) يعني متحفظ أو منعزل. عندما يبتعد شخص مسافة أكبر من اللازم أثناء المحادثة )استخدام المسافة للابتعاد العاطفي(، فإنه يعطي شعوراً للمتلقي بأنه متكبر أو لا يرغب في التواصل .`
      },
      {
        question: "What is the primary danger of having nonverbal cues that distract from your verbal message?",
        options: [
          "The receiver will ignore the artifacts in the room.",
          "The receiver will miss the core verbal message because their attention is divided.",
          "The sender will accidentally slip into an intimate distance.",
          "It automatically changes the culture from polychronic to monochronic."
        ],
        answer: 1,
        explanation: `الدماغ البشري يتشتت بسهولة. إذا كانت حركاتك غير اللفظية غريبة أو مزعجة (Distracting cues)، فإن المستمع سيركز على حركاتك بدلاً من التركيز على كلامك، مما يؤدي إلى ضياع الهدف الأساسي من الرسالة .`
      },
      {
        question: "According to the guidelines, if a speaker wants to show genuine enthusiasm for a project, they must ensure that:",
        options: [
          "They use artifacts to block the audience's view.",
          "Their nonverbal communication (like an energetic voice and open posture) matches their verbal statement.",
          "They utilize public distance to get closer to the audience.",
          "They ignore the context of the meeting room."
        ],
        answer: 1,
        explanation: `لكي تكون الرسالة مقنعة وصادقة، يجب تطبيق قاعدة التطابق (Matching). الكلمات التي تعبر عن الحماس (Verbal) يجب أن يصاحبها صوت حيوي ولغة جسد منفتحة (Nonverbal) لكي يصدقها الجمهو ر .`
      },
      {
        question: "The \"unintentional\" nature of some nonverbal communication implies that:",
        options: [
          "People never know what they are saying verbally.",
          "We cannot stop our bodies from sending messages even when we try not to communicate.",
          "Sending nonverbal messages requires careful, written planning.",
          "Artifacts are placed in rooms by accident."
        ],
        answer: 1,
        explanation: `العفوية وعدم القصد (Unintentional) تعني أن أجسادنا تتحدث رغما عنا. حتى لو حاولنا إخفاء توترنا أو كذبنا، قد تصدر منا إشارات دقيقة (Micro-expressions) تفضح مشاعرنا الحقيقية دون أن نتحكم فيها .`
      },
      {
        question: "Which of the following summaries best captures the essence of nonverbal communication as taught in this lecture?",
        options: [
          "It is a secondary, highly controllable tool used strictly to arrange office artifacts.",
          "It is an inevitable, multichanneled system of bodily and spatial cues that carries the majority of social meaning.",
          "It relies exclusively on how a culture manages its clocks and time schedules.",
          "It is a conscious, purely verbal skill used to eliminate ambiguity in public speaking."
        ],
        answer: 1,
        explanation: `هذا الخيار يلخص المحاضرة بدقة: التواصل غير اللفظي حتمي )لا يمكن تجنبه(، متعدد القنوات، يعتمد على الجسد والمساحة )والصوت والزمن(، وهو المسؤول عن نقل النسبة الأكبر )المرجعية( من المعنى الاجتماعي والعاطفي في أي تفاعل بشري .`
      }
    ]
  },
{
    id: "strategies-sensitivity",
    title: "Quiz 5: Language Strategies & Sensitivity",
    description: "Master indexing generalizations, similes and metaphors, vivid word choice, and respecting listeners through linguistic sensitivity.",
    timeLimit: 240, // 4 minutes
    // Updated Quiz 5 questions - Listening Quiz
        {
          question: "A patient sits in a clinic while the doctor explains the results of a recent blood test. The patient listens carefully not only to the medical terms but also closely observes the doctor's tone of voice and facial expressions to gauge if the news is bad. Which type of listening is the patient primarily engaging in?",
          options: [
            "Appreciative listening",
            "Critical listening",
            "Discriminative listening",
            "Empathic listening"
          ],
          answer: 2,
          explanation: `الاستماع التمييزي (Discriminative listening) يهدف إلى الفهم الدقيق للمعنى الحقيقي للرسالة من خلال التركيز الشديد على الكلمات بالإضافة إلى الإشارات غير اللفظية (مثل نبرة الصوت وتعبيرات الوجه) لمعرفة ما وراء الكلام.`
        },
        {
          question: "During a university lecture on artificial intelligence, Ahmed takes detailed notes, tries to mentally connect the new concepts with previous lessons, and asks himself how these algorithms are applied in real life. His ultimate goal is to pass the final exam. Ahmed is practicing:",
          options: [
            "Critical listening",
            "Comprehensive listening",
            "Discriminative listening",
            "Empathic listening"
          ],
          answer: 1,
          explanation: `الاستماع الشامل (Comprehensive listening) يحدث عندما يكون الهدف هو فهم الرسالة، تعلمها، وتذكرها لاسترجاعها لاحقاً (مثل حضور المحاضرات الأكاديمية أو الدورات التدريبية).`
        },
        {
          question: "Sara is listening to a politician giving a speech proposing a new tax law. Instead of just taking notes, Sara constantly questions the politician's motives, checks if the statistics provided are factual, and assesses if the conclusions logically follow the premises. This scenario best describes:",
          options: [
            "Critical listening",
            "Perspective taking",
            "Appreciative listening",
            "Discriminative listening"
          ],
          answer: 0,
          explanation: `الاستماع النقدي (Critical listening) هو أصعب أنواع الاستماع، لأن الهدف منه ليس مجرد الفهم، بل تقييم الرسالة (Evaluate the worth)، وتحليل مدى صدق المتحدث (Truthfulness) ، والتمييز بين الحقائق والاستنتاجات.`
        },
        {
          question: "You are on a phone call with your best friend who is crying after a difficult breakup. You sit quietly, listening to their feelings without interrupting or offering unsolicited advice, trying to understand the depth of their sadness. Which listening approach are you using?",
          options: [
            "Appreciative listening",
            "Comprehensive listening",
            "Empathic listening",
            "Critical listening"
          ],
          answer: 2,
          explanation: `الاستماع التعاطفي (Empathic listening) يُستخدم عندما يكون الهدف هو فهم مشاعر المتحدث تجاه تجربة مر بها، وأن تكون مستمعًا داعمًا (Sounding board) لمساعدته على تفريغ مشاعره.`
        },
        {
          question: "During a team meeting, the manager is explaining a complex new workflow. While the manager speaks, Omar's mind wanders to what he will have for lunch, assuming he already knows what the manager is going to say because the manager speaks slowly. Omar is failing at which specific step of the listening process?",
          options: [
            "Evaluating",
            "Attending",
            "Understanding",
            "Responding"
          ],
          answer: 1,
          explanation: `الانتباه (Attending) هو القدرة على التركيز على كلام المتحدث رغم المشتتات. لأن الدماغ يعالج الكلمات أسرع بكثير من سرعة التحدث، يميل المستمع السيئ إلى السرحان، وهو ما فشل فيه عمر هنا.`
        },
        {
          question: "A colleague says, \"I am so overwhelmed with this massive project deadline!\" You reply, \"It sounds like you are feeling really stressed and anxious about finishing everything on time.\" Your response is an example of:",
          options: [
            "A content paraphrase",
            "A feelings paraphrase",
            "Constructing mnemonics",
            "Sympathetic responsiveness"
          ],
          answer: 1,
          explanation: `إعادة صياغة المشاعر (Feelings paraphrase) هي استجابة تركز على التقاط المشاعر (التوتر والقلق) الكامنة وراء محتوى الرسالة، وعكسها للمتحدث لتأكيد فهم حالته العاطفية بشكل صحيح.`
        },
        {
          question: "When watching a sad movie about a family losing their home, you start crying uncontrollably because you are experiencing the exact same sorrow that the characters are portraying on screen. This emotional reaction is classified as:",
          options: [
            "Perspective taking",
            "Sympathetic responsiveness",
            "Empathic responsiveness",
            "Discriminative decoding"
          ],
          answer: 2,
          explanation: `الاستجابة التعاطفية (Empathic responsiveness) تحدث عندما تختبر استجابة عاطفية \"موازية\" ومطابقة تماما لمشاعر الشخص الآخر (تبكي لأنه يبكي)، نتيجة ملاحظتك لمشاعره.`
        },
        {
          question: "A boss tells an employee, \"I need that report ASAP.\" The employee asks, \"Could you clarify if ASAP means by the end of today, or by tomorrow morning?\" The employee's question is primarily designed to:",
          options: [
            "Clarify feelings",
            "Clarify word meanings",
            "Empathize with the speaker",
            "Challenge the speaker's credibility"
          ],
          answer: 1,
          explanation: `من طرق تحسين \"الفهم\" هو طرح الأسئلة. هنا، الموظف يطرح سؤالًا لتوضيح معنى كلمة محددة (Clarify word meanings) وهي كلمة \"ASAP\" التي قد تحمل تفسيرات مختلفة.`
        },
        {
          question: "While listening to a complex sequence of historical events, a student creates a short acronym using the first letter of each event's name to help them remember the exact order for the test. This technique is known as:",
          options: [
            "Paraphrasing",
            "Repeating",
            "Perspective taking",
            "Constructing mnemonics"
          ],
          answer: 3,
          explanation: `بناء فنون الذاكرة (Constructing mnemonics) يعني استخدام تقنيات اصطناعية (مثل تكوين كلمة من الحروف الأولى) كأداة مساعدة لتخزين المعلومات المعقدة وتسهيل استرجاعها من الذاكرة.`
        },
        {
          question: "A speaker states, \"The company's profits increased by 10% this year, therefore our new marketing campaign was a massive success.\" A listener identifies the 10% increase as a verifiable fact, but questions the link to the marketing campaign. The listener correctly identified the second part of the statement as an:",
          options: [
            "Empathic response",
            "Inference",
            "Absolute truth",
            "Appreciative statement"
          ],
          answer: 1,
          explanation: `لتقييم أي رسالة، يجب التفرقة بين الحقيقة (Fact) التي يمكن إثباتها (زيادة 10٪) وبين الاستنتاج (Inference) وهو تخمين مبني على الملاحظات (أن السبب هو الحملة الإعلانية). هذا الاستنتاج قد يكون صحيحًا أو خاطئاً.`
        },
        {
          question: "How does the lecture differentiate between \"hearing\" and \"listening\"?",
          options: [
            "Hearing is a cognitive process; listening is a physiological process.",
            "Hearing is an active process; listening is a passive process.",
            "Hearing is a physiological process; listening is a cognitive process.",
            "Hearing and listening are identical processes in communication."
          ],
          answer: 2,
          explanation: `السمع (Hearing) هو عملية فسيولوجية بحتة (استقبال الأذن للصوت)، بينما الاستماع (Listening) هو عملية عقلية ومعرفية (Cognitive) تتطلب اختيار الانتباه للصوت وإعطائه معنى.`
        },
        {
          question: "According to the text, listening occurs ONLY when:",
          options: [
            "Sound waves physically enter the ear canal.",
            "We choose to attach meaning to what we hear.",
            "We provide a supportive written response.",
            "The speaker uses a high volume and fast rate."
          ],
          answer: 1,
          explanation: `الاستماع ليس تلقائيًا. المحاضرة تؤكد أن الاستماع الحقيقي يبدأ فقط في اللحظة التي \"نختار\" فيها عقليًا أن نربط الأصوات التي نسمعها بمعنى ونحاول فهمها.`
        },
        {
          question: "Roughly what percentage of our communication time is spent listening?",
          options: [
            "10 percent",
            "25 percent",
            "50 percent or more",
            "90 percent"
          ],
          answer: 2,
          explanation: `الاستماع هو المهارة الأهم لأننا نقضي 50% أو أكثر من وقت تواصلنا اليومي في الاستماع للآخرين، ورغم ذلك، نسبة قليلة جداً منا تتلقى تدريبًا رسميًا عليه مقارنة بالقراءة والكتابة.`
        },
        {
          question: "Which type of listening requires the LEAST amount of careful focus on specific details?",
          options: [
            "Appreciative listening",
            "Discriminative listening",
            "Critical listening",
            "Comprehensive listening"
          ],
          answer: 0,
          explanation: `الاستماع التقديري (Appreciative listening) هدفه الاستمتاع فقط (مثل الاستماع لأغنية أو مشاهدة مباراة مع الأصدقاء)، لذلك لا يحتاج المستمع لتركيز شديد أو تحليل دقيق للتفاصيل.`
        },
        {
          question: "What are the five steps of the listening process in their correct order?",
          options: [
            "Hearing, Decoding, Paraphrasing, Mnemonics, Responding.",
            "Attending, Understanding, Remembering, Evaluating, Responding.",
            "Attending, Empathizing, Repeating, Evaluating, Paraphrasing.",
            "Understanding, Attending, Evaluating, Remembering, Responding."
          ],
          answer: 1,
          explanation: `عملية الاستماع المعقدة تتكون من 5 خطوات متتالية: الانتباه للرسالة (Attending)، فهم معناها (Understanding)، تذكرها (Remembering)، تقييمها (Evaluating)، وأخيراً الرد عليها (Responding).`
        },
        {
          question: "Why do poor listeners often let their minds drift to unrelated thoughts while someone is speaking?",
          options: [
            "Because human brains can only process 120 words per minute.",
            "Because speakers typically speak much faster than the brain can process.",
            "Because our brains process words significantly faster than people speak, leaving \"spare time\" for the mind to wander.",
            "Because discriminative listening naturally encourages mental drift."
          ],
          answer: 2,
          explanation: `الشخص العادي يتحدث بسرعة 120 - 150 كلمة/دقيقة، بينما الدماغ قادر على معالجة 400 - 800 كلمة/دقيقة. هذا الفارق الكبير في السرعة يعطي الدماغ وقت فراغ، مما يجعل المستمع السيء يستغل هذا الوقت في السرحان والتفكير بأمور أخرى.`
        },
        {
          question: "\"Decoding a message accurately to reflect the meaning intended by the speaker\" is the definition of which listening step?",
          options: [
            "Attending",
            "Remembering",
            "Understanding",
            "Evaluating"
          ],
          answer: 2,
          explanation: `الفهم (Understanding) يعني فك شفرة الرسالة بدقة لكي يتطابق المعنى الذي وصل لك مع المعنى الذي كان يقصده المتحدث بالفعل.`
        },
        {
          question: "Which of the following is NOT one of the three suggested methods to improve the \"Understanding\" step of listening?",
          options: [
            "Asking questions",
            "Constructing mnemonics",
            "Paraphrasing the message",
            "Empathizing with the speaker"
          ],
          answer: 1,
          explanation: `لتعزيز الفهم، نصح المحاضر بطرح الأسئلة، إعادة الصياغة، والتعاطف. أما بناء فنون الذاكرة (Mnemonics) فهي تقنية تُستخدم لتحسين خطوة \"التذكر\" (Remembering) وليس الفهم.`
        },
        {
          question: "\"What kind of paper would you like me to get, and how much will you need?\" is a question primarily designed to:",
          options: [
            "Clarify feelings.",
            "Paraphrase content.",
            "Get details.",
            "Clarify word meanings."
          ],
          answer: 2,
          explanation: `هذا السؤال يبحث عن معلومات إضافية محددة (نوع وكمية)، فهو يندرج تحت فئة الأسئلة التي تهدف إلى \"الحصول على تفاصيل\" لزيادة دقة الفهم.`
        },
        {
          question: "A \"content paraphrase\" strictly focuses on which aspect of a message?",
          options: [
            "The emotional undertones.",
            "The denotative meaning.",
            "The nonverbal gestures.",
            "The speaker's ultimate credibility."
          ],
          answer: 1,
          explanation: `إعادة صياغة المحتوى (Content paraphrase) تركز فقط على تلخيص الحقائق والمعاني الصريحة (Denotative meaning) للرسالة، دون التطرق للمشاعر الكامنة وراءها.`
        },
        {
          question: "Which of the following describes \"Perspective taking\" in the context of empathy?",
          options: [
            "Experiencing an emotional response identical to the speaker's.",
            "Feeling pity and sorrow for the speaker's plight.",
            "Imagining yourself in the place of another to understand their viewpoint.",
            "Repeating the speaker's words exactly as they said them."
          ],
          answer: 2,
          explanation: `أخذ المنظور (Perspective taking) هو الشكل الأكثر شيوعًا للتعاطف، ويعني أن تضع نفسك ذهنيًا في حذاء الشخص الآخر (تخيل نفسك مكانه) لترى الموقف من زاويته وكيف يفكر فيه.`
        },
        {
          question: "Feeling concern, compassion, or sorrow for another person because of their difficult situation is called:",
          options: [
            "Sympathetic responsiveness.",
            "Perspective taking.",
            "Empathic responsiveness.",
            "Critical evaluation."
          ],
          answer: 0,
          explanation: `الاستجابة التعاطفية الوجدانية (Sympathetic responsiveness) لا تعني أنك تعيش نفس شعور الشخص (كما في الـ Empathic)، بل تعني أنك تشعر بالشفقة والأسف تجاه الوضع الصعب الذي يمر به.`
        },
        {
          question: "Which technique helps transfer information into long-term memory by saying it aloud or mentally rehearsing it several times immediately after hearing it?",
          options: [
            "Evaluating",
            "Taking notes",
            "Repeating",
            "Paraphrasing"
          ],
          answer: 2,
          explanation: `التكرار (Repeating) هو أسلوب لتعزيز الذاكرة، حيث تقوم بترديد المعلومة سواء بصوت عالٍ أو في سرك 3 أو 4 مرات فور سماعها لترسيخها في الذاكرة طويلة المدى.`
        },
        {
          question: "Note taking during a lecture does more than just provide a written record; it primarily helps the listener by:",
          options: [
            "Eliminating all competing nonverbal stimuli.",
            "Forcing them to evaluate the speaker's credibility immediately.",
            "Allowing them to take an active role in the listening process.",
            "Creating automatic emotional empathy with the lecturer."
          ],
          answer: 2,
          explanation: `تدوين الملاحظات يمنع المستمع من السرحان، لأنه يحول عملية الاستماع السلبية إلى عملية حيوية ونشطة (Active role)، مما يجبر الدماغ على التركيز لمعالجة المعلومات وكتابتها.`
        },
        {
          question: "Which step of the listening process involves critically analyzing what you have heard to determine its truthfulness?",
          options: [
            "Attending",
            "Understanding",
            "Evaluating",
            "Responding"
          ],
          answer: 2,
          explanation: `التقييم (Evaluating) هو مرحلة التفكير النقدي حيث لا تقبل كل ما تسمعه كمسلم به، بل تحلل الرسالة وتزن مدى صحتها ومصداقيتها (Truthfulness).`
        },
        {
          question: "In the evaluation stage, what is the defining characteristic of a \"factual statement\"?",
          options: [
            "It is an educated guess based on observations.",
            "Its accuracy can be verified as true.",
            "It is purely an expression of an emotion.",
            "It represents a generalized inference."
          ],
          answer: 1,
          explanation: `الحقيقة (Factual statement) هي المعلومة الموضوعية التي يمكن التحقق من دقتها وصحتها (Verifiable as true) بالدليل القاطع، ولا تختلف من شخص لآخر.`
        },
        {
          question: "Why is \"Critical Listening\" considered the most demanding of all listening types?",
          options: [
            "Because it focuses entirely on appreciating the speaker's tone.",
            "Because it requires you to ignore all nonverbal communication.",
            "Because it requires understanding, remembering, assessing credibility, and analyzing the truthfulness of the message simultaneously.",
            "Because it only occurs in deeply personal, emotional situations."
          ],
          answer: 2,
          explanation: `الاستماع النقدي يستهلك أكبر قدر من الطاقة العقلية، لأنه يتطلب منك القيام بعدة مهام معقدة في نفس الوقت: الفهم، التذكر، تحليل لغة الجسد، تقييم مصداقية المتحدث، واختبار صحة المعلومات المذكورة.`
        },
        {
          question: "When disagreeing with someone or providing negative feedback, why is a \"supportive response\" essential?",
          options: [
            "Because it proves that your inference is a verifiable fact.",
            "Because it confirms the speaker's feelings and demonstrates respect for them, even during disagreement.",
            "Because it forces the speaker to paraphrase their own message.",
            "Because it automatically changes the conversation to appreciative listening."
          ],
          answer: 1,
          explanation: `الاستجابة الداعمة ضرورية لكي نكون صادقين وأخلاقيين دون أن نجرح الآخرين. حتى عند توجيه نقد أو رفض، الاستجابة الداعمة تظهر احترامك لمشاعر المتحدث وقيمته، مما يمنع تحول النقاش إلى صراع.`
        },
        {
          question: "Listening to a broadcast news report specifically to learn about current traffic conditions before you drive to work is an example of:",
          options: [
            "Critical listening",
            "Empathic listening",
            "Comprehensive listening",
            "Discriminative listening"
          ],
          answer: 2,
          explanation: `أنت تستمع هنا بهدف فهم المعلومة بوضوح (حالة المرور) وتذكرها لتطبيقها في اتخاذ قرار الطريق الأفضل. هذا هو جوهر الاستماع الشامل (Comprehensive listening) المعتمد على تلقي المعلومات واكتسابها.`
        },
        {
          question: "Which of the following is an effective technique to improve the \"Attending\" step?",
          options: [
            "Formulate your response while the person is still speaking.",
            "Focus strictly on taking rapid notes without looking up.",
            "Get physically ready to listen and resist mental distractions.",
            "Avoid paraphrasing until the conversation ends."
          ],
          answer: 2,
          explanation: `للتحسين من القدرة على الانتباه (Attending)، يجب أن تهيئ جسدك للاستماع (كأن تتعدل في جلستك وتنظر للمتحدث)، وتكافح بوعي لمنع عقلك من الانشغال بأفكار مشتتة أو الالتفات للضوضاء المحيطة.`
        },
        {
          question: "The goal of \"Discriminative listening\" is to accurately understand the speaker's meaning by paying close attention to:",
          options: [
            "Only the physiological process of hearing.",
            "The factual statements ignoring all inferences.",
            "Both the words and the nonverbal cues like pitch and volume.",
            "Only the empathetic emotional state of the listener."
          ],
          answer: 2,
          explanation: `الاستماع التمييزي يعتمد على القدرة على \"التمييز\" بين الإشارات الحية. لذلك فهو يتطلب دمج الكلمات المنطوقة مع قراءة دقيقة للإشارات غير اللفظية (مثل النبرة وحركة الصوت) للوصول إلى المعنى العميق.`
        },
        {
          question: "If someone says, \"I am fine,\" but they are speaking with a shaky, almost whispering voice, which listening skill allows you to realize they are actually upset?",
          options: [
            "Discriminative listening",
            "Appreciative listening",
            "Comprehensive listening",
            "Factual evaluating"
          ],
          answer: 0,
          explanation: `قدرتك على ملاحظة أن الصوت المرتجف والهمس (إشارات غير لفظية) يتناقض مع الكلمة الإيجابية \"أنا بخير\"، واستنتاج المعنى الحقيقي من خلال هذا التناقض هو تطبيق مباشر للاستماع التمييزي (Discriminative listening).`
        },
        {
          question: "\"Intellectually identifying with or vicariously experiencing the feelings or attitudes of another\" is the formal definition of:",
          options: [
            "Empathy",
            "Paraphrasing",
            "Mnemonics",
            "Attending"
          ],
          answer: 0,
          explanation: `التعاطف (Empathy) يعني القدرة على التماهي الفكري أو العيش نيابة عن الآخرين (vicariously) في مشاعرهم ومواقفهم، ومحاولة فهم العالم من خلال عيونهم بدلاً من منظورنا الشخصي.`
        },
        {
          question: "When therapists and psychologists listen to their clients to help them sort through complex feelings, they are primarily using:",
          options: [
            "Critical listening",
            "Appreciative listening",
            "Empathic listening",
            "Comprehensive listening"
          ],
          answer: 2,
          explanation: `الأطباء النفسيون والمستشارون يعتمدون بشكل أساسي على الاستماع التعاطفي (Empathic listening) لبناء الثقة مع المريض، وفهم معاناته العاطفية بعمق، وتقديم الدعم النفسي اللازم.`
        },
        {
          question: "Which of the following is a technique that directly helps a listener resist mental distractions?",
          options: [
            "Interrupting the speaker to assert agreement.",
            "Hearing a person out fully before reacting.",
            "Focusing on evaluating inferences rather than facts.",
            "Using appreciative listening in professional settings."
          ],
          answer: 1,
          explanation: `الاستماع للآخر حتى النهاية قبل الرد (Hear a person out before you react) يمنع عقلك من تشتيت انتباهه في صياغة الرد بينما لا يزال المتحدث يتكلم، مما يقلل المشتتات الذهنية ويحسن الانتباه (Attending).`
        },
        {
          question: "A listener tries to assign worth to a message and tests whether the inferences are logically valid. This action belongs to which step of the listening process?",
          options: [
            "Responding",
            "Understanding",
            "Remembering",
            "Evaluating"
          ],
          answer: 3,
          explanation: `اختبار صحة الاستنتاجات وتحديد قيمة الرسالة (Assign worth) هي مهام نقدية بحتة، وتتم حصريًا في مرحلة "التقييم" (Evaluating) بعد أن يكون المستمع قد فهم الرسالة وتذكر محتواها.`
        },
        {
          question: "According to the lecture, the fundamental difference between facts and inferences is that inferences are:",
          options: [
            "Verifiable truths",
            "Conjectures based on facts or observations",
            "Denotative meanings of physical objects",
            "Statements entirely devoid of observation"
          ],
          answer: 1,
          explanation: `الاستنتاجات (Inferences) هي تخمينات أو اجتهادات عقلية (Conjectures). هي ليست من اختراع الخيال، بل تُبنى عادةً على ملاحظة أو حقيقة، ولكنها تظل تحتمل الخطأ أو الصواب ولا يمكن الجزم بها كحقيقة مطلقة.`
        },
        {
          question: "Which of the following is NOT a step in paraphrasing effectively?",
          options: [
            "Listen carefully to the message.",
            "Determine what the message means to you.",
            "Create a message that conveys your new images or feelings to the speaker.",
            "Immediately argue the logical flaws of the message."
          ],
          answer: 3,
          explanation: `خطوات إعادة الصياغة (Paraphrasing) تهدف فقط إلى التحقق من الفهم (الاستماع الجيد، ملاحظة المشاعر، فهم المعنى، ونقله للمتحدث). مناقشة العيوب المنطقية (المجادلة) تنتمي لمرحلة "التقييم والرد" وليس لمرحلة التأكد من الفهم.`
        },
        {
          question: "To effectively empathize with a speaker, a listener generally needs to:",
          options: [
            "Assert their own opinions strongly to guide the speaker.",
            "Put aside their own feelings or attitudes about the other person.",
            "Critically evaluate the truthfulness of the speaker's emotional state.",
            "Focus strictly on the denotative content of the words used."
          ],
          answer: 1,
          explanation: `لكي تتعاطف بصدق (Empathize)، يجب أن تضع مشاعرك، أحكامك المسبقة، وآرائك جانبًا، وتركز تمامًا على استقبال وتقبل مشاعر الشخص الآخر كما هي دون إصدار أحكام.`
        },
        {
          question: "Which step of the listening process bridges the gap between receiving the message and creating a visible reaction to it?",
          options: [
            "Attending",
            "Understanding",
            "Evaluating",
            "Responding"
          ],
          answer: 3,
          explanation: `الاستجابة (Responding) هي المرحلة النهائية في العملية، وهي التي تحول الاستماع من عملية صامتة وداخلية إلى تفاعل ملموس مع المتحدث، سواء كان الرد لفظيًا (دعم، نقد) أو غير لفظيًا (إيماءة بالرأس).`
        },
        {
          question: "What is the primary danger of assuming we know what a speaker is going to say before they finish?",
          options: [
            "It increases our sympathetic responsiveness unnecessarily.",
            "It forces us to use mnemonics constantly.",
            "It causes our minds to wander, reducing attending efficiency.",
            "It automatically turns discriminative listening into appreciative listening."
          ],
          answer: 2,
          explanation: `الافتراض المسبق بأننا نعرف بقية الكلام يجعلنا نتوقف عن التركيز (Attending). هذا الفراغ الذهني يفتح الباب للسرحان، وقد نفوت تفاصيل هامة لم نكن نتوقعها.`
        },
        {
          question: "A speaker says, \"I felt completely frustrated during the presentation.\" You reply, \"Could you tell me what you mean by frustrated?\" You are aiming to:",
          options: [
            "Empathize with their specific perspective.",
            "Evaluate the truthfulness of their emotion.",
            "Clarify word meanings to increase understanding.",
            "Provide a supportive critical response."
          ],
          answer: 2,
          explanation: `الكلمة \"محبط\" قد تعني لأحدهم الغضب وللآخر اليأس. سؤالك هنا هدفه توضيح المعنى المقصود من الكلمة (Clarify word meaning) لتجنب سوء الفهم في مرحلة الفهم (Understanding).`
        },
        {
          question: "Which of the following activities involves using Appreciative Listening?",
          options: [
            "Trying to memorize the chemical formula for water during a science class.",
            "Listening to a favorite stand-up comedian to relax.",
            "Analyzing a car salesperson's pitch before buying a car.",
            "Providing comfort to a grieving relative."
          ],
          answer: 1,
          explanation: `الاستماع التقديري (Appreciative) يكون من أجل المتعة والترفيه فقط. الاستماع إلى كوميدي مفضل يندرج تمامًا تحت هذا النوع، حيث لا يوجد ضغط للحفظ أو التقييم النقدي.`
        },
        {
          question: "A manager is evaluating a proposal. They read: \"The office printer jammed three times yesterday, so it is permanently broken and must be replaced.\" The manager recognizes the first part as fact, but the second part is a flawed:",
          options: [
            "Content paraphrase",
            "Inference",
            "Appreciative statement",
            "Mnemonic"
          ],
          answer: 1,
          explanation: `حدوث العطل 3 مرات بالأمس هو حقيقة (Fact). لكن القول بأن الطابعة \"معطلة بشكل دائم\" هو استنتاج (Inference) قد يكون خاطئًا (ربما تحتاج فقط لتنظيف أو صيانة بسيطة).`
        },
        {
          question: "Why does the lecture point out that fewer than 2 percent of people have had formal listening training?",
          options: [
            "To prove that listening is a purely physiological process that cannot be taught.",
            "To highlight the paradox that we use listening the most, yet we are trained in it the least.",
            "To argue that reading and writing are inherently more important skills.",
            "To show that only therapists need empathic listening skills."
          ],
          answer: 1,
          explanation: `المحاضرة تسلط الضوء على هذه الإحصائية لإبراز مفارقة عجيبة: رغم أن الاستماع هو المهارة التي نستخدمها أكثر من أي شيء آخر في حياتنا (50% من وقتنا)، إلا أننا نهمل تدريب أنفسنا عليها ونركز فقط على القراءة والكتابة.`
        },
        {
          question: "When interpreting a speaker's message, asking questions and paraphrasing are both tools designed to improve the:",
          options: [
            "Speed at which the speaker talks.",
            "Accuracy of decoding the intended meaning.",
            "Mnemonic structure of the listener's memory.",
            "Physiological capacity to hear sound waves."
          ],
          answer: 1,
          explanation: `طرح الأسئلة وإعادة الصياغة هما تقنيتان في مرحلة الفهم (Understanding)، والهدف منهما هو التأكد من أننا قمنا بفك شفرة (Decoding) بشكل دقيق يتطابق مع المعنى الذي قصده المتحدث.`
        },
        {
          question: "A listener who is highly skilled at noticing subtle changes in a speaker's pitch, rate, and eye contact is likely very strong in:",
          options: [
            "Constructing mnemonics",
            "Discriminative listening",
            "Taking perspective",
            "Content paraphrasing"
          ],
          answer: 1,
          explanation: `القدرة على التقاط الإشارات غير اللفظية الدقيقة (مثل النبرة وحركة العين) ودمجها مع الكلام هي جوهر الاستماع التمييزي (Discriminative listening) الذي يغوص لما وراء الكلمات.`
        },
        {
          question: "A student summarizes a teacher's long explanation by saying, \"So, essentially, the water cycle consists of evaporation, condensation, and precipitation. Is that correct?\" This is an example of a:",
          options: [
            "Feelings paraphrase",
            "Factual evaluation",
            "Content paraphrase",
            "Sympathetic response"
          ],
          answer: 2,
          explanation: `الطالب هنا قام بتلخيص المعلومات المباشرة والحقائق العلمية التي شرحها المعلم بدون التطرق إلى أي مشاعر. هذا يُسمى إعادة صياغة المحتوى (Content paraphrase).`
        },
        {
          question: "\"Hearing a person out before you react\" helps to reduce which common listening barrier?",
          options: [
            "Using inappropriate mnemonics.",
            "Giving an immediate supportive response.",
            "Interrupting others and jumping to conclusions.",
            "Over-empathizing with the speaker."
          ],
          answer: 2,
          explanation: `الاستماع للشخص حتى النهاية قبل الرد يمنع عادة "المقاطعة" (Interrupting) السلبية، ويمنع المستمع من القفز إلى استنتاجات خاطئة بناءً على جزء من الكلام قبل اكتمال الصورة.`
        },
        {
          question: "Which of the following accurately describes \"Attending\" as a cognitive function?",
          options: [
            "It is the physiological vibration of the eardrum.",
            "It is the artificial memory aid used for long-term recall.",
            "It is the intentional filtering of distractions to focus on a specific stimulus.",
            "It is the emotional sharing of another person's sorrow."
          ],
          answer: 2,
          explanation: `الانتباه (Attending) هو عملية عقلية نختار فيها بوعي التركيز على رسالة معينة (صوت المتحدث) مع تصفية وتجاهل جميع المشتتات المحيطة (الضوضاء أو الأفكار الداخلية).`
        }
        // End of new questions

      
    ]
  }
];

if (typeof window !== 'undefined') {
  window.quizzesData = quizzesData;
}
