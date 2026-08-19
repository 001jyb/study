var dsChapters = [
 {
  "id": 1,
  "title": "数组与字符串",
  "icon": "📦",
  "desc": "最基础的数据结构：连续内存存储，下标访问。字符串是字符数组的封装。",
  "learn": [
   "数组的创建与访问",
   "数组插入/删除的代价",
   "字符串常用 API"
  ],
  "anim": {
   "title": "数组是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "创建一个数组，长度 5，下标从 0 开始",
     "arr": [
      10,
      20,
      30,
      40,
      50
     ],
     "detail": "创建一个长度 5 的数组，里面放了 10, 20, 30, 40, 50。注意下标从 0 开始：10 在 [0] 号位，50 在 [4] 号位。数组在内存里是连续的一排格子。"
    },
    {
     "op": "access",
     "index": 2,
     "desc": "访问 arr[2]，直接定位到下标 2，时间复杂度 O(1)",
     "detail": "访问 arr[2]：计算机知道数组的起始位置，直接算出'起始位置 + 2'就是 30 的位置，一步定位。不管数组有 100 个还是 10000 个元素，按下标访问都是这个速度，所以是 O(1)。",
     "arr": [
      10,
      20,
      30,
      40,
      50
     ],
     "hl": 2
    },
    {
     "op": "append",
     "value": 60,
     "desc": "尾部追加 60：直接在最后一位写入，很方便",
     "detail": "尾部追加 60：数组末尾后面如果还有空位，直接写进去就行，很轻松，也是 O(1)。注意：如果数组满了（长度固定），就得先新建一个更大的数组把所有元素拷过去，那时就不是 O(1) 了。",
     "arr": [
      10,
      20,
      30,
      40,
      50,
      60
     ],
     "hl": 5,
     "color": "#22c55e"
    },
    {
     "op": "insert",
     "index": 1,
     "value": 15,
     "desc": "在下标 1 插入 15：后面的 20、30、40、50、60 全部要后移一格，O(n)",
     "detail": "在下标 1 插入 15：15 要占 1 号位，所以原来在 1 号位的 20 必须让位——20、30、40、50、60 全部往后挪一格。挪动的元素越多，花费时间越长，所以是 O(n)。这就是数组'插入慢'的原因。",
     "arr": [
      10,
      15,
      20,
      30,
      40,
      50,
      60
     ],
     "hl": 1,
     "color": "#ef4444"
    },
    {
     "op": "delete",
     "index": 3,
     "desc": "删除下标 3 的元素：后面的元素全部前移一格，O(n)",
     "detail": "删除下标 3 的元素（40）：40 被拿走之后，它后面的 50、60 要往前补位，把空位填上。同样要移动多个元素，所以删除中间元素也是 O(n)。",
     "arr": [
      10,
      15,
      30,
      40,
      50,
      60
     ],
     "hl": 2,
     "color": "#a855f7"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：数组操作",
   "desc": "点按钮操作数组，观察每一步发生了什么",
   "init": [
    5,
    8,
    12
   ],
   "ops": [
    {
     "id": "append",
     "label": "尾部追加 7",
     "act": "append",
     "value": 7,
     "explain": "尾部追加 7：直接把 7 放到数组最后一个位置后面。因为是往末尾加，前面的元素完全不用动，所以很快（O(1)）。"
    },
    {
     "id": "insert0",
     "label": "在下标1插入 99",
     "act": "insert",
     "index": 1,
     "value": 99,
     "explain": "在下标 1 插入 99：99 要占下标 1 的位置，所以原来下标 1 及之后的所有元素（8、12）都要往后挪一位，给 99 腾地方。注意观察：被挪动的元素数量 = 插入位置后面的元素个数，元素越多越慢。"
    },
    {
     "id": "del0",
     "label": "删除下标2",
     "act": "delete",
     "index": 2,
     "explain": "删除下标 2 的元素（12）：12 被删掉后，它后面出现一个空位，所以后面的 7 要往前挪一位填上。删除中间元素同样要移动后面的元素，所以是 O(n)。"
    },
    {
     "id": "find",
     "label": "查找 12 的位置",
     "act": "find",
     "value": 12,
     "explain": "查找 12 的位置：数组没有'按值直接定位'的能力，只能从下标 0 开始一个一个比：5?不是。8?不是。12?是！找到了，在下标 2。最坏情况要比较完所有元素，所以按值查找是 O(n)。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "数组基本操作",
     "code": "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // 创建数组\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5;\n    // 访问：O(1)\n    printf(\"arr[2] = %d\\n\", arr[2]);\n    // 遍历\n    for (int i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n    // 尾部追加需要扩容（新建更大的数组）\n    int bigger[6];\n    memcpy(bigger, arr, sizeof(arr));  // 拷贝旧元素\n    bigger[n] = 60;                    // 追加 60\n    n = 6;\n    printf(\"追加后长度: %d\\n\", n);\n    return 0;\n}",
     "notes": "逐段讲解：\n① 创建数组：int arr[] = {10,20,30,40,50}; 一次性初始化 5 个元素，数组大小由编译器算好。\n② 访问 arr[2]：直接按下标取，输出 30，这就是 O(1) 访问。\n③ 遍历：for 循环从 0 到 n-1 逐个输出。C 数组没有 arr.length 这种属性，长度要自己用一个变量（n）记着。\n④ 尾部追加：数组长度固定，'追加'只能新建一个更大的数组，用 memcpy 把旧元素拷过去，再把 60 放到最后。这一步要复制全部元素，所以是 O(n)。\n\n记忆点：数组按下标访问 O(1)，插入/删除/按值查找 O(n)；C 数组长度要自己维护。"
    },
    {
     "name": "字符串常用操作",
     "code": "#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nint main() {\n    char s[] = \"hello\";\n    // 长度（不含结尾的 \\0）\n    printf(\"长度: %zu\\n\", strlen(s));          // 5\n    // 按下标取字符\n    printf(\"下标1: %c\\n\", s[1]);               // e\n    // 子串（拷到临时数组）\n    char sub[3] = {0};\n    strncpy(sub, s + 1, 2);                    // \"el\"\n    printf(\"子串: %s\\n\", sub);\n    // 转大写（逐个字符处理）\n    for (int i = 0; i < (int)strlen(s); i++) {\n        putchar(toupper(s[i]));\n    }\n    printf(\"\\n\");\n    // 拼接\n    char buf[32];\n    snprintf(buf, sizeof(buf), \"%s world\", s);\n    printf(\"拼接: %s\\n\", buf);\n    // 反转\n    for (int i = strlen(s) - 1; i >= 0; i--) {\n        putchar(s[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
     "notes": "逐段讲解：\n① strlen(s)：获取字符串长度（不含结尾的 '\\0'）。C 字符串本质是 char 数组，以 '\\0' 结尾。\n② s[1]：按下标取字符，'hello' 的下标 1 是 'e'。C 字符串就是数组，直接按下标访问。\n③ 子串：strncpy(sub, s+1, 2) 从下标 1 开始拷 2 个字符得到 \"el\"。子串要自己开数组存，并保证有 '\\0' 结尾（{0} 初始化）。\n④ 转大写：toupper 来自 ctype.h，C 没有 toUpperCase() 方法，要循环处理每个字符。\n⑤ 拼接：snprintf 或 strcat 拼字符串。注意目标数组必须够大，否则越界——这是 C 里最常见的坑。\n\n记忆点：strlen 求长度、下标取字符、strncpy 取子串、toupper 转大写；C 字符串以 '\\0' 结尾，拼接要保证数组够大。"
    }
   ]
  },
  "quiz": [
   {
    "q": "数组的下标从几开始？",
    "options": [
     "0",
     "1",
     "任意值",
     "取决于数组类型"
    ],
    "answer": 0,
    "explain": "C 数组下标从 0 开始，第一个元素是 arr[0]"
   },
   {
    "q": "长度为 n 的数组，最后一个元素的下标是？",
    "options": [
     "n",
     "n-1",
     "n+1",
     "1"
    ],
    "answer": 1,
    "explain": "下标从 0 开始，所以最后一个元素是 arr[n-1]"
   },
   {
    "q": "在下标 i 处插入元素，需要移动多少个元素？",
    "options": [
     "1 个",
     "i 个",
     "i 及之后的所有元素",
     "不需要移动"
    ],
    "answer": 2,
    "explain": "插入后，下标 i 及之后的所有元素都要后移一位，时间复杂度 O(n)"
   },
   {
    "q": "下列哪种操作对数组来说是 O(1) 的？",
    "options": [
     "按下标访问",
     "中间插入",
     "删除中间元素",
     "查找某个值"
    ],
    "answer": 0,
    "explain": "按下标访问是直接定位，O(1)；插入/删除要移动元素，查找要遍历，都是 O(n)"
   },
   {
    "q": "char s[] = \"hello\"; s[1] 的结果是？",
    "options": [
     "h",
     "e",
     "l",
     "o"
    ],
    "answer": 1,
    "explain": "s[1] 返回下标 1 的字符，hello 的下标 1 是 'e'"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "数组按下标访问的时间复杂度是？",
    "options": [
     "O(1)",
     "O(n)",
     "O(logn)",
     "O(n²)"
    ],
    "answer": 0
   },
   {
    "day": 3,
    "q": "C 里用 strcat 反复拼接字符串要注意什么？",
    "options": [
     "目标数组要够大，防止越界",
     "会自动扩容",
     "不需要 '\\0' 结尾",
     "没有限制"
    ],
    "answer": 0
   },
   {
    "day": 7,
    "q": "删除数组下标 i 的元素后，需要？",
    "options": [
     "后面元素前移",
     "前面元素后移",
     "重建整个数组",
     "什么都不用做"
    ],
    "answer": 0
   }
  ],
  "intro": {
   "what": "数组是什么？",
   "text": "数组就像一排编号的储物柜，每个柜子里放一个数据。柜子的编号（下标）从 0 开始：第一个柜子是 0 号，第二个是 1 号……",
   "why": "为什么按下标访问很快？因为柜子是挨着排的，你知道 0 号柜在哪，2 号柜就是往后数 2 个位置，直接走过去就能开柜子——不需要一个个找。这就是 O(1)（常数时间）的含义：不管柜子有多少个，按下标取都是'一步到位'。",
   "pain": "数组的缺点：储物柜是固定一排的，如果你想在 3 号柜和 4 号柜之间再塞一个柜子，必须把 4 号以后的所有柜子都往后搬一格，才能腾出位置。柜子越多，搬的越多——这就是插入 O(n) 的原因。"
  }
 },
 {
  "id": 2,
  "title": "链表",
  "icon": "🔗",
  "desc": "节点+指针，插入删除快，访问慢。",
  "intro": {
   "what": "链表是什么？",
   "text": "链表就像一列火车：每节车厢（节点）里装着数据，还有一根钩子（指针）勾住下一节车厢。车厢们不用挨在一起，想加一节车厢，只要把钩子重新接一下就行。",
   "why": "为什么插入删除快？想在车厢中间加一节，只需要把前面车厢的钩子改指向新车厢，新车厢勾住后面那节——其他车厢完全不用动，改两个钩子就行（O(1)）。",
   "pain": "缺点：想找第 5 节车厢，必须从车头一节一节数过去，不能像数组那样'直接跳过去'。所以按下标访问很慢（O(n)），而数组是 O(1)。"
  },
  "anim": {
   "title": "链表是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "创建一个单链表：每个节点有 数据 + 指向下一个节点的指针",
     "detail": "链表由节点组成。每个节点两个部分：value（存数据）和 next（指向下一个节点的指针）。最后一个节点的 next 指向 null（空），表示链表结束。",
     "show": "head → [10] → [20] → [30] → null"
    },
    {
     "op": "access",
     "desc": "访问第3个节点（值30）：只能从头节点开始，顺着指针一个一个走",
     "detail": "链表没有下标！想找第 3 个节点，必须从 head（头节点）出发：head→第2个→第3个，走 2 步才到。节点越多，走得越久，所以访问是 O(n)。数组按下标直接跳，链表只能挨个走，这是它们最大的区别。",
     "show": "head → [10] → [20] → ⭐[30]⭐ → null\n（从head走2步才到第3个节点，O(n)）"
    },
    {
     "op": "insert",
     "desc": "在15和30之间插入25：只改两个指针，其他节点不动",
     "detail": "插入节点 25：① 25 的 next 指向 30；② 15 的 next 改成指向 25。只需要改这两个指针，其他节点完全不用动！所以链表插入是 O(1)——对比数组插入要移动后面所有元素（O(n)），这是链表最大的优势。",
     "show": "head → [10] → [15] → ⭐[25]⭐ → [30] → null\n（只改两个指针：15指向25，25指向30）"
    },
    {
     "op": "delete",
     "desc": "删除30：让15直接指向40，30被跳过",
     "detail": "删除节点 30：把 15 的 next 直接改成指向 40，30 就被'跳过'了，相当于从链上摘下来。同样只改一个指针，O(1)。被跳过的节点会被垃圾回收。注意：虽然找到 15 需要 O(n)，但已知位置时删除本身就是 O(1)。",
     "show": "head → [10] → [15] → [30] → null\n（15的next直接指向30，25被跳过）"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：链表操作",
   "desc": "用三个节点模拟链表，点按钮观察指针怎么改",
   "init": [
    "A→B→C"
   ],
   "ops": [
    {
     "id": "show",
     "label": "查看当前链表",
     "act": "show",
     "explain": "当前链表：A → B → C。箭头就是 next 指针，从 A 开始顺着箭头走：A→B→C→null。"
    },
    {
     "id": "ins",
     "label": "在A和B之间插入X",
     "act": "insert",
     "explain": "插入 X：① X.next 指向 B（X 勾住 B）；② A.next 改指向 X（A 改勾 X）。A 和 B 之间就多了 X。其他节点没动！这就是链表插入快的秘密——只改两个指针。"
    },
    {
     "id": "del",
     "label": "删除B",
     "act": "delete",
     "explain": "删除 B：把 A（或 X）的 next 直接指向 C，B 就被跳过了。只改一个指针，B 从链上摘下来。删除同样很快。"
    },
    {
     "id": "find",
     "label": "查找C",
     "act": "find",
     "explain": "查找 C：从头开始顺着指针走：A→X→B→C，走了 3 步才找到。链表查找只能挨个走，所以是 O(n)——这就是链表'访问慢'的代价。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "单链表的节点与操作",
     "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int val;\n    struct Node *next;   // 指向下一个节点\n} Node;\n\nNode *newNode(int val) {\n    Node *p = (Node *)malloc(sizeof(Node));\n    p->val = val;\n    p->next = NULL;\n    return p;\n}\n\nint main() {\n    // 创建链表: 10 -> 20 -> 30\n    Node *head = newNode(10);\n    head->next = newNode(20);\n    head->next->next = newNode(30);\n    // 遍历: 从 head 顺着 next 走\n    for (Node *cur = head; cur != NULL; cur = cur->next) {\n        printf(\"%d \", cur->val);\n    }\n    printf(\"\\n\");\n    // 在 20 后面插入 25（只改两个指针）\n    Node *n25 = newNode(25);\n    n25->next = head->next->next;  // 25 指向 30\n    head->next->next = n25;        // 20 指向 25\n    // 删除 25：20 直接指向 30\n    Node *tmp = head->next->next;  // 先存住 25，方便 free\n    head->next->next = head->next->next->next;\n    free(tmp);\n    return 0;\n}",
     "notes": "逐段讲解：\n① Node 结构体：val 存数据，next 存下一个节点的指针。newNode 用 malloc 申请内存，并把 next 初始化为 NULL。\n② 创建链表：head->next = newNode(20) 让 10 指向 20；head->next->next = newNode(30) 让 20 指向 30。\n③ 遍历：cur 从 head 开始，每次输出 cur->val 然后 cur = cur->next 走到下一个，直到 NULL。\n④ 插入 25：n25->next = head->next->next（25 勾住 30），head->next->next = n25（20 改勾 25）。只改两个指针！\n⑤ 删除 25：head->next->next = head->next->next->next（20 直接勾 30，25 被跳过），C 里被删的节点要手动 free 释放内存。\n\n记忆点：链表插入/删除 O(1)（只改指针），访问/查找 O(n)（要挨个走）；数组正好相反。malloc 的节点用完要 free。"
    }
   ]
  },
  "quiz": [
   {
    "q": "链表相比数组最大的优势是什么？",
    "options": [
     "按下标访问快",
     "插入和删除快",
     "占用内存少",
     "查找快"
    ],
    "answer": 1,
    "explain": "链表插入/删除只需要改指针，O(1)；数组要移动元素，O(n)"
   },
   {
    "q": "链表查找某个元素的时间复杂度是？",
    "options": [
     "O(1)",
     "O(n)",
     "O(logn)",
     "O(n²)"
    ],
    "answer": 1,
    "explain": "链表没有下标，只能从头挨个走，最坏要走完所有节点，O(n)"
   },
   {
    "q": "单链表每个节点至少包含哪两部分？",
    "options": [
     "数据和下标",
     "数据和指针",
     "指针和下标",
     "两个指针"
    ],
    "answer": 1,
    "explain": "每个节点 = 数据（val）+ 指向下一个节点的指针（next）"
   },
   {
    "q": "在已知位置的单链表中删除节点，主要操作是？",
    "options": [
     "移动后面的所有节点",
     "把前一个节点的指针指向下一个",
     "重建整个链表",
     "复制所有数据"
    ],
    "answer": 1,
    "explain": "删除 = 让前一个节点的 next 跳过被删节点，只改一个指针"
   },
   {
    "q": "链表最后一个节点的 next 指向？",
    "options": [
     "头节点",
     "null",
     "自己",
     "下标0"
    ],
    "answer": 1,
    "explain": "链表末尾的 next 指向 null，表示链表结束"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "链表插入为什么比数组快？",
    "options": [
     "链表内存连续",
     "只改指针不用移动元素",
     "链表更短",
     "插入不需要遍历"
    ],
    "answer": 1
   },
   {
    "day": 3,
    "q": "链表按下标访问第n个节点需要？",
    "options": [
     "直接跳过去O(1)",
     "从头走到第n个O(n)",
     "二分查找O(logn)",
     "不需要访问"
    ],
    "answer": 1
   },
   {
    "day": 7,
    "q": "链表适合什么场景？",
    "options": [
     "频繁按下标访问",
     "频繁插入删除",
     "数据量极小",
     "需要随机访问"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 3,
  "title": "栈与队列",
  "icon": "🥞",
  "desc": "后进先出与先进先出，最常用的两种结构。",
  "intro": {
   "what": "栈和队列是什么？",
   "text": "栈（Stack）像叠盘子：后放的盘子在最上面，先拿的也是它——后进先出（LIFO）。队列（Queue）像排队打饭：先来的人先打到饭——先进先出（FIFO）。",
   "why": "为什么用它们？因为现实里很多场景天然是这两种顺序：浏览器的'后退'按钮就是栈（最后访问的页面先返回），打印店的'排队打印'就是队列（先来的任务先执行）。计算机用这两种结构模拟这些'顺序规则'。"
  },
  "anim": {
   "title": "栈和队列是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "栈：push(5)、push(8)、push(3)，盘子越叠越高",
     "detail": "栈只有两个操作：push（入栈，把元素放最上面）和 pop（出栈，把最上面的拿走）。现在依次 push 5、8、3，栈顶是最后进来的 3。",
     "show": "栈底 [5, 8, 3] 栈顶\n（依次push 5、8、3，3最后进在最上面）"
    },
    {
     "op": "pop",
     "desc": "pop()：拿走栈顶的3，后进先出",
     "detail": "pop 永远拿最上面的元素。现在栈顶是 3（最后进来的），所以 pop 拿 3。这就是'后进先出'：最后放进去的最先出来。浏览器后退按钮、函数调用都用这个机制。",
     "show": "栈底 [5, 8] 栈顶\n（pop拿走了栈顶的3，后进先出）"
    },
    {
     "op": "queue",
     "desc": "队列：enqueue A、B、C，从队尾排队",
     "detail": "队列操作：enqueue（入队，从队尾加入）和 dequeue（出队，从队头离开）。A、B、C 依次入队，队头是 A。",
     "show": "队头 [A, B, C] 队尾\n（enqueue A、B、C，A最先来在队头）"
    },
    {
     "op": "dequeue",
     "desc": "dequeue()：队头A先离开，先进先出",
     "detail": "dequeue 永远让队头（最先进来的）先走。A 先离开，然后是 B、C。这就是'先进先出'，和排队一模一样。打印任务、消息队列都是这么工作的。",
     "show": "队头 [B, C] 队尾\n（dequeue让A先离开，先进先出）"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：栈操作",
   "desc": "点按钮入栈出栈，观察栈顶变化",
   "init": [
    "栈顶| 3 | 8 | 5 |栈底"
   ],
   "ops": [
    {
     "id": "push",
     "label": "push 9",
     "act": "push",
     "explain": "push 9：9 放到栈顶，现在栈顶是 9。栈永远在'最上面'操作，就像往盘子堆上放一个新盘子。"
    },
    {
     "id": "pop",
     "label": "pop",
     "act": "pop",
     "explain": "pop：拿走栈顶元素。后进先出——最后放进去的 9 最先被拿走。你只能拿最上面的，不能从中间抽。"
    },
    {
     "id": "peek",
     "label": "peek 看栈顶",
     "act": "peek",
     "explain": "peek：只看不拿，返回栈顶元素但不删除。常用于'先看看最上面是什么再决定'。"
    },
    {
     "id": "empty",
     "label": "判断是否为空",
     "act": "empty",
     "explain": "空栈：当所有元素都被 pop 走后，栈为空。判断空栈很重要，空栈 pop 会报错（下溢）。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "栈：数组实现",
     "code": "#include <stdio.h>\n#define MAX 100\n\nint stack[MAX];\nint top = -1;              // top 指向栈顶，-1 表示空栈\n\nvoid push(int x) { stack[++top] = x; }  // 入栈\nint pop(void) { return stack[top--]; }  // 出栈\nint peek(void) { return stack[top]; }   // 看栈顶\nint isEmpty(void) { return top == -1; } // 判空\n\nint main() {\n    push(5);    // 入栈\n    push(8);\n    push(3);\n    printf(\"栈顶: %d\\n\", peek());      // 3\n    int t = pop();                     // 出栈\n    printf(\"弹出: %d\\n\", t);          // 3\n    printf(\"栈是否空: %d\\n\", isEmpty());  // 0 (假)\n    return 0;\n}",
     "notes": "逐段讲解：\n① C 里没有现成的栈，最常用数组模拟：top 记录栈顶下标，-1 表示空栈。\n② push(5)、push(8)、push(3)：3 最后进去，在栈顶。\n③ peek() 返回 3（只看不拿）。\n④ pop() 拿走 3（后进先出）。\n⑤ 空栈 pop 会越界，所以先 isEmpty() 判断；数组栈还要注意 top 到 MAX 就满了。\n\n记忆点：栈 = 后进先出（LIFO），数组模拟：push/pop/peek，top=-1 空栈；浏览器后退、函数调用都用栈。"
    },
    {
     "name": "队列：数组实现",
     "code": "#include <stdio.h>\n#define MAX 100\n\nint queue[MAX];\nint head = 0, tail = 0;   // head 队头，tail 下一个写入位置\n\nvoid enqueue(int x) { queue[tail++] = x; }  // 入队\nint dequeue(void) { return queue[head++]; } // 出队\nint front(void) { return queue[head]; }     // 看队头\nint size(void) { return tail - head; }      // 长度\n\nint main() {\n    enqueue(10);   // 入队\n    enqueue(20);\n    enqueue(30);\n    printf(\"队头: %d\\n\", front());      // 10\n    int first = dequeue();               // 出队\n    printf(\"出队: %d\\n\", first);        // 10\n    printf(\"队列长度: %d\\n\", size());   // 2\n    return 0;\n}",
     "notes": "逐段讲解：\n① C 里队列也常用数组模拟：head 指向队头，tail 指向下一个写入位置，[head, tail) 就是队列内容。\n② 入队 10、20、30：10 先进来，在队头。\n③ front() 返回 10（队头是最先来的）。\n④ dequeue() 让 10 先离开（先进先出），head 往后移一位。\n⑤ 剩下 20、30，长度 = tail - head = 2。注意：head 只往后移，数组前面的空间就浪费了，工业级一般用循环队列（取模）复用空间。\n\n记忆点：队列 = 先进先出（FIFO），数组模拟：head/tail 双指针，入队 tail++、出队 head++；排队打印、消息队列都用队列。"
    }
   ]
  },
  "quiz": [
   {
    "q": "栈的特点是？",
    "options": [
     "先进先出",
     "后进先出",
     "随机访问",
     "按值排序"
    ],
    "answer": 1,
    "explain": "栈是后进先出（LIFO）：最后放进去的元素最先被拿走"
   },
   {
    "q": "队列的特点是？",
    "options": [
     "后进先出",
     "先进先出",
     "只能从中间取",
     "没有顺序"
    ],
    "answer": 1,
    "explain": "队列是先进先出（FIFO）：先来的先处理，像排队"
   },
   {
    "q": "浏览器的'后退'按钮最适合用什么结构？",
    "options": [
     "队列",
     "栈",
     "数组",
     "哈希表"
    ],
    "answer": 1,
    "explain": "后退 = 回到最近访问的页面，最后访问的先返回，正是栈的特性"
   },
   {
    "q": "在栈中，push(1) push(2) 后 pop() 的结果是？",
    "options": [
     "1",
     "2",
     "报错",
     "随机"
    ],
    "answer": 1,
    "explain": "2 最后入栈在栈顶，pop 先拿栈顶的 2"
   },
   {
    "q": "打印店的任务队列应该用？",
    "options": [
     "栈",
     "队列",
     "链表+随机",
     "树"
    ],
    "answer": 1,
    "explain": "打印任务先来先打印，先进先出，用队列"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "栈的英文和核心特性？",
    "options": [
     "Queue 先进先出",
     "Stack 后进先出",
     "Stack 先进先出",
     "Queue 后进先出"
    ],
    "answer": 1
   },
   {
    "day": 3,
    "q": "队列的入队出队操作分别叫？",
    "options": [
     "push/pop",
     "offer/poll",
     "add/remove 都行",
     "put/get"
    ],
    "answer": 1
   },
   {
    "day": 7,
    "q": "函数调用（递归）的调用过程用什么结构管理？",
    "options": [
     "队列",
     "栈",
     "数组",
     "链表"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 4,
  "title": "哈希表",
  "icon": "🗺️",
  "desc": "哈希表/哈希集合，O(1) 查找的神器。",
  "intro": {
   "what": "哈希表是什么？",
   "text": "哈希表就像查字典：你不用从第一页翻起，而是按拼音/部首直接翻到那一页。哈希表用'哈希函数'把数据换算成一个位置，存的时候按位置放，找的时候按位置拿，一步到位。",
   "why": "为什么 O(1)？数组按下标访问是 O(1)，哈希表就是把'数据本身'变成'下标'：哈希函数算出位置，直接去那个位置取。不管存了多少数据，都是'算出位置→直接取'两步，所以是 O(1)。",
   "pain": "冲突问题：两个不同数据可能算出同一个位置（就像两个人查字典翻到同一页）。解决方法是'链地址法'：同一个位置挂一个链表。极端情况下所有数据挤到一个位置，就退化成链表 O(n)——所以好的哈希函数很重要。"
  },
  "anim": {
   "title": "哈希表是怎么工作的？",
   "steps": [
    {
     "op": "put",
     "desc": "插入 apple→5：哈希函数算出位置1，存进去",
     "detail": "存数据：key 是 apple，哈希函数把 apple 换算成下标 1（实际是哈希函数取模），然后把 value 5 存到位置 1。key 相当于'标签'，value 是'内容'。",
     "show": "位置: [0][1:apple→5][2][3][4]\n（哈希函数把apple算到位置1，存入5）"
    },
    {
     "op": "get",
     "desc": "查找 apple：同样算出位置1，直接取到5",
     "detail": "查数据：对 apple 再算一次哈希函数，得到同样的位置 1，直接去那里拿，得到 5。整个过程不依赖数据量大小，所以是 O(1)。这就是'查字典'的感觉——按拼音直接翻页。",
     "show": "位置: [0][1:apple→5][2][3][4]\n（查apple算出位置1，直接取到5，O(1)）"
    },
    {
     "op": "conflict",
     "desc": "插入 banana→8：也算到位置1，冲突了！",
     "detail": "问题来了：banana 的哈希结果也是 1，和 apple 撞车了（哈希冲突）。解决办法：位置 1 挂一个链表，apple 和 banana 都挂在上面。查找时先到位置 1，再在链表里逐个找。",
     "show": "位置1: apple→5 → banana→8\n（banana也算到位置1，挂在apple后面的链表里）"
    },
    {
     "op": "get2",
     "desc": "查找 banana：位置1的链表里找到banana，得8",
     "detail": "查 banana：算出位置 1，发现这里挂了个链表，在链表里找到 banana，得到 8。如果链表很短，查找依然很快；如果链表很长（很多冲突），就会变慢。所以哈希函数和桶的数量要设计好。",
     "show": "位置1链表: apple→5 → ⭐banana→8⭐\n（查banana在位置1的链表里找到banana，得8）"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：哈希表操作",
   "desc": "模拟 put 和 get，观察哈希函数和冲突",
   "init": [
    "空表：位置0-4"
   ],
   "ops": [
    {
     "id": "put1",
     "label": "插入 a→1",
     "act": "put",
     "explain": "插入 a→1：哈希函数算出 a 的位置（比如 2），把 1 存到位置 2。key 是 a，value 是 1。"
    },
    {
     "id": "put2",
     "label": "插入 b→2",
     "act": "put",
     "explain": "插入 b→2：b 算出位置 4，存到位置 4。不同的 key 算出不同位置时，各存各的，互不干扰。"
    },
    {
     "id": "get",
     "label": "查找 a",
     "act": "get",
     "explain": "查找 a：对 a 再算一次哈希，得到位置 2，直接取到 1。这就是 O(1) 查找——不用遍历所有数据！"
    },
    {
     "id": "conf",
     "label": "插入 c 冲突",
     "act": "conflict",
     "explain": "冲突：c 也算到位置 2！和 a 撞车。位置 2 挂一个链表，a 和 c 都挂在上面。之后查 c 要先到位置 2，再在链表里找 c。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "哈希表：链地址法实现",
     "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define SIZE 5   // 桶的数量\n\ntypedef struct KV {      // 键值对节点（挂在桶的链表上）\n    char *key;\n    int value;\n    struct KV *next;\n} KV;\n\nKV *table[SIZE];         // 桶数组\n\nint hash(char *key) {    // 简单哈希函数：ASCII 求和取模\n    int sum = 0;\n    for (int i = 0; key[i]; i++) sum += key[i];\n    return sum % SIZE;\n}\n\nvoid put(char *key, int value) {\n    int h = hash(key);\n    for (KV *p = table[h]; p; p = p->next) {  // 先找同 key\n        if (strcmp(p->key, key) == 0) {\n            p->value = value;   // 有则覆盖\n            return;\n        }\n    }\n    KV *n = (KV *)malloc(sizeof(KV));  // 没有则头插\n    n->key = key; n->value = value;\n    n->next = table[h];\n    table[h] = n;\n}\n\nint get(char *key) {     // 找不到返回 -1\n    int h = hash(key);\n    for (KV *p = table[h]; p; p = p->next) {\n        if (strcmp(p->key, key) == 0) return p->value;\n    }\n    return -1;\n}\n\nint main() {\n    put(\"张三\", 90);\n    put(\"李四\", 85);\n    put(\"张三\", 95);     // 覆盖：张三现在 95\n    printf(\"张三的成绩: %d\\n\", get(\"张三\"));  // 95\n    printf(\"李四的成绩: %d\\n\", get(\"李四\"));  // 85\n    printf(\"王五的成绩: %d\\n\", get(\"王五\"));  // -1（不存在）\n    return 0;\n}",
     "notes": "逐段讲解：\n① C 没有现成的 HashMap，自己用\"桶数组 + 链表\"实现（链地址法）：SIZE 个桶，每个桶挂一条链表。\n② 哈希函数 hash()：把 key 各字符的 ASCII 码求和，再对桶数取模，算出该去哪个桶。C 里没有 hashCode()，哈希函数要自己写。\n③ put(key, value)：先算桶号，在桶的链表里找同 key——找到就覆盖旧值，找不到就头插一个新节点。\n④ get(key)：算桶号后在链表里找，找到返回值；找不到返回 -1（C 里没有 containsKey()，判断存在就是看 get 的结果）。\n⑤ 冲突：不同 key 落到同一桶，就挂在同一条链表上，查找时在链表里逐个 strcmp 比 key。链表很长时会变慢，所以哈希函数和桶的数量要设计好。\n\n记忆点：哈希表 = 桶数组 + 链表（链地址法），自己实现 put/get；查询平均 O(1)，冲突多时退化成 O(n)。"
    },
    {
     "name": "哈希集合：数组去重",
     "code": "#include <stdio.h>\n#include <stdbool.h>\n\n#define SIZE 7\n\nbool set[SIZE];   // set[x]=true 表示数字 x 出现过\n\nint main() {\n    int nums[] = {1, 2, 2, 3, 3, 3};\n    int n = 6, cnt = 0;\n    for (int i = 0; i < n; i++) {\n        if (!set[nums[i]]) {     // 没出现过？\n            set[nums[i]] = true; // 标记出现过\n            cnt++;               // 去重后数量 +1\n        }\n    }\n    printf(\"去重后数量: %d\\n\", cnt);  // 3\n    return 0;\n}",
     "notes": "逐段讲解：\n① 哈希集合的本质：只存 key 不存 value，用于 O(1) 判断\"存不存在\"。C 里没有现成的 Set，思路是把哈希表去掉 value 部分。\n② 这个例子用 bool 数组当集合：数字 1、2、3 直接当下标用（值域小的时候最简单），set[x]=true 表示 x 出现过。\n③ 经典用法：遍历数组，第一次遇到的数标记并计数，重复的跳过——cnt 就是去重后的个数。\n④ 值域大、或者数据是字符串时，就用前一个例子的链地址法：桶数组 + 链表，只存 key。\n\n记忆点：哈希集合 = 去重 + O(1) 判断存在；值域小用 bool 数组，值域大用链地址法。蓝桥杯去重题首选。"
    }
   ]
  },
  "quiz": [
   {
    "q": "哈希表查找的时间复杂度是？",
    "options": [
     "O(1)",
     "O(n)",
     "O(logn)",
     "O(n²)"
    ],
    "answer": 0,
    "explain": "哈希函数算出位置直接取，与数据量无关，O(1)"
   },
   {
    "q": "哈希冲突是什么？",
    "options": [
     "内存不够",
     "两个key算出同一位置",
     "数组越界",
     "数据丢失"
    ],
    "answer": 1,
    "explain": "不同 key 被哈希函数算到同一个位置，就叫哈希冲突，用链地址法（挂链表）解决"
   },
   {
    "q": "哈希表里 key 重复插入会发生什么？",
    "options": [
     "报错",
     "覆盖旧值",
     "新增一个",
     "随机选一个"
    ],
    "answer": 1,
    "explain": "同一个 key 再次插入会覆盖原来的 value"
   },
   {
    "q": "哈希集合（去重表）最适合解决什么问题？",
    "options": [
     "排序",
     "去重",
     "查找最大值",
     "反转"
    ],
    "answer": 1,
    "explain": "哈希集合自动去重，重复元素会被忽略"
   },
   {
    "q": "哈希表的遍历方式？",
    "options": [
     "按索引for",
     "遍历每个桶的链表拿键值对",
     "不能遍历",
     "按大小排序"
    ],
    "answer": 1,
    "explain": "遍历所有桶，每个桶的链表里挨个取键值对"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "哈希表查找为什么快？",
    "options": [
     "数据少",
     "哈希函数直接算位置",
     "有索引",
     "按顺序排好"
    ],
    "answer": 1
   },
   {
    "day": 3,
    "q": "哈希表里判断 key 是否存在通常怎么做？",
    "options": [
     "调用查找函数判断",
     "hasKey",
     "exist",
     "find"
    ],
    "answer": 0
   },
   {
    "day": 7,
    "q": "蓝桥杯去重题首选什么结构？",
    "options": [
     "数组",
     "哈希集合",
     "栈",
     "队列"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 5,
  "title": "树与二叉树",
  "icon": "🌳",
  "desc": "遍历、深度、构建，递归思想的入门。",
  "intro": {
   "what": "树是什么？",
   "text": "树就像电脑里的文件夹：一个根文件夹（根节点）下面有子文件夹（子节点），子文件夹下面还有更小的（孙子节点）。文件夹之间是'一个父亲多个孩子'的关系。二叉树就是'每个节点最多两个孩子'的特殊树。",
   "why": "为什么要用树？文件夹结构、公司组织架构、网页的 DOM、表达式计算，天然就是树形。二叉树还能快速查找（二叉搜索树）、高效排序（堆）。树是'分层数据'的完美表示。",
   "pain": "树难在'递归'：处理一棵树，就是处理根 + 递归处理左子树 + 递归处理右子树。初学者容易绕晕——但只要记住'每个子树都是一棵独立的树'，递归就自然了。"
  },
  "anim": {
   "title": "二叉树遍历是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "一棵二叉树：根1，左孩子2，右孩子3，2的左孩子4、右孩子5",
     "detail": "节点 1 是根；1 的左孩子 2、右孩子 3；2 又有左孩子 4、右孩子 5。每个节点最多两个孩子，这就是二叉树。",
     "show": "        1\n       / \\\n      2   3\n     / \\\n    4   5"
    },
    {
     "op": "pre",
     "desc": "前序遍历（根左右）：1 2 4 5 3",
     "detail": "前序：先访问根，再左子树，最后右子树。\n① 访问根 1\n② 递归左子树（以2为根）：访问2 → 左子树4 → 右子树5\n③ 递归右子树（以3为根）：访问3\n结果：1 2 4 5 3。口诀：'根'在最前面。",
     "show": "前序(根左右): ⭐1⭐ → 2 → 4 → 5 → 3\n（根在最前）"
    },
    {
     "op": "in",
     "desc": "中序遍历（左根右）：4 2 5 1 3",
     "detail": "中序：先左子树，再根，最后右子树。\n① 递归左子树（以2为根）：左孩子4 → 访问2 → 右孩子5\n② 访问根 1\n③ 递归右子树：访问3\n结果：4 2 5 1 3。注意：二叉搜索树的中序遍历结果是'从小到大排好序'的！",
     "show": "中序(左根右): 4 → 2 → 5 → ⭐1⭐ → 3\n（根在中间）"
    },
    {
     "op": "post",
     "desc": "后序遍历（左右根）：4 5 2 3 1",
     "detail": "后序：先左子树，再右子树，最后根。\n① 递归左子树（以2为根）：4 → 5 → 访问2\n② 递归右子树：访问3\n③ 最后访问根 1\n结果：4 5 2 3 1。口诀：'根'在最后面。后序遍历常用于'先处理孩子再处理父亲'的场景（如删除树）。",
     "show": "后序(左右根): 4 → 5 → 2 → 3 → ⭐1⭐\n（根在最后）"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：二叉树遍历",
   "desc": "构建一棵树，选择遍历方式看结果",
   "init": [
    "1 → 左2 右3；2 → 左4 右5"
   ],
   "ops": [
    {
     "id": "pre",
     "label": "前序遍历",
     "act": "pre",
     "explain": "前序（根左右）：先根 1，再左子树（2→4→5），再右子树（3）。结果：1 2 4 5 3。记住：根最先。"
    },
    {
     "id": "in",
     "label": "中序遍历",
     "act": "in",
     "explain": "中序（左根右）：先左子树（4→2→5），再根 1，再右子树（3）。结果：4 2 5 1 3。看 1 的位置：在中间。"
    },
    {
     "id": "post",
     "label": "后序遍历",
     "act": "post",
     "explain": "后序（左右根）：先左子树（4→5→2），再右子树（3），最后根 1。结果：4 5 2 3 1。看 1 的位置：在最后。"
    },
    {
     "id": "depth",
     "label": "求树的深度",
     "act": "depth",
     "explain": "深度 = 1 + max(左子树深度, 右子树深度)。\n以2为根的子树：左4、右5，深度2；以3为根的子树：深度1。\n整棵树深度 = 1 + max(2, 1) = 3。递归就是从叶子往上数。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "二叉树节点 + 三种遍历",
     "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int val;\n    struct TreeNode *left, *right;\n} TreeNode;\n\nTreeNode *newNode(int val) {\n    TreeNode *p = (TreeNode *)malloc(sizeof(TreeNode));\n    p->val = val;\n    p->left = p->right = NULL;\n    return p;\n}\n\nvoid preorder(TreeNode *n) {\n    if (n == NULL) return;      // 空节点返回\n    printf(\"%d \", n->val);      // 根\n    preorder(n->left);          // 左\n    preorder(n->right);         // 右\n}\nvoid inorder(TreeNode *n) {\n    if (n == NULL) return;\n    inorder(n->left);           // 左\n    printf(\"%d \", n->val);      // 根\n    inorder(n->right);          // 右\n}\nvoid postorder(TreeNode *n) {\n    if (n == NULL) return;\n    postorder(n->left);         // 左\n    postorder(n->right);        // 右\n    printf(\"%d \", n->val);      // 根\n}\nint maxDepth(TreeNode *n) {\n    if (n == NULL) return 0;\n    int l = maxDepth(n->left), r = maxDepth(n->right);\n    return 1 + (l > r ? l : r);\n}\n\nint main() {\n    TreeNode *root = newNode(1);\n    root->left = newNode(2);\n    root->right = newNode(3);\n    root->left->left = newNode(4);\n    root->left->right = newNode(5);\n    preorder(root);   // 1 2 4 5 3\n    printf(\"\\n\");\n    inorder(root);    // 4 2 5 1 3\n    printf(\"\\n\");\n    postorder(root);  // 4 5 2 3 1\n    printf(\"\\n\");\n    printf(\"深度: %d\\n\", maxDepth(root));  // 3\n    return 0;\n}",
     "notes": "逐段讲解：\n① TreeNode 结构体：val + left（左孩子指针）+ right（右孩子指针），newNode 用 malloc 建节点，左右指针初始化为 NULL。\n② 三种遍历结构几乎一样，区别只是'访问根'的位置：前序在最前、中序在中间、后序在最后。\n③ 递归出口：if (n == NULL) return; ——空节点什么都不做。这是所有树递归的'刹车'，防止无限递归。\n④ maxDepth：深度 = 1 + max(左深度, 右深度)，空节点深度 0。\n⑤ 构建树：root->left = newNode(2) 就是给根挂左孩子。\n\n记忆点：遍历口诀——前序根在前、中序根居中、后序根在后；每棵子树都是一棵独立的树，递归处理。"
    }
   ]
  },
  "quiz": [
   {
    "q": "二叉树每个节点最多有几个孩子？",
    "options": [
     "1个",
     "2个",
     "3个",
     "不限"
    ],
    "answer": 1,
    "explain": "二叉树每个节点最多两个孩子（左、右），可以少于2个但不能多于2个"
   },
   {
    "q": "前序遍历的顺序是？",
    "options": [
     "左根右",
     "根左右",
     "左右根",
     "右根左"
    ],
    "answer": 1,
    "explain": "前序=根左右：先访问根，再左子树，再右子树"
   },
   {
    "q": "中序遍历的顺序是？",
    "options": [
     "根左右",
     "左根右",
     "左右根",
     "右左根"
    ],
    "answer": 1,
    "explain": "中序=左根右：先左子树，再根，再右子树"
   },
   {
    "q": "一棵只有根节点的树，深度是？",
    "options": [
     "0",
     "1",
     "2",
     "无限"
    ],
    "answer": 1,
    "explain": "深度 = 1 + max(空,空) = 1 + 0 = 1"
   },
   {
    "q": "树遍历中 if (node == null) return; 的作用是？",
    "options": [
     "加速",
     "递归出口防无限循环",
     "打印节点",
     "构建树"
    ],
    "answer": 1,
    "explain": "空节点直接返回，是递归的终止条件，防止无限递归栈溢出"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "后序遍历的顺序口诀？",
    "options": [
     "根左右",
     "左根右",
     "左右根",
     "根右左"
    ],
    "answer": 2
   },
   {
    "day": 3,
    "q": "求二叉树深度用哪个公式？",
    "options": [
     "1+max(左右深度)",
     "左右深度之和",
     "左深度*2",
     "根的数量"
    ],
    "answer": 0
   },
   {
    "day": 7,
    "q": "蓝桥杯二叉树题最常用的思想？",
    "options": [
     "循环",
     "递归",
     "贪心",
     "动态规划"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 6,
  "title": "图",
  "icon": "🕸️",
  "desc": "邻接表、DFS/BFS 搜索。",
  "intro": {
   "what": "图是什么？",
   "text": "图就像地图：城市是'顶点'，城市之间的路是'边'。社交网络也是图：人是顶点，好友关系是边。图用来表示'多个东西之间互相有联系'。",
   "why": "为什么要学图？导航找最短路线（Dijkstra）、社交推荐、电路设计、地图着色，全是图问题。DFS（深度优先）像'一条路走到黑再回头'，BFS（广度优先）像'一圈一圈往外扩'。",
   "pain": "图的难点是'存储'和'遍历'。存储常用邻接表（每个点记下它连了谁），遍历要记住哪些点'访问过'（visited数组），不然会死循环。"
  },
  "anim": {
   "title": "图的 DFS 和 BFS 是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "一个图：0连1和2，1连3，2连3。邻接表表示",
     "detail": "邻接表：每个顶点后面跟着它'直接相连'的邻居。0→[1,2]，1→[3]，2→[3]。顶点 0 出发可以到 1 和 2，从 1 可以到 3。",
     "show": "邻接表:\n0: [1, 2]\n1: [3]\n2: [3]\n3: []"
    },
    {
     "op": "dfs",
     "desc": "DFS从0出发：0→1→3→回到0→2。一条路走到黑",
     "detail": "DFS（深度优先）：\n① 访问 0\n② 顺着第一条边到 1，访问 1\n③ 从 1 继续深入，到 3，访问 3\n④ 3 没有没访问过的邻居，回头；1 也没有了，回头到 0\n⑤ 0 还有邻居 2 没访问，访问 2\n访问顺序：0 1 3 2。像走迷宫：一直往前走，走不通就退回来换条路。实现用栈（递归）。",
     "show": "DFS: 0 → 1 → 3 → 2 → 4\n（一条路走到黑，用递归/栈）"
    },
    {
     "op": "bfs",
     "desc": "BFS从0出发：0→1→2→3。一圈一圈往外扩",
     "detail": "BFS（广度优先）：\n① 访问 0\n② 0 的邻居 1、2，访问 1 和 2（第一圈）\n③ 1 的邻居 3，访问 3（第二圈）\n访问顺序：0 1 2 3。像水波一圈圈扩散。实现用队列：先来的先处理。\n注意：BFS 找到的路径是'最短路径'（步数最少），这是它最大的用处。",
     "show": "BFS: 0 → 1 → 2 → 3 → 4\n（一圈圈扩散，用队列）"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：图遍历",
   "desc": "5个顶点的图，分别用DFS和BFS遍历",
   "init": [
    "0:[1,2] 1:[0,3] 2:[0,3] 3:[1,2] 4:[3]"
   ],
   "ops": [
    {
     "id": "dfs",
     "label": "DFS 从0出发",
     "act": "dfs",
     "explain": "DFS（深度优先）：\n0 → 1 → 3 → 2 → 4\n一条路走到底：0先走1，1走3，3走2，2没有新邻居回头，3还有4，走4。实现用递归（隐式栈），visited 数组记录已访问，防止 0→1→0 死循环。"
    },
    {
     "id": "bfs",
     "label": "BFS 从0出发",
     "act": "bfs",
     "explain": "BFS（广度优先）：\n0 → 1 → 2 → 3 → 4\n一圈圈扩散：0出发，先访问它所有邻居1、2；再访问1的邻居3、2的邻居3（已访问跳过）；再访问3的邻居4。实现用队列，先进先出。BFS能找到从0到任意点的最短步数。"
    },
    {
     "id": "short",
     "label": "BFS 求0到4最短步数",
     "act": "shortest",
     "explain": "BFS 一层层记录距离：\n0在第0层；1、2在第1层；3在第2层；4在第3层。\n所以 0→4 最短 3 步：0→1→3→4（或 0→2→3→4）。这就是 BFS 求最短路径的原理——谁先被访问到，谁就是最近的。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "邻接矩阵 + DFS + BFS",
     "code": "#include <stdio.h>\n#include <string.h>\n\n#define N 5       // 顶点数\n\nint graph[N][N];  // 邻接矩阵：graph[a][b]=1 表示 a、b 有边\nint visited[N];   // 访问标记\n\nvoid dfs(int node) {\n    visited[node] = 1;\n    printf(\"%d \", node);\n    for (int i = 0; i < N; i++) {\n        if (graph[node][i] && !visited[i]) dfs(i);\n    }\n}\n\nvoid bfs(int start) {\n    int queue[N * N], head = 0, tail = 0;  // 数组当队列\n    queue[tail++] = start;\n    visited[start] = 1;\n    while (head < tail) {\n        int node = queue[head++];\n        printf(\"%d \", node);\n        for (int i = 0; i < N; i++) {\n            if (graph[node][i] && !visited[i]) {\n                visited[i] = 1;\n                queue[tail++] = i;\n            }\n        }\n    }\n}\n\nint main() {\n    // 加边: 0-1, 0-2, 1-3, 2-3, 3-4\n    int edges[][2] = {{0,1},{0,2},{1,3},{2,3},{3,4}};\n    for (int i = 0; i < 5; i++) {\n        int a = edges[i][0], b = edges[i][1];\n        graph[a][b] = 1;\n        graph[b][a] = 1;   // 无向图加双向\n    }\n    memset(visited, 0, sizeof(visited));\n    printf(\"DFS: \"); dfs(0);\n    printf(\"\\n\");\n    memset(visited, 0, sizeof(visited));\n    printf(\"BFS: \"); bfs(0);\n    printf(\"\\n\");\n    return 0;\n}",
     "notes": "逐段讲解：\n① 图的存储：C 常用邻接矩阵（graph[a][b]=1 表示 a、b 有边）或邻接表（每个顶点一条链表存邻居）。顶点少、边密用矩阵，数据量大用邻接表。\n② DFS：递归。访问当前点→标记visited→对每个没访问的邻居递归。'一条路走到黑'。\n③ BFS：数组当队列用。起点入队→循环：出队访问→没访问的邻居入队。'一圈圈扩散'。\n④ visited 数组：防止重复访问和死循环（无向图 0-1 会互相指向，不标记就死循环）。每次搜索前用 memset 清零。\n⑤ 加边：无向图要加双向（graph[a][b] 和 graph[b][a] 都置 1）。\n\n记忆点：DFS用递归/栈（深），BFS用队列（广）；visited数组必须有；BFS能求最短步数。"
    }
   ]
  },
  "quiz": [
   {
    "q": "图的常用存储方式？",
    "options": [
     "邻接表或邻接矩阵",
     "栈",
     "队列",
     "二叉树"
    ],
    "answer": 0,
    "explain": "邻接表（每个点存邻居）和邻接矩阵（二维数组）是两种主流存储"
   },
   {
    "q": "DFS 通常用什么实现？",
    "options": [
     "队列",
     "递归或栈",
     "数组",
     "哈希表"
    ],
    "answer": 1,
    "explain": "DFS 一条路走到底，天然适合递归（隐式栈）"
   },
   {
    "q": "BFS 通常用什么实现？",
    "options": [
     "栈",
     "队列",
     "递归",
     "链表"
    ],
    "answer": 1,
    "explain": "BFS 一圈圈扩散，先来的先处理，用队列"
   },
   {
    "q": "BFS 最大的用处是？",
    "options": [
     "求最短路径步数",
     "排序",
     "去重",
     "压缩"
    ],
    "answer": 0,
    "explain": "BFS 逐层扩展，谁先被访问到谁就最近，能求最短步数"
   },
   {
    "q": "图遍历中 visited 数组的作用？",
    "options": [
     "加速",
     "防止重复访问和死循环",
     "节省内存",
     "美化输出"
    ],
    "answer": 1,
    "explain": "防止重复访问，避免无向图里 0→1→0 的死循环"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "DFS 和 BFS 的区别？",
    "options": [
     "一个深一个广",
     "一个快一个慢",
     "没有区别",
     "一个用于有向图"
    ],
    "answer": 0
   },
   {
    "day": 3,
    "q": "BFS 用什么数据结构？",
    "options": [
     "栈",
     "队列",
     "堆",
     "树"
    ],
    "answer": 1
   },
   {
    "day": 7,
    "q": "蓝桥杯迷宫题一般用什么？",
    "options": [
     "只能DFS",
     "只能BFS",
     "DFS或BFS都行",
     "排序"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 7,
  "title": "排序算法",
  "icon": "📊",
  "desc": "快排、归并、堆排序的原理与实现。",
  "intro": {
   "what": "排序是什么？",
   "text": "排序就是把一堆乱序的数据按大小排好，像把打乱的扑克牌从小到大理好。排序是算法的基础：排好序之后，查找、统计、去重都变得容易。",
   "why": "为什么要学排序？几乎每个程序都用得到：排行榜、价格排序、按时间排序。而且排序思想（分治、比较）是算法思维的核心训练。",
   "pain": "排序算法很多（冒泡、选择、插入、快排、归并、堆……），初学者容易混。关键要抓住两个维度：时间复杂度（快不快）和稳定性（相等元素顺序变不变）。蓝桥杯考得最多的是快排和归并。"
  },
  "anim": {
   "title": "排序是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "冒泡排序：5 3 8 1，每次把最大的'冒'到最后",
     "detail": "冒泡排序思想：相邻两个比较，大的往后换。第一轮：5和3换→3 5 8 1；5和8不换；8和1换→3 5 1 8。最大的8冒到末尾了！第二轮处理前3个：3 5 1→3 1 5；第三轮：1 3 5。完成：1 3 5 8。",
     "show": "[5, 3, 8, 1]\n冒泡：相邻比较，大的往后换"
    },
    {
     "op": "quick",
     "desc": "快速排序：选基准，小的放左大的放右，递归",
     "detail": "快排思想（分治）：① 选一个基准（比如第一个元素）；② 把小于基准的放左边、大于的放右边（一趟分区）；③ 对左右两部分递归做同样的事。\n例：5 3 8 1，选基准5→分区得 3 1 | 5 | 8→对 3 1 递归（基准3→1 3）→最终 1 3 5 8。\n平均 O(nlogn)，是实际应用最多的排序。",
     "show": "快排: [3, 1] ⭐5⭐ [8]\n（选5为基准，小左大右，再递归）"
    },
    {
     "op": "merge",
     "desc": "归并排序：先拆成单个，再两两合并有序",
     "detail": "归并思想（分治）：① 把数组从中间拆成两半；② 递归拆到每个只剩1个元素（1个元素天然有序）；③ 合并：两个有序数组合并成一个有序数组（像两叠排好的牌，谁小谁先出）。\n稳定、O(nlogn)，但需要额外 O(n) 空间。",
     "show": "归并: [5,3][8,1] → [5][3][8][1]\n→ 合并 [3,5][1,8] → [1,3,5,8]"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：三种排序",
   "desc": "对 [5,3,8,1] 分别看三种排序过程",
   "init": [
    "待排序：5 3 8 1"
   ],
   "ops": [
    {
     "id": "bubble",
     "label": "冒泡排序",
     "act": "bubble",
     "explain": "冒泡：相邻比较，大的往后换。\n第1轮：5↔3→3 5 8 1；5<8不换；8↔1→3 5 1 [8]\n第2轮：3 1 [5] [8]（5冒上来了）\n第3轮：1 [3] [5] [8]\n结果：1 3 5 8。O(n²)，简单但慢。"
    },
    {
     "id": "quick",
     "label": "快速排序",
     "act": "quick",
     "explain": "快排：选基准，分区，递归。\n选基准5：[3 1] [5] [8]\n对[3 1]：基准3→[1] [3]\n结果：1 3 5 8。平均O(nlogn)，最快之一。"
    },
    {
     "id": "merge",
     "label": "归并排序",
     "act": "merge",
     "explain": "归并：拆到单个再合并。\n[5 3 8 1]→[5 3][8 1]→[5][3][8][1]\n合并[5]+[3]→[3 5]；[8]+[1]→[1 8]\n合并[3 5]+[1 8]→[1 3 5 8]。稳定，O(nlogn)。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "快速排序（高频考点）",
     "code": "#include <stdio.h>\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low >= high) return;       // 递归出口\n    int pivot = arr[low];          // 选基准（最左元素）\n    int i = low, j = high;\n    while (i < j) {\n        while (i < j && arr[j] >= pivot) j--;  // 右边找小的\n        arr[i] = arr[j];\n        while (i < j && arr[i] <= pivot) i++;  // 左边找大的\n        arr[j] = arr[i];\n    }\n    arr[i] = pivot;                // 基准归位\n    quickSort(arr, low, i - 1);    // 左递归\n    quickSort(arr, i + 1, high);   // 右递归\n}\n\nint main() {\n    int nums[] = {5, 3, 8, 1, 9, 2};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    quickSort(nums, 0, n - 1);\n    for (int i = 0; i < n; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");\n    return 0;\n}",
     "notes": "逐段讲解：\n① 递归出口：low >= high 表示只剩0或1个元素，天然有序。\n② 选基准 pivot = arr[low]（最左元素）。\n③ 双指针：j 从右往左找比基准小的，i 从左往右找比基准大的，交换填坑。\n④ 循环结束 i==j，基准归位到 arr[i]——此时左边都比它小，右边都比它大。\n⑤ 对左半和右半递归。\n\n记忆点：快排 = 选基准 + 分区（小左大右）+ 递归。平均 O(nlogn)。背下这个模板，蓝桥杯排序题稳了。"
    },
    {
     "name": "归并排序（稳定版）",
     "code": "#include <stdio.h>\n\nint temp[100];   // 合并用的临时数组\n\nvoid merge(int arr[], int left, int mid, int right) {\n    int i = left, j = mid + 1, k = 0;\n    while (i <= mid && j <= right) {\n        if (arr[i] <= arr[j]) temp[k++] = arr[i++];\n        else temp[k++] = arr[j++];\n    }\n    while (i <= mid) temp[k++] = arr[i++];\n    while (j <= right) temp[k++] = arr[j++];\n    for (int m = 0; m < k; m++) arr[left + m] = temp[m];\n}\n\nvoid mergeSort(int arr[], int left, int right) {\n    if (left >= right) return;\n    int mid = (left + right) / 2;\n    mergeSort(arr, left, mid);        // 拆左\n    mergeSort(arr, mid + 1, right);   // 拆右\n    merge(arr, left, mid, right);     // 合并\n}\n\nint main() {\n    int nums[] = {5, 3, 8, 1, 9, 2};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    mergeSort(nums, 0, n - 1);\n    for (int i = 0; i < n; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");\n    return 0;\n}",
     "notes": "逐段讲解：\n① mergeSort：拆！mid 取中间，递归拆左、拆右。\n② merge：合！两个有序子数组合并：i 指左半、j 指右半，谁小谁进 temp。\n③ 收尾：左半或右半有剩余的全部拷进 temp。\n④ 把 temp 拷回原数组对应位置。\n⑤ 关键：合并时 arr[i] <= arr[j] 取左边（相等时左边先），所以是稳定的。\n\n记忆点：归并 = 拆到单个 + 合并有序。稳定 O(nlogn)，需 O(n) 额外空间。求'逆序对'数量就用归并。"
    }
   ]
  },
  "quiz": [
   {
    "q": "冒泡排序的时间复杂度是？",
    "options": [
     "O(nlogn)",
     "O(n²)",
     "O(n)",
     "O(logn)"
    ],
    "answer": 1,
    "explain": "冒泡每轮把最大的冒到最后，两层循环，O(n²)"
   },
   {
    "q": "快速排序的平均时间复杂度是？",
    "options": [
     "O(n²)",
     "O(nlogn)",
     "O(n)",
     "O(logn)"
    ],
    "answer": 1,
    "explain": "快排分治，每层O(n)共logn层，平均O(nlogn)"
   },
   {
    "q": "快速排序的核心思想是？",
    "options": [
     "相邻交换",
     "选基准分区再递归",
     "两两合并",
     "插入到有序区"
    ],
    "answer": 1,
    "explain": "快排=选基准+分区（小左大右）+递归"
   },
   {
    "q": "归并排序的缺点（相比快排）？",
    "options": [
     "不稳定",
     "需要额外O(n)空间",
     "太慢",
     "代码太长"
    ],
    "answer": 1,
    "explain": "归并需要临时数组，额外空间O(n)；快排原地排序"
   },
   {
    "q": "下列哪个排序是稳定的？",
    "options": [
     "快排",
     "归并",
     "堆排序",
     "选择"
    ],
    "answer": 1,
    "explain": "归并合并时相等元素左边先取，是稳定的；快排堆排选择都不稳定"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "快排平均时间复杂度？",
    "options": [
     "O(n²)",
     "O(nlogn)",
     "O(n)",
     "O(1)"
    ],
    "answer": 1
   },
   {
    "day": 3,
    "q": "蓝桥杯排序题首选背哪个模板？",
    "options": [
     "冒泡",
     "快排",
     "选择",
     "插入"
    ],
    "answer": 1
   },
   {
    "day": 7,
    "q": "求逆序对数量常用什么排序？",
    "options": [
     "快排",
     "归并",
     "冒泡",
     "堆"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 8,
  "title": "查找算法",
  "icon": "🔍",
  "desc": "二分查找与哈希查找。",
  "intro": {
   "what": "查找是什么？",
   "text": "查找就是在数据里找一个目标值。最简单的是'线性查找'（从头一个个比），数据多就慢。二分查找就像'猜数字'游戏：在 1~100 里猜一个数，你说 50，对方说大了，你立刻知道答案在 1~49——每次都排除一半。",
   "why": "为什么二分查找快？每次比较都能排除一半数据：100个→50→25→12→6→3→1，只需 7 次。数据翻倍只多 1 次，这就是 O(logn)。10 亿个数据也只要 30 次！",
   "pain": "前提条件：数据必须'已排序'。而且二分查找只适用于'按大小查找'。另外要注意边界（mid 计算、左右指针更新），容易写出死循环或漏查。"
  },
  "anim": {
   "title": "二分查找是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "有序数组 [1,3,5,7,9,11,13]，查找目标7",
     "detail": "二分查找前提：数组必须有序。左指针 left=0（指向1），右指针 right=6（指向13），目标 target=7。",
     "show": "[1, 3, 5, 7, 9, 11, 13]  target=7\nleft=0 right=6"
    },
    {
     "op": "mid",
     "desc": "mid=(0+6)/2=3，arr[3]=7，正好命中！",
     "detail": "中间位置 mid = (left+right)/2 = 3，arr[3] = 7，等于目标 7，直接返回下标 3。运气好一次就找到。这就是二分：先看中间，猜中就直接结束。",
     "show": "[1, 3, 5, ⭐7⭐, 9, 11, 13]\nmid=3, arr[3]=7，命中！返回3"
    },
    {
     "op": "low",
     "desc": "查目标4：mid=3是7>4，说明4在左半边，right=mid-1",
     "detail": "查 4：mid=3，arr[3]=7 > 4，说明目标只可能在左半边（因为数组有序，右边都比7大）。所以 right = mid-1 = 2。搜索范围缩小一半！",
     "show": "查找4: mid=3是7>4\n搜索范围: [1, 3, 5]（右半边被排除）"
    },
    {
     "op": "low2",
     "desc": "左半边 [1,3,5]：mid=1，arr[1]=3<4，left=mid+1=2",
     "detail": "新范围 left=0, right=2：mid=1，arr[1]=3 < 4，说明目标在右半边。left = mid+1 = 2。范围只剩 [5]。",
     "show": "查找4: mid=1是3<4\n搜索范围: [5]（左半边被排除）"
    },
    {
     "op": "low3",
     "desc": "[5]：arr[2]=5≠4，left>right，查找失败返回-1",
     "detail": "最后 left=2, right=2：mid=2，arr[2]=5 ≠ 4，且 5>4，right=mid-1=1。此时 left(2) > right(1)，循环结束，没找到，返回 -1。查找失败。整个过程只比较了 3 次（7个数据），这就是 log₂7≈3 的含义。",
     "show": "查找4: mid=2是5>4, left>right\n未找到，返回-1（只比较了3次！）"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：二分查找",
   "desc": "在有序数组里找目标，观察范围缩小",
   "init": [
    "[1,3,5,7,9,11,13]"
   ],
   "ops": [
    {
     "id": "find7",
     "label": "查找 7",
     "act": "find7",
     "explain": "查找 7：\n① mid=(0+6)/2=3，arr[3]=7，命中！返回下标 3。\n二分查找第一步就看中间，运气好一次命中。"
    },
    {
     "id": "find4",
     "label": "查找 4",
     "act": "find4",
     "explain": "查找 4：\n① mid=3，arr[3]=7>4 → right=2（排除右半边）\n② mid=1，arr[1]=3<4 → left=2\n③ mid=2，arr[2]=5>4 → right=1\n④ left=2>right=1，结束，返回-1。只比较了3次！如果线性查找要比较4次（1,3,5都错过）。"
    },
    {
     "id": "find13",
     "label": "查找 13",
     "act": "find13",
     "explain": "查找 13：\n① mid=3，arr[3]=7<13 → left=4\n② mid=5，arr[5]=11<13 → left=6\n③ mid=6，arr[6]=13，命中！返回 6。\n数据有序+每次排除一半=二分查找快的秘密。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "二分查找（背模板）",
     "code": "#include <stdio.h>\n\n// 在有序数组里找 target，找到返回下标，找不到返回 -1\nint binarySearch(int arr[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;  // 防溢出写法\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {1, 3, 5, 7, 9, 11, 13};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    printf(\"7的位置: %d\\n\", binarySearch(arr, n, 7));   // 3\n    printf(\"4的位置: %d\\n\", binarySearch(arr, n, 4));   // -1\n    return 0;\n}",
     "notes": "逐段讲解：\n① 前提：数组必须有序（从小到大）。\n② 左右指针：left 指向第一个，right 指向最后一个。\n③ 循环条件 left <= right：范围内还有元素就继续。\n④ mid 用 left + (right-left)/2 而不是 (left+right)/2，防止 left+right 溢出（数据大时）。\n⑤ 三路判断：等于→返回；小于→左边找（right=mid-1）；大于→右边找（left=mid+1）。\n⑥ 循环结束没找到返回 -1。\n\n记忆点：二分 = 有序 + 每次砍一半 + O(logn)。模板背下来，蓝桥杯查找题直接套。"
    },
    {
     "name": "bsearch 一行版（C 标准库）",
     "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// 比较函数：告诉 bsearch / qsort 怎么比大小\nint cmp(const void *a, const void *b) {\n    return *(int *)a - *(int *)b;\n}\n\nint main() {\n    int arr[] = {1, 3, 5, 7, 9, 11, 13};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target = 7;\n    // 找到返回指针，找不到返回 NULL\n    int *p = (int *)bsearch(&target, arr, n, sizeof(int), cmp);\n    if (p != NULL) printf(\"7的位置: %ld\\n\", p - arr);  // 3\n    else printf(\"没找到\\n\");\n    // 无序数组先排序：qsort\n    int nums[] = {9, 3, 7};\n    qsort(nums, 3, sizeof(int), cmp);\n    for (int i = 0; i < 3; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");  // 3 7 9\n    return 0;\n}",
     "notes": "逐段讲解：\n① bsearch(要查的值, 数组, 元素个数, 每个元素大小, 比较函数)：C 标准库的二分查找，找到返回指针，找不到返回 NULL。\n② 比较函数 cmp 告诉 bsearch 怎么比大小：返回负数 / 0 / 正数，表示 a<b / a==b / a>b。\n③ 位置 = 返回的指针 - 数组首地址（p - arr）。\n④ 必须有序！对无序数组用 qsort 先排序（qsort 也是标准库快排，同样要传 cmp）。\n⑤ 注意 bsearch 返回的是 void*，要用 (int*) 转成 int 指针再用。\n\n记忆点：比赛里 bsearch 和 qsort 是神器，但都要写 cmp 比较函数，而且别忘了先排序。"
    }
   ]
  },
  "quiz": [
   {
    "q": "二分查找的前提条件是？",
    "options": [
     "数据量大",
     "数组有序",
     "数组无序",
     "数据为整数"
    ],
    "answer": 1,
    "explain": "二分查找必须基于有序数组，才能根据中间值判断去左还是去右"
   },
   {
    "q": "二分查找的时间复杂度是？",
    "options": [
     "O(1)",
     "O(n)",
     "O(logn)",
     "O(n²)"
    ],
    "answer": 2,
    "explain": "每次排除一半，数据翻倍只多一步，O(logn)"
   },
   {
    "q": "二分查找在 100 万个数据里最多比较几次？",
    "options": [
     "100万次",
     "100次",
     "20次",
     "1次"
    ],
    "answer": 2,
    "explain": "log₂(1000000)≈20，最多20次就能找到"
   },
   {
    "q": "二分查找找不到目标时通常返回？",
    "options": [
     "0",
     "-1",
     "数组长度",
     "null"
    ],
    "answer": 1,
    "explain": "手写版返回 -1；C 标准库 bsearch 找不到返回 NULL"
   },
   {
    "q": "mid = left + (right-left)/2 这样写的好处是？",
    "options": [
     "更快",
     "防止整数溢出",
     "更准确",
     "没有好处"
    ],
    "answer": 1,
    "explain": "(left+right)可能溢出int范围，left+(right-left)/2不会"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "二分查找要求什么？",
    "options": [
     "数据有序",
     "数据无序",
     "数据量大",
     "数据是字符串"
    ],
    "answer": 0
   },
   {
    "day": 3,
    "q": "二分查找时间复杂度？",
    "options": [
     "O(1)",
     "O(n)",
     "O(logn)",
     "O(nlogn)"
    ],
    "answer": 2
   },
   {
    "day": 7,
    "q": "蓝桥杯查找有序数组用哪个？",
    "options": [
     "线性查找",
     "二分查找",
     "冒泡",
     "贪心"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 9,
  "title": "动态规划入门",
  "icon": "🧩",
  "desc": "状态转移思想，蓝桥杯省赛压轴题。",
  "intro": {
   "what": "动态规划是什么？",
   "text": "动态规划（DP）的核心就一句话：记住算过的结果，不重复计算。比如斐波那契数列：f(5)=f(4)+f(3)，而 f(4)=f(3)+f(2)——用递归算，f(3) 会被算两遍；用 DP，f(3) 算一次存起来，后面直接拿。",
   "why": "为什么重要？很多问题暴力算会爆炸（指数级），DP 用'空间换时间'变成多项式级。爬楼梯、背包、最长子序列、最短路径，全是 DP。蓝桥杯省赛的压轴题十有八九是 DP。",
   "pain": "DP 难在'找状态和转移方程'：① 定义 dp[i] 代表什么？② dp[i] 怎么从 dp[i-1] 推出来？③ 初始值（边界）是什么？想通这三步，代码往往很短。"
  },
  "anim": {
   "title": "动态规划是怎么工作的？",
   "steps": [
    {
     "op": "init",
     "desc": "爬楼梯：每次爬1或2阶，爬到第n阶有几种方法？",
     "detail": "问题：楼梯 n 阶，每次可以爬 1 阶或 2 阶，问有多少种不同的爬法。\n先想：到第 n 阶，最后一步要么从 n-1 阶爬1阶，要么从 n-2 阶爬2阶。所以 f(n) = f(n-1) + f(n-2)。这就是'状态转移方程'。",
     "show": "爬楼梯：每次1或2阶，到第n阶几种方法？\nf(n) = f(n-1) + f(n-2)"
    },
    {
     "op": "dp",
     "desc": "从底往上算：f(1)=1, f(2)=2, f(3)=3, f(4)=5, f(5)=8",
     "detail": "用数组从前往后算，每个结果存起来：\nf(1)=1（只能爬1阶）\nf(2)=2（1+1 或 2）\nf(3)=f(2)+f(1)=2+1=3\nf(4)=f(3)+f(2)=3+2=5\nf(5)=f(4)+f(3)=5+3=8\n每个 f(i) 只算一次，存进 dp 数组——这就是 DP 和暴力的区别。",
     "show": "dp[1]=1, dp[2]=2, dp[3]=3, dp[4]=5, dp[5]=8\n（从底往上填表，每个只算一次）"
    },
    {
     "op": "why",
     "desc": "对比：递归会重复算，DP 只算一次",
     "detail": "如果用递归算 f(5)：\nf(5)=f(4)+f(3)\nf(4)=f(3)+f(2) ← f(3) 又算一遍\nf(3)=f(2)+f(1) ← 又算\n递归树里 f(3) 被算了 2 次，f(2) 被算了 3 次……n 越大浪费越严重（指数爆炸）。DP 用 dp 数组记住每个结果，f(3) 只算一次，后面直接取。空间换时间！",
     "show": "递归: f(5)=f(4)+f(3), f(3)被重复算\nDP: 用dp数组记住结果，只算一次"
    }
   ]
  },
  "sim": {
   "title": "动手模拟：动态规划",
   "desc": "用 dp 数组算爬楼梯，一步步填表",
   "init": [
    "dp[0]=0 开始"
   ],
   "ops": [
    {
     "id": "step1",
     "label": "算 f(1)=1",
     "act": "f1",
     "explain": "f(1)=1：只有 1 阶楼梯，只能爬 1 阶，1 种方法。dp[1]=1。这是边界条件。"
    },
    {
     "id": "step2",
     "label": "算 f(2)=2",
     "act": "f2",
     "explain": "f(2)=2：可以 1+1（两次爬1阶），也可以直接爬2阶，共 2 种。dp[2]=2。第二个边界。"
    },
    {
     "id": "step3",
     "label": "算 f(3)=3",
     "act": "f3",
     "explain": "f(3)=f(2)+f(1)=2+1=3：到第3阶，最后一步从第2阶爬1阶（f(2)=2种），或从第1阶爬2阶（f(1)=1种），共3种。dp[3]=3。"
    },
    {
     "id": "step4",
     "label": "算 f(4)=5",
     "act": "f4",
     "explain": "f(4)=f(3)+f(2)=3+2=5。dp[4]=5。注意：f(3) 和 f(2) 都是之前算好存着的，直接取用，没有重复计算。"
    },
    {
     "id": "step5",
     "label": "算 f(5)=8",
     "act": "f5",
     "explain": "f(5)=f(4)+f(3)=5+3=8。答案 8 种爬法。\n整个过程从 f(1) 到 f(5) 每个只算一次，O(n)。如果递归算，f(3) 会被重复算 2 次以上。"
    }
   ]
  },
  "code": {
   "title": "C 代码实现",
   "blocks": [
    {
     "name": "爬楼梯（经典DP入门）",
     "code": "#include <stdio.h>\n\n// 每次爬1或2阶，到第n阶有多少种方法\nint climbStairs(int n) {\n    if (n <= 2) return n;\n    int dp[100] = {0};\n    dp[1] = 1;   // 边界\n    dp[2] = 2;   // 边界\n    for (int i = 3; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];  // 状态转移\n    }\n    return dp[n];\n}\n\nint main() {\n    printf(\"5阶: %d\\n\", climbStairs(5));    // 8\n    printf(\"10阶: %d\\n\", climbStairs(10));  // 89\n    return 0;\n}",
     "notes": "逐段讲解：\n① 状态定义：dp[i] = 爬到第 i 阶的方法数。\n② 边界：dp[1]=1（爬1阶），dp[2]=2（1+1 或 2）。\n③ 状态转移方程：dp[i] = dp[i-1] + dp[i-2]（最后一步从 i-1 爬1阶 或 从 i-2 爬2阶）。\n④ 循环从 3 到 n 填表，每个值只算一次。\n⑤ 空间还能优化：只用两个变量滚动（因为只依赖前两个），但数组版更好理解。\n\n记忆点：DP 三步——定义dp、找转移方程、定边界。爬楼梯 = 斐波那契，是 DP 的'Hello World'。"
    },
    {
     "name": "斐波那契 DP 版",
     "code": "#include <stdio.h>\n\n// 求第n个斐波那契数: f(0)=0, f(1)=1, f(n)=f(n-1)+f(n-2)\nint fib(int n) {\n    if (n <= 1) return n;\n    int dp[100] = {0};\n    dp[0] = 0;\n    dp[1] = 1;\n    for (int i = 2; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];\n    }\n    return dp[n];\n}\n\nint main() {\n    printf(\"fib(10) = %d\\n\", fib(10));  // 55\n    printf(\"fib(20) = %d\\n\", fib(20));  // 6765\n    return 0;\n}",
     "notes": "逐段讲解：\n① 状态：dp[i] = 第 i 个斐波那契数。\n② 边界：dp[0]=0，dp[1]=1。\n③ 转移：dp[i] = dp[i-1] + dp[i-2]。\n④ 对比递归版：递归 f(20) 要算 1 万多次，DP 只要 20 次。这就是'记住结果'的威力。\n⑤ 蓝桥杯常见变体：斐波那契 + 大数。第 47 项就超出 int 范围了，C 里要用 long long 或高精度数组。\n\n记忆点：递归（自顶向下，重复算）vs DP（自底向上，存结果）。看到'f(n)=f(n-1)+f(n-2)'这类递推，就用 DP。"
    }
   ]
  },
  "quiz": [
   {
    "q": "动态规划的核心思想是？",
    "options": [
     "暴力枚举",
     "记住结果避免重复计算",
     "随机猜测",
     "二分查找"
    ],
    "answer": 1,
    "explain": "DP 把算过的结果存起来，后面直接取用，避免重复计算"
   },
   {
    "q": "爬楼梯 f(3) 的值是？",
    "options": [
     "2",
     "3",
     "4",
     "5"
    ],
    "answer": 1,
    "explain": "f(3)=f(2)+f(1)=2+1=3"
   },
   {
    "q": "DP 的三大步骤是？",
    "options": [
     "定义dp、找转移方程、定边界",
     "输入、处理、输出",
     "排序、查找、删除",
     "建树、遍历、销毁"
    ],
    "answer": 0,
    "explain": "①dp[i]代表什么 ②怎么从前面推出来 ③初始值是什么"
   },
   {
    "q": "递归算斐波那契 f(10) 为什么慢？",
    "options": [
     "代码长",
     "重复计算大量子问题",
     "数据太大",
     "没有优化"
    ],
    "answer": 1,
    "explain": "递归树里 f(3)、f(4) 等被重复算多次，指数级增长"
   },
   {
    "q": "爬楼梯的状态转移方程是？",
    "options": [
     "f(n)=f(n-1)+1",
     "f(n)=f(n-1)+f(n-2)",
     "f(n)=n²",
     "f(n)=f(n-2)+2"
    ],
    "answer": 1,
    "explain": "最后一步从n-1爬1阶或从n-2爬2阶：f(n)=f(n-1)+f(n-2)"
   }
  ],
  "review": [
   {
    "day": 1,
    "q": "DP 相比递归的优势？",
    "options": [
     "代码更短",
     "避免重复计算",
     "内存更少",
     "更易读"
    ],
    "answer": 1
   },
   {
    "day": 3,
    "q": "爬楼梯 f(4) = ?",
    "options": [
     "3",
     "5",
     "8",
     "4"
    ],
    "answer": 1
   },
   {
    "day": 7,
    "q": "蓝桥杯省赛压轴题常见类型？",
    "options": [
     "动态规划",
     "输出Hello",
     "文件操作",
     "正则匹配"
    ],
    "answer": 0
   }
  ]
 }
];
