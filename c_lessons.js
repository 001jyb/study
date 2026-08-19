// C 语法基础（零基础小课，独立模块）
// 结构：章节(chapters) → 模块(modules) → 内容
// 模块类型：point 知识点（text+code）/ quiz 小测（选择题）
var cGrammar = {
 "chapters": [
  {
   "id": 1,
   "icon": "🔤",
   "title": "变量与输入输出",
   "desc": "程序怎么存数据、怎么和用户打交道",
   "modules": [
    {
     "id": "1-1",
     "icon": "📦",
     "title": "变量：贴了标签的盒子",
     "type": "point",
     "text": "变量就是给数据起个名字。想象一排盒子：int age = 18 就是拿一个盒子，贴上标签「age」，里面放 18。之后代码里说到 age，就知道是 18。\n\n常见类型：\n• int —— 整数（18、-3、10086）\n• double —— 小数（3.14、9.9）\n• char —— 单个字符（'A'、'好'，用单引号）\n\n规则：用之前必须先「声明」（写上类型和名字）；一个变量只能放它类型对应的东西。",
     "code": "#include <stdio.h>\nint main() {\n    int age = 18;         // 整数\n    double price = 9.9;   // 小数\n    char grade = 'A';     // 单个字符（单引号）\n    printf(\"我 %d 岁\\n\", age);\n    printf(\"这个 %.1f 元\\n\", price);\n    printf(\"等级 %c\\n\", grade);\n    return 0;\n}"
    },
    {
     "id": "1-2",
     "icon": "📣",
     "title": "printf：把话说出来",
     "type": "point",
     "text": "printf 是 C 里最常用的输出函数：把内容打印到屏幕上。\n\n格式符（占位符）：\n• %d —— 整数\n• %f —— 小数\n• %c —— 字符\n• %s —— 字符串\n• \\n —— 换行\n• %.1f —— 小数保留 1 位\n\n套路：printf(\"文字 %d 文字\", 变量); —— %d 会被变量的值替换。",
     "code": "#include <stdio.h>\nint main() {\n    int score = 95;\n    printf(\"成绩是 %d 分\\n\", score);   // %d 被 score 的值替换\n    printf(\"及格线: %.1f%%\\n\", 60.0);  // %% 输出一个百分号\n    return 0;\n}"
    },
    {
     "id": "1-3",
     "icon": "⌨️",
     "title": "scanf：让程序听你的",
     "type": "point",
     "text": "scanf 让程序从键盘读入数据（比赛题里最常见的操作就是「读入 N 个数」）。\n\nscanf(\"%d\", &age); 意思是：等用户输入一个整数，存到 age 里。\n\n⚠️ 最容易错的地方：变量前面必须加 &（取地址符号）。\n先记住口诀：scanf 里，变量前面都要带 &；printf 里不用带。\n\n一次读多个：scanf(\"%d %d\", &a, &b); 输入时用空格或换行隔开。",
     "code": "#include <stdio.h>\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);      // 输入：3 5\n    printf(\"和是 %d\\n\", a + b);  // 输出：和是 8\n    return 0;\n}"
    },
    {
     "id": "1-4",
     "icon": "✅",
     "title": "章节小测",
     "type": "quiz",
     "desc": "4 道小题检验本章，全对即完成本章",
     "quiz": [
      {
       "q": "int age = 18; 这行代码的意思是？",
       "options": [
        "把 18 装进一个叫 age 的整数变量里",
        "让 age 等于字符串 \"18\"",
        "声明一个叫 age 的函数",
        "给 age 分配一个地址"
       ],
       "answer": 0,
       "explain": "age 是一个 int（整数）变量，= 18 是初始化：往这个盒子里装 18。"
      },
      {
       "q": "要输出小数变量 price 的值，用哪个格式符？",
       "options": ["%d", "%f", "%c", "%s"],
       "answer": 1,
       "explain": "%d 整数、%f 小数、%c 字符、%s 字符串。"
      },
      {
       "q": "scanf(\"%d\", &age); 里 & 的作用是？",
       "options": [
        "取 age 的地址，告诉 scanf 把读到的值存到哪里",
        "乘法符号",
        "取 age 当前的值",
        "注释符号"
       ],
       "answer": 0,
       "explain": "scanf 需要知道「存到哪里」，&age 就是 age 的内存地址。口诀：scanf 里变量前都要加 &，printf 里不用。"
      },
      {
       "q": "printf(\"我%d岁\\n\", 18); 会输出什么？",
       "options": ["我18岁", "我%d岁", "18我岁", "程序报错"],
       "answer": 0,
       "explain": "%d 会被后面的 18 替换，\\n 换行，所以输出「我18岁」并换行。"
      }
     ]
    }
   ]
  },
  {
   "id": 2,
   "icon": "📚",
   "title": "数组与字符串",
   "desc": "存一串数据：数组、二维数组、字符串（数据结构第1章的基础）",
   "modules": [
    {
     "id": "2-1",
     "icon": "📦",
     "title": "一维数组：一排格子",
     "type": "point",
     "text": "数组就是一排编了号的格子，所有格子放同一类型的数据。\n\nint a[5] = {10, 20, 30, 40, 50}; —— 5 个格子的整数数组。\n\n关键规则：\n• 下标从 0 开始：a[0] 是第一个，a[4] 是最后一个（共 5 个）\n• 访问 a[i] 是 O(1)：知道起始位置直接算过去\n• 长度固定，用之前想好大小；遍历常用 for 循环\n• 越界（比如 a[5]）不报错但会出 bug，一定要小心",
     "code": "#include <stdio.h>\nint main() {\n    int a[5] = {10, 20, 30, 40, 50};   // 声明并初始化\n    printf(\"a[0]=%d, a[4]=%d\\n\", a[0], a[4]);  // 下标从0开始\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", a[i]);           // 遍历\n    }\n    printf(\"\\n\");\n    a[2] = 99;                          // 按下标修改\n    printf(\"修改后 a[2]=%d\\n\", a[2]);\n    return 0;\n}"
    },
    {
     "id": "2-2",
     "icon": "🔡",
     "title": "字符串：以 \\0 结尾的字符数组",
     "type": "point",
     "text": "C 语言没有单独的字符串类型，字符串就是 char 数组，最后一位是 '\\0'（空字符），表示「到这里结束」。\n\nchar s[] = \"hello\"; 实际占 6 个字节：h e l l o \\0。\n\n常用操作（#include <string.h>）：\n• strlen(s) —— 长度（不含 \\0）\n• strcpy(t, s) —— 拷贝\n• strcat(t, s) —— 拼接（目标数组要够大！）\n• 遍历：for (int i = 0; s[i] != '\\0'; i++)\n\n⚠️ printf 输出用 %s；字符串不能直接 s1 == s2 比较，要用 strcmp。",
     "code": "#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[] = \"hello\";          // 自动加 '\\0'\n    printf(\"长度: %zu\\n\", strlen(s));  // 5（不含\\0）\n    for (int i = 0; s[i] != '\\0'; i++) {\n        printf(\"%c \", s[i]);     // 遍历到\\0结束\n    }\n    printf(\"\\n\");\n    char t[20];\n    strcpy(t, s);                 // 拷贝\n    strcat(t, \" world\");          // 拼接\n    printf(\"%s\\n\", t);           // hello world\n    return 0;\n}"
    },
    {
     "id": "2-3",
     "icon": "🧮",
     "title": "二维数组：表格",
     "type": "point",
     "text": "二维数组就是一张表格：int a[3][4] 表示 3 行 4 列。\n\n• 第一个下标是行，第二个是列\n• a[2][1] = 第 3 行第 2 列（下标都从 0 开始）\n• 遍历用双重 for：外层管行，内层管列\n• 初始化：int a[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};\n\n蓝桥杯里矩阵题、迷宫题都会用到二维数组。",
     "code": "#include <stdio.h>\nint main() {\n    int a[3][4] = {              // 3行4列\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    };\n    for (int i = 0; i < 3; i++) {      // 外层行\n        for (int j = 0; j < 4; j++) {  // 内层列\n            printf(\"%2d \", a[i][j]);\n        }\n        printf(\"\\n\");                 // 每行结束换行\n    }\n    printf(\"a[2][1] = %d\\n\", a[2][1]);  // 第3行第2列 = 10\n    return 0;\n}"
    },
    {
     "id": "2-4",
     "icon": "✅",
     "title": "章节小测",
     "type": "quiz",
     "desc": "4 道小题检验本章，全对即完成本章",
     "quiz": [
      {
       "q": "int a[5]; 的有效下标范围是？",
       "options": ["1 ~ 5", "0 ~ 4", "0 ~ 5", "1 ~ 4"],
       "answer": 1,
       "explain": "下标从 0 开始，到 n-1 结束：0、1、2、3、4 共 5 个。"
      },
      {
       "q": "char s[] = \"hi\"; 实际占几个字节（含结束符）？",
       "options": ["2", "3", "4", "1"],
       "answer": 1,
       "explain": "h、i 各 1 字节，加结尾的 '\\0' 共 3 字节。"
      },
      {
       "q": "遍历字符串时，结束条件通常写成？",
       "options": ["s[i] != '\\0'", "s[i] != '0'", "i < 100", "不需要结束条件"],
       "answer": 0,
       "explain": "字符串以 '\\0' 结尾，遇到它说明字符串结束。'0' 是字符 0，和 '\\0' 完全不同。"
      },
      {
       "q": "int a[3][4]; 表示？",
       "options": ["3 行 4 列", "4 行 3 列", "共 3 个元素", "共 4 个元素"],
       "answer": 0,
       "explain": "第一个下标是行、第二个是列：3 行 4 列，共 12 个元素。"
      }
     ]
    }
   ]
  },
  {
   "id": 3,
   "icon": "🎯",
   "title": "指针入门",
   "desc": "C 的灵魂：地址、指针变量、指针与数组（学链表前的必过关）",
   "modules": [
    {
     "id": "3-1",
     "icon": "🏠",
     "title": "地址：变量在内存里的门牌号",
     "type": "point",
     "text": "每个变量都存在内存里，内存就像一排编了号的房间，变量的「地址」就是它的门牌号。\n\n&age 就是取 age 的地址（& 读作「取地址」）。\n\n用 %p 可以打印地址：printf(\"%p\", &age); 输出类似 0x7ffc... 的一串十六进制。\n\n理解地址是理解指针的第一步：地址是数字，能存、能传、能计算。",
     "code": "#include <stdio.h>\nint main() {\n    int age = 18;\n    printf(\"age 的值: %d\\n\", age);\n    printf(\"age 的地址: %p\\n\", (void *)&age);  // 0x... 门牌号\n    // & 就是取地址符号\n    return 0;\n}"
    },
    {
     "id": "3-2",
     "icon": "🔗",
     "title": "指针变量：存地址的盒子",
     "type": "point",
     "text": "指针变量就是「专门存地址」的变量：\n\nint *p = &age;  —— p 是一个指针，里面存的是 age 的地址。\n\n两个符号要分清：\n• 声明时 *：int *p 表示 p 是指针（指向 int）\n• 使用时 *：*p 是「解引用」，按 p 里的地址去取值\n\n通过指针改值：*p = 20; 等价于 age = 20;\n\n这就是 scanf(\"%d\", &age) 的原理：scanf 拿到地址，把输入写进那个地址。",
     "code": "#include <stdio.h>\nint main() {\n    int age = 18;\n    int *p = &age;        // p 存 age 的地址\n    printf(\"p 存的值: %p\\n\", (void *)p);  // 和 &age 一样\n    printf(\"*p: %d\\n\", *p);   // 解引用：按地址取值 = 18\n    *p = 20;                  // 通过指针修改 age\n    printf(\"age: %d\\n\", age); // 20\n    return 0;\n}"
    },
    {
     "id": "3-3",
     "icon": "↔️",
     "title": "指针与数组：一家人",
     "type": "point",
     "text": "数组名 a 就是数组首元素（a[0]）的地址：\n\nint *p = a;  等价于  int *p = &a[0];\n\n指针可以「走」着访问数组：\n• *(p + i) 等价于 a[i]\n• p + i 就是第 i 个元素的地址（自动按元素大小跳）\n\n遍历写法：for (int i = 0; i < 5; i++) printf(\"%d \", *(p + i));\n\n记住：a[i] 本质就是 *(a + i)，数组和指针是互通的。",
     "code": "#include <stdio.h>\nint main() {\n    int a[] = {10, 20, 30, 40, 50};\n    int *p = a;               // 数组名 = 首元素地址\n    printf(\"*p = %d\\n\", *p);         // 10\n    printf(\"*(p+2) = %d\\n\", *(p + 2)); // 30，等价 a[2]\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", *(p + i));     // 指针遍历\n    }\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
     "id": "3-4",
     "icon": "✅",
     "title": "章节小测",
     "type": "quiz",
     "desc": "4 道小题检验本章，全对即完成本章",
     "quiz": [
      {
       "q": "&age 表示？",
       "options": ["age 的地址", "age 的值", "age 乘以 2", "一个指针变量"],
       "answer": 0,
       "explain": "& 是取地址符号，&age 得到 age 在内存里的地址。"
      },
      {
       "q": "int *p = &a; 之后 *p 表示？",
       "options": ["a 的值", "a 的地址", "p 的地址", "空值"],
       "answer": 0,
       "explain": "*p 是解引用：按 p 里存的地址去取值，就是 a 的值。"
      },
      {
       "q": "scanf(\"%d\", &n); 为什么 n 前面要加 &？",
       "options": [
        "scanf 需要知道把输入存到 n 的哪个地址",
        "不加会报语法错误",
        "为了好看",
        "& 是输入符号"
       ],
       "answer": 0,
       "explain": "scanf 拿到 &n（地址）后，把读到的值写进那个地址。printf 只是取值，所以不用 &。"
      },
      {
       "q": "int a[5]; int *p = a; 那么 *(p + 2) 等价于？",
       "options": ["a[2]", "a[3]", "*a + 2", "2 的地址"],
       "answer": 0,
       "explain": "p + 2 是第 2 个元素的地址，*(p+2) 解引用就是 a[2]。"
      }
     ]
    }
   ]
  },
  {
   "id": 4,
   "icon": "🧱",
   "title": "结构体",
   "desc": "把不同类型打包成一个整体：struct、->、typedef（链表节点的地基）",
   "modules": [
    {
     "id": "4-1",
     "icon": "🧱",
     "title": "定义结构体：打包数据",
     "type": "point",
     "text": "结构体把不同类型的数据打包成一个新类型：\n\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};   ← 别忘了分号\n\n声明变量：struct Student s1;（要写 struct 关键字）\n访问成员用点：s1.age = 18;\n\n结构体 = 自定义的「盒子组合」，一个变量能装多个不同类型的数据。",
     "code": "#include <stdio.h>\n#include <string.h>\nstruct Student {\n    char name[20];\n    int age;\n    double score;\n};\nint main() {\n    struct Student s1;\n    strcpy(s1.name, \"张三\");   // 字符串不能直接赋值，要 strcpy\n    s1.age = 18;\n    s1.score = 92.5;\n    printf(\"%s %d %.1f\\n\", s1.name, s1.age, s1.score);\n    return 0;\n}"
    },
    {
     "id": "4-2",
     "icon": "➡️",
     "title": "结构体指针：-> 箭头",
     "type": "point",
     "text": "指针也可以指向结构体：\n\nstruct Student *p = &s1;\n\n通过指针访问成员有两种写法：\n• (*p).name —— 先解引用再取成员（麻烦）\n• p->name —— 箭头，等价且常用（记住这个）\n\n用 -> 还可以修改：p->age = 21; 等价于 s1.age = 21;\n\n链表节点的访问全是用箭头：cur->next、cur->val。",
     "code": "#include <stdio.h>\nstruct Student {\n    char name[20];\n    int age;\n};\nint main() {\n    struct Student s1 = {\"李四\", 20};\n    struct Student *p = &s1;\n    printf(\"%s %d\\n\", (*p).name, (*p).age);  // 麻烦写法\n    printf(\"%s %d\\n\", p->name, p->age);      // 箭头，等价\n    p->age = 21;                               // 通过指针修改\n    printf(\"age: %d\\n\", s1.age);              // 21\n    return 0;\n}"
    },
    {
     "id": "4-3",
     "icon": "📋",
     "title": "typedef：起个短名字",
     "type": "point",
     "text": "每次写 struct Student 太啰嗦，typedef 可以起别名：\n\ntypedef struct Student {\n    char name[20];\n    int age;\n} Stu;              // Stu 是别名\n\n之后直接 Stu s; 就行，不用再写 struct。\n\n链表节点的经典定义：\n\ntypedef struct Node {\n    int val;\n    struct Node *next;   // 指向下一个节点\n} Node;\n\n注意：next 的类型必须是 struct Node *（完整写法），因为别名 Node 此时还没定义完。",
     "code": "#include <stdio.h>\ntypedef struct Student {\n    char name[20];\n    int age;\n} Stu;                     // Stu = struct Student 的别名\nint main() {\n    Stu s = {\"王五\", 19};   // 不用写 struct 了\n    printf(\"%s %d\\n\", s.name, s.age);\n    // 链表节点就是这么定义的：\n    // typedef struct Node { int val; struct Node *next; } Node;\n    return 0;\n}"
    },
    {
     "id": "4-4",
     "icon": "✅",
     "title": "章节小测",
     "type": "quiz",
     "desc": "4 道小题检验本章，全对即完成本章",
     "quiz": [
      {
       "q": "struct Student s1; 访问 s1 的 age 成员用？",
       "options": ["s1.age", "s1->age", "s1.age()", "age(s1)"],
       "answer": 0,
       "explain": "普通结构体变量用点 . 访问成员；只有结构体指针才用箭头 ->。"
      },
      {
       "q": "struct Student *p = &s1; 通过 p 访问 name 用？",
       "options": ["p->name", "p.name", "p::name", "*p.name"],
       "answer": 0,
       "explain": "结构体指针访问成员用箭头 ->，等价于 (*p).name。"
      },
      {
       "q": "typedef 的作用是？",
       "options": ["给类型起别名", "定义变量", "申请内存", "写注释"],
       "answer": 0,
       "explain": "typedef struct Student {...} Stu; 之后 Stu 就是 struct Student 的别名。"
      },
      {
       "q": "链表节点 typedef struct Node { int val; struct Node *next; } Node; 中 next 的类型是？",
       "options": ["指向下一个节点的指针", "整数", "下一个节点的值", "函数"],
       "answer": 0,
       "explain": "next 存的是下一个节点的地址（指针），所以类型是 struct Node *，而且必须写全称 struct Node（别名还没定义完）。"
      }
     ]
    }
   ]
  },
  {
   "id": 5,
   "icon": "🔁",
   "title": "函数与递归",
   "desc": "把代码打包复用：函数定义、递归、调用栈（树和排序算法全靠它）",
   "modules": [
    {
     "id": "5-1",
     "icon": "📞",
     "title": "函数：代码的积木",
     "type": "point",
     "text": "函数把一段代码打包，起个名字，随时调用：\n\n返回类型 函数名(参数) {\n    函数体\n    return 返回值;\n}\n\n• int add(int a, int b) —— 返回 int，两个 int 参数\n• void sayHi() —— void 表示不返回任何值\n• 调用：int sum = add(3, 5);\n• main 也是一个函数，程序从 main 开始执行\n\n好处：代码复用、逻辑清晰，比赛题几乎都是「写一个函数解决」。",
     "code": "#include <stdio.h>\n// 返回类型 函数名(参数) { 函数体 }\nint add(int a, int b) {\n    return a + b;\n}\nvoid sayHi() {              // void = 不返回值\n    printf(\"你好！\\n\");\n}\nint main() {\n    int sum = add(3, 5);     // 调用函数\n    printf(\"3+5=%d\\n\", sum);\n    sayHi();\n    return 0;\n}"
    },
    {
     "id": "5-2",
     "icon": "🪞",
     "title": "递归：函数自己调自己",
     "type": "point",
     "text": "递归就是函数调用自己，把大问题拆成同类型的小问题。\n\n阶乘：n! = n × (n-1)!，而 1! = 1\nint fact(int n) {\n    if (n <= 1) return 1;      // 终止条件（必须有！）\n    return n * fact(n - 1);    // 自己调自己\n}\n\nfact(4) = 4 * fact(3)\n        = 4 * 3 * fact(2)\n        = 4 * 3 * 2 * fact(1)\n        = 4 * 3 * 2 * 1 = 24\n\n⚠️ 没有终止条件的递归会无限循环直到栈溢出崩溃。",
     "code": "#include <stdio.h>\n// 阶乘: n! = n * (n-1)!\nint fact(int n) {\n    if (n <= 1) return 1;       // 终止条件（必须有！）\n    return n * fact(n - 1);     // 自己调自己\n}\nint main() {\n    printf(\"5! = %d\\n\", fact(5));  // 120\n    return 0;\n}"
    },
    {
     "id": "5-3",
     "icon": "🪜",
     "title": "调用栈：递归是怎么跑的",
     "type": "point",
     "text": "每次调用函数（包括递归），系统会把这次调用的信息压入「调用栈」，返回时再弹出来。栈是后进先出：最后调用的先返回。\n\n爬楼梯：一次爬 1 或 2 阶，到第 n 阶有几种方法？\nf(1)=1, f(2)=2, f(n)=f(n-1)+f(n-2)\n\nf(4) 的执行：\nf(4) → f(3) → f(2)=2 返回\n      → f(1)=1 返回，f(3)=2+1=3\n      → f(2)=2 返回，f(4)=3+2=5\n\n这就是树/图的 DFS、快排、归并的底层原理：递归 + 栈。",
     "code": "#include <stdio.h>\n// 爬楼梯：f(1)=1, f(2)=2, f(n)=f(n-1)+f(n-2)\nint climb(int n) {\n    if (n <= 2) return n;       // 终止条件\n    return climb(n - 1) + climb(n - 2);\n}\nint main() {\n    printf(\"5阶: %d\\n\", climb(5));   // 8\n    return 0;\n}\n// 过程（n=4）：\n// climb(4) = climb(3) + climb(2)\n//          = (climb(2)+climb(1)) + 2\n//          = (2+1) + 2 = 5"
    },
    {
     "id": "5-4",
     "icon": "✅",
     "title": "章节小测",
     "type": "quiz",
     "desc": "4 道小题检验本章，全对即完成本章",
     "quiz": [
      {
       "q": "int add(int a, int b) { return a + b; } 调用 add(2, 3) 返回？",
       "options": ["5", "23", "6", "报错"],
       "answer": 0,
       "explain": "a=2、b=3，return a+b 返回 5。"
      },
      {
       "q": "递归函数必须有什么？",
       "options": ["终止条件", "for 循环", "指针参数", "全局变量"],
       "answer": 0,
       "explain": "没有终止条件会无限递归，直到栈溢出崩溃。"
      },
      {
       "q": "fact(n) = n * fact(n-1)，fact(1)=1，那么 fact(3) 等于？",
       "options": ["6", "3", "9", "1"],
       "answer": 0,
       "explain": "fact(3) = 3×fact(2) = 3×2×fact(1) = 3×2×1 = 6。"
      },
      {
       "q": "爬楼梯 f(1)=1, f(2)=2, f(n)=f(n-1)+f(n-2)，f(5) = ?",
       "options": ["8", "5", "13", "6"],
       "answer": 0,
       "explain": "f(3)=3, f(4)=5, f(5)=8。这就是斐波那契数列。"
      }
     ]
    }
   ]
  },
  {
   "id": 6,
   "icon": "🗄️",
   "title": "内存与 malloc",
   "desc": "栈区/堆区、malloc/free、动态分配（链表/树的真正基础）",
   "modules": [
    {
     "id": "6-1",
     "icon": "🗄️",
     "title": "栈区 vs 堆区",
     "type": "point",
     "text": "程序运行时内存分区域，最重要的是两块：\n\n• 栈区（小、快、自动管理）：函数里的局部变量在这。函数一结束自动释放。\n• 堆区（大、手动管理）：用 malloc 申请的内存在这。不会自动释放，要手动 free。\n\n为什么链表要用堆？因为链表长度不确定、节点要「活」到函数结束之后——局部变量数组一离开函数就没了，malloc 的节点只要不 free 就一直在。",
     "code": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int a = 10;   // 栈区：局部变量，自动管理\n    int *p = (int *)malloc(sizeof(int));  // 堆区：手动申请\n    if (p == NULL) return 1;              // 申请失败检查\n    *p = 99;\n    printf(\"栈区 a = %d\\n\", a);\n    printf(\"堆区 *p = %d\\n\", *p);\n    free(p);      // 用完释放\n    return 0;\n}"
    },
    {
     "id": "6-2",
     "icon": "🧰",
     "title": "malloc / free：申请与释放",
     "type": "point",
     "text": "malloc 在堆区申请一块内存，返回地址：\n\nint *arr = (int *)malloc(n * sizeof(int));\n—— 申请能放 n 个 int 的空间\n\n配套规则：\n• 要判断返回值：arr == NULL 说明申请失败\n• 用完必须 free(arr)，否则内存泄漏\n• free 之后最好把指针置 NULL，防止「野指针」\n• 申请多少用多少，别越界\n\n动态数组的好处：大小由输入决定，不用写死。",
     "code": "#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n = 5;\n    int *arr = (int *)malloc(n * sizeof(int));  // 动态数组\n    if (arr == NULL) return 1;                  // 申请失败检查\n    for (int i = 0; i < n; i++) arr[i] = i * 10;\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n    free(arr);          // 释放，防止内存泄漏\n    arr = NULL;         // 置空，防止野指针\n    return 0;\n}"
    },
    {
     "id": "6-3",
     "icon": "🏗️",
     "title": "malloc 建链表节点",
     "type": "point",
     "text": "链表节点要「活」到函数外，所以必须用 malloc 创建：\n\nNode *newNode(int val) {\n    Node *p = (Node *)malloc(sizeof(Node));\n    p->val = val;\n    p->next = NULL;\n    return p;\n}\n\n创建链表：\nNode *head = newNode(10);\nhead->next = newNode(20);   // 20 挂在 10 后面\n\n每个节点都是独立 malloc 出来的，用 next 串起来。\n\n⚠️ 用完记得释放整条链（逐个 free），只 free head 会泄漏其余节点。",
     "code": "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node {\n    int val;\n    struct Node *next;\n} Node;\nNode *newNode(int val) {\n    Node *p = (Node *)malloc(sizeof(Node));\n    p->val = val;\n    p->next = NULL;\n    return p;\n}\nint main() {\n    Node *head = newNode(10);\n    head->next = newNode(20);\n    head->next->next = newNode(30);\n    for (Node *cur = head; cur != NULL; cur = cur->next) {\n        printf(\"%d \", cur->val);\n    }\n    printf(\"\\n\");\n    return 0;\n}"
    },
    {
     "id": "6-4",
     "icon": "✅",
     "title": "章节小测",
     "type": "quiz",
     "desc": "4 道小题检验本章，全对即完成本章",
     "quiz": [
      {
       "q": "malloc 申请的内存在哪个区域？",
       "options": ["堆区", "栈区", "全局区", "寄存器"],
       "answer": 0,
       "explain": "malloc 在堆区申请内存，需要手动 free 释放；局部变量在栈区，自动释放。"
      },
      {
       "q": "用完 malloc 的内存后要做什么？",
       "options": ["free 释放", "delete 删除", "不用管", "close 关闭"],
       "answer": 0,
       "explain": "C 里释放用 free()；delete 是 C++ 的关键字。不 free 会内存泄漏。"
      },
      {
       "q": "free(p) 之后最好把 p 置为？",
       "options": ["NULL", "0 的地址", "随便一个数", "不用处理"],
       "answer": 0,
       "explain": "free 后指针变成野指针，置 NULL 可以防止误用。"
      },
      {
       "q": "链表节点为什么要用 malloc 创建？",
       "options": [
        "节点数量不确定，且要活到函数结束之后",
        "代码好看",
        "malloc 更快",
        "不用 malloc 会报语法错误"
       ],
       "answer": 0,
       "explain": "链表长度动态变化，每个节点独立分配在堆上，不 free 就一直存在；局部数组函数一结束就没了。"
      }
     ]
    }
   ]
  }
 ]
};
