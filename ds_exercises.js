// 数据结构章节编程练习（C 语言版）
// 每章 3 题：read 读代码选择题 / fill 补全代码选择题 / prog 完整编程题（带在线自测 check）
var dsExercises = [
 {
  "id": 1,
  "title": "数组与字符串",
  "items": [
   {
    "type": "read",
    "name": "读代码：数组逆序输出",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\nint main() {\n    int a[] = {1, 2, 3, 4, 5};\n    for (int i = 4; i >= 0; i--) {\n        printf(\"%d \", a[i]);\n    }\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["1 2 3 4 5", "5 4 3 2 1", "4 3 2 1", "5 4 3 2"],
    "answer": 1,
    "explain": "for 从 i=4 倒着走到 0：先输出 a[4]=5，最后输出 a[0]=1，所以是 5 4 3 2 1。注意下标从 0 开始，a[4] 才是最后一个元素。"
   },
   {
    "type": "fill",
    "name": "补全代码：统计数字字符个数",
    "desc": "统计字符串 s 里有多少个数字字符（'0'-'9'）。把横线处补全。",
    "code": "#include <stdio.h>\nint main() {\n    char s[] = \"a1b2c34\";\n    int cnt = 0;\n    for (int i = 0; s[i] != '\\0'; i++) {\n        if (____) {\n            cnt++;\n        }\n    }\n    printf(\"%d\", cnt);\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": [
     "s[i] >= '0' && s[i] <= '9'",
     "s[i] >= 0 && s[i] <= 9",
     "'0' <= s[i] <= '9'",
     "s[i] = '0' ~ '9'"
    ],
    "answer": 0,
    "explain": "字符 '0'~'9' 的 ASCII 码连续（48~57），用 s[i] >= '0' && s[i] <= '9' 判断最标准。B 拿字符和整数 0/9 比，恒为真；C 是数学式写法，C 语言不支持；D 语法错误。字符串以 '\\0' 结尾，最终输出 4（1、2、3、4 共 4 个数字）。"
   },
   {
    "type": "prog",
    "name": "删除数组中所有等于 x 的元素",
    "difficulty": "⭐⭐",
    "desc": "从标准输入读入 n 个整数和一个目标值 x，删除数组中所有等于 x 的元素，其余元素保持相对顺序前移，输出删除后的数组。",
    "input_format": "第一行两个整数 n 和 x（1 ≤ n ≤ 100，数组元素为整数）；第二行 n 个整数，用空格隔开。",
    "sample_in": "5 3\n3 1 3 5 3",
    "sample_out": "1 5",
    "check": "removeX",
    "hints": [
     "先用 scanf 读入 n、x 和数组；用一个「写入位置」k 指向新数组末尾（初始 0），再拿一个指针 i 从头遍历原数组。",
     "遍历时：a[i] 不等于 x 就写入 a[k] 并 k++；等于 x 就直接跳过、不写入。",
     "遍历结束后，a[0] ~ a[k-1] 就是删除后的数组，输出这 k 个元素。这就是「原地覆盖」，不需要真的删除。"
    ],
    "answer": "#include <stdio.h>\n\nint main() {\n    int n, x;\n    scanf(\"%d %d\", &n, &x);          // 读入 n 和 x\n    int a[100];\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);         // 读入数组\n    }\n    int k = 0;                        // k: 写入位置（也是新长度）\n    for (int i = 0; i < n; i++) {\n        if (a[i] != x) {              // 不是要删的，保留到前面\n            a[k] = a[i];\n            k++;\n        }\n    }\n    for (int i = 0; i < k; i++) {     // 输出删除后的数组\n        printf(\"%d \", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
    "notes": "核心思想是「原地覆盖」：不真的删元素，而是把要保留的元素往前面挪，用 k 记录新长度。时间复杂度 O(n)、空间 O(1)。写完后把自测区的输入数据贴进你的 C 程序跑一遍，输出一致就对了。这个「双指针/快慢指针」技巧在蓝桥杯里非常常用。"
   }
  ]
 },
 {
  "id": 2,
  "title": "链表",
  "items": [
   {
    "type": "read",
    "name": "读代码：链表的创建与遍历",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node {\n    int val;\n    struct Node *next;\n} Node;\nNode *newNode(int v) {\n    Node *p = (Node *)malloc(sizeof(Node));\n    p->val = v; p->next = NULL;\n    return p;\n}\nint main() {\n    Node *head = newNode(10);\n    head->next = newNode(20);\n    head->next->next = newNode(30);\n    for (Node *c = head; c != NULL; c = c->next) {\n        printf(\"%d \", c->val);\n    }\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["10 20 30", "30 20 10", "10 20", "20 30 40"],
    "answer": 0,
    "explain": "从 head 开始顺着 next 走，依次输出 10、20、30，遇到 NULL 结束。链表节点的 val 分别是 10、20、30。"
   },
   {
    "type": "fill",
    "name": "补全代码：链表遍历条件",
    "desc": "遍历链表并输出每个节点的值。补全 for 循环的条件。",
    "code": "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node {\n    int val;\n    struct Node *next;\n} Node;\nint main() {\n    Node *head = NULL;\n    // ... 创建链表，head 指向第一个节点 ...\n    for (Node *c = head; ____; c = c->next) {\n        printf(\"%d \", c->val);\n    }\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["c != NULL", "c == NULL", "c->next != NULL", "c->val != 0"],
    "answer": 0,
    "explain": "链表最后一个节点的 next 是 NULL。条件 c != NULL：当 c 走到 NULL 说明链表遍历完了。c == NULL 一开始就结束，c->next != NULL 会漏掉最后一个节点。"
   },
   {
    "type": "prog",
    "name": "反转链表",
    "difficulty": "⭐⭐",
    "desc": "读入 n 个整数，按顺序建成链表，把链表反转后输出所有节点的值。",
    "input_format": "第一行一个整数 n（1 ≤ n ≤ 100）；第二行 n 个整数（链表节点值，按顺序）。",
    "sample_in": "5\n1 2 3 4 5",
    "sample_out": "5 4 3 2 1",
    "check": "reverseList",
    "hints": [
     "先读入数组，用 newNode 逐个建节点，用 tail 尾插法串成链表。",
     "反转用「三指针」：prev=NULL、cur=head。每步先记下 nxt = cur->next，然后 cur->next = prev（翻转），再 prev=cur、cur=nxt 前移。",
     "循环结束时 prev 指向新链表的头，从 prev 开始输出就是反转后的顺序。"
    ],
    "answer": "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node {\n    int val;\n    struct Node *next;\n} Node;\nNode *newNode(int v) {\n    Node *p = (Node *)malloc(sizeof(Node));\n    p->val = v; p->next = NULL;\n    return p;\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    Node *head = NULL, *tail = NULL;\n    for (int i = 0; i < n; i++) {\n        int v;\n        scanf(\"%d\", &v);\n        Node *p = newNode(v);\n        if (!head) head = tail = p;\n        else { tail->next = p; tail = p; }\n    }\n    // 三指针反转\n    Node *prev = NULL, *cur = head;\n    while (cur != NULL) {\n        Node *nxt = cur->next;   // 先存下一个，防止断链\n        cur->next = prev;        // 翻转\n        prev = cur;              // 前移\n        cur = nxt;\n    }\n    for (Node *c = prev; c != NULL; c = c->next) {\n        printf(\"%d \", c->val);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
    "notes": "反转核心是「三指针」：prev / cur / nxt。每步先存 nxt 防止断链，再把 cur->next 指向 prev，最后两个指针各前移一步。结束时 prev 就是新头。时间 O(n)、空间 O(1)。这个题蓝桥杯和面试都常考。"
   }
  ]
 },
 {
  "id": 3,
  "title": "栈与队列",
  "items": [
   {
    "type": "read",
    "name": "读代码：栈的入栈出栈",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\nint stack[100], top = -1;\nint main() {\n    stack[++top] = 5;   // 入栈\n    stack[++top] = 8;\n    stack[++top] = 3;\n    printf(\"%d \", stack[top--]);  // 出栈（后进先出）\n    printf(\"%d\\n\", stack[top]);   // 看现在的栈顶\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["3 8", "8 3", "3 5", "5 3"],
    "answer": 0,
    "explain": "栈是后进先出（LIFO）：先出栈的是最后进去的 3；出栈后栈顶变成 8，所以第二行输出 8。"
   },
   {
    "type": "fill",
    "name": "补全代码：括号入栈",
    "desc": "统计字符串里有多少个左括号没被匹配。补全入栈操作。",
    "code": "#include <stdio.h>\nchar stack[100];\nint top = -1;\nint main() {\n    char s[] = \"(()\";\n    for (int i = 0; s[i]; i++) {\n        if (s[i] == '(') {\n            ____;        // 左括号入栈\n        } else if (top >= 0) {\n            top--;       // 右括号弹栈\n        }\n    }\n    printf(\"%d\\n\", top);  // 栈里还剩几个左括号\n    return 0;\n}",
    "explain": "top 初始 -1，++top 先把栈顶指针上移再写入，第一个入栈元素在 stack[0]。「(()」入栈两个左括号（top=1），一个被右括号匹配弹出（top=0），输出 0——还剩 1 个左括号在下标 0 位置。",
    "q": "横线处应填什么？",
    "options": ["stack[++top] = s[i]", "stack[top++] = s[i]", "stack[top] = s[i]", "top = s[i]"],
    "answer": 0,
   },
   {
    "type": "prog",
    "name": "括号匹配",
    "difficulty": "⭐⭐",
    "desc": "读入一个只含 ()[]{} 的括号字符串，判断括号是否匹配（左右配对且顺序正确），匹配输出 YES，否则输出 NO。",
    "input_format": "一行字符串，只含括号字符 ()[]{}，长度不超过 100。",
    "sample_in": "({[]})",
    "sample_out": "YES",
    "check": "bracketMatch",
    "hints": [
     "遇到左括号 ( [ { 就入栈。",
     "遇到右括号：如果栈空，说明没有左括号配对，直接 NO；否则弹出栈顶，检查是否和当前右括号匹配（() [] {}）。",
     "全部处理完后，栈必须为空才是 YES（防止左括号多余）。"
    ],
    "answer": "#include <stdio.h>\n\nint main() {\n    char s[100];\n    scanf(\"%s\", s);\n    char stack[100];\n    int top = -1, ok = 1;\n    for (int i = 0; s[i] && ok; i++) {\n        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {\n            stack[++top] = s[i];          // 左括号入栈\n        } else {\n            if (top < 0) { ok = 0; break; }   // 没有左括号配\n            char t = stack[top--];\n            if (!((t == '(' && s[i] == ')') ||\n                  (t == '[' && s[i] == ']') ||\n                  (t == '{' && s[i] == '}'))) {\n                ok = 0;                   // 配对错误\n            }\n        }\n    }\n    if (ok && top < 0) printf(\"YES\\n\");  // 栈空才合法\n    else printf(\"NO\\n\");\n    return 0;\n}",
    "notes": "经典栈应用。三个要点：右括号必须和栈顶匹配、栈空遇右括号即失败、处理完栈必须为空。把样例和其他组合（如 ([)] 应该输出 NO）贴进自测区验证。蓝桥杯和校招常考。"
   }
  ]
 },
 {
  "id": 4,
  "title": "哈希表",
  "items": [
   {
    "type": "read",
    "name": "读代码：数组模拟哈希统计",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\nint cnt[10] = {0};\nint main() {\n    int a[] = {1, 3, 3, 5, 3};\n    for (int i = 0; i < 5; i++) {\n        cnt[a[i]]++;     // 值当下标，计数\n    }\n    printf(\"%d\\n\", cnt[3]);\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["3", "2", "1", "5"],
    "answer": 0,
    "explain": "cnt[3] 统计数字 3 出现的次数：数组里 3 出现 3 次（下标 1、2、4），所以输出 3。「值当下标」就是最简单的哈希思想。"
   },
   {
    "type": "fill",
    "name": "补全代码：数组去重",
    "desc": "统计数组里去重后还剩几个不同的数字。补全判断条件。",
    "code": "#include <stdio.h>\nint seen[100] = {0};\nint main() {\n    int a[] = {2, 3, 2, 5, 3, 2};\n    int cnt = 0;\n    for (int i = 0; i < 6; i++) {\n        if (____) {        // 这个数还没出现过\n            seen[a[i]] = 1;\n            cnt++;\n        }\n    }\n    printf(\"%d\\n\", cnt);\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["!seen[a[i]]", "seen[a[i]]", "seen[i]", "a[i] == 0"],
    "answer": 0,
    "explain": "seen[x]=1 表示 x 出现过。!seen[a[i]] 为真说明 a[i] 第一次出现，标记并计数。{2,3,5} 去重后共 3 个。这就是哈希集合的去重思路。"
   },
   {
    "type": "prog",
    "name": "两数之和",
    "difficulty": "⭐⭐",
    "desc": "读入 n 个互不相同的整数和一个目标值 target，找出两个数之和等于 target，输出它们的下标（小的在前）。保证有解。",
    "input_format": "第一行两个整数 n 和 target（2 ≤ n ≤ 1000，数值在 int 范围内）；第二行 n 个互不相同的整数。",
    "sample_in": "4 9\n2 7 11 15",
    "sample_out": "0 1",
    "check": "twoSum",
    "hints": [
     "暴力是双重循环 O(n²)。用哈希表做到 O(n)：存「值 → 下标」。",
     "遍历每个数 a[i]，检查 target - a[i] 是不是已经在哈希表里。",
     "在就直接输出两个下标（先存的后输出小的在前）；不在就把 a[i] 和它的下标存进表。"
    ],
    "answer": "#include <stdio.h>\n#include <stdlib.h>\ntypedef struct KV { int key, val; struct KV *next; } KV;\nKV *table[1000];\nint hash(int k) { return ((k % 1000) + 1000) % 1000; }\nvoid put(int k, int v) {\n    int h = hash(k);\n    KV *p = (KV *)malloc(sizeof(KV));\n    p->key = k; p->val = v;\n    p->next = table[h];\n    table[h] = p;\n}\nint get(int k) {\n    int h = hash(k);\n    for (KV *p = table[h]; p; p = p->next) {\n        if (p->key == k) return p->val;\n    }\n    return -1;\n}\nint main() {\n    int n, target;\n    scanf(\"%d %d\", &n, &target);\n    int a[1000];\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    for (int i = 0; i < n; i++) {\n        int need = target - a[i];\n        int j = get(need);\n        if (j >= 0) {           // 找到了\n            printf(\"%d %d\\n\", j, i);\n            return 0;\n        }\n        put(a[i], i);           // 没找到，先存起来\n    }\n    return 0;\n}",
    "notes": "经典哈希题：把「值 → 下标」存进哈希表，遍历时查 target - 当前值。暴力 O(n²) 会超时，哈希 O(n)。这个「查表」思路在蓝桥杯里非常常用。"
   }
  ]
 },
 {
  "id": 5,
  "title": "树与二叉树",
  "items": [
   {
    "type": "read",
    "name": "读代码：前序遍历",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\ntypedef struct TNode {\n    int val;\n    struct TNode *left, *right;\n} TNode;\nvoid pre(TNode *n) {\n    if (n == NULL) return;\n    printf(\"%d \", n->val);   // 根\n    pre(n->left);             // 左\n    pre(n->right);            // 右\n}\nint main() {\n    TNode a = {1, 0, 0}, b = {2, 0, 0}, c = {3, 0, 0};\n    a.left = &b;\n    a.right = &c;\n    pre(&a);\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["1 2 3", "2 1 3", "2 3 1", "1 3 2"],
    "answer": 0,
    "explain": "前序 = 根 → 左 → 右：先输出根 1，再递归左子树（输出 2），再递归右子树（输出 3），所以是 1 2 3。"
   },
   {
    "type": "fill",
    "name": "补全代码：递归的终止条件",
    "desc": "统计二叉树节点个数。补全递归函数里最重要的那行。",
    "code": "#include <stdio.h>\ntypedef struct TNode {\n    int val;\n    struct TNode *left, *right;\n} TNode;\nvoid count(TNode *n, int *cnt) {\n    if (____) return;     // 空节点：递归刹车\n    (*cnt)++;\n    count(n->left, cnt);\n    count(n->right, cnt);\n}\nint main() {\n    TNode a = {1, 0, 0};\n    int cnt = 0;\n    count(&a, &cnt);\n    printf(\"%d\\n\", cnt);\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["n == NULL", "n != NULL", "cnt == 0", "n->left == NULL"],
    "answer": 0,
    "explain": "if (n == NULL) return; 是树递归的「刹车」：遇到空节点直接返回，防止无限递归。这是所有树遍历/递归题目的第一行。"
   },
   {
    "type": "prog",
    "name": "数组存树：前序输出",
    "difficulty": "⭐⭐",
    "desc": "用数组存一棵二叉树（下标 1 是根，节点 i 的左孩子是 2i、右孩子是 2i+1，-1 表示空节点），按前序遍历顺序输出所有节点值。",
    "input_format": "第一行一个整数 n（1 ≤ n ≤ 100）；第二行 n 个整数（-100 到 100，-1 表示空节点）。",
    "sample_in": "7\n1 2 3 4 5 6 7",
    "sample_out": "1 2 4 5 3 6 7",
    "check": "treePreorder",
    "hints": [
     "数组下标从 1 开始存节点：a[1] 是根，a[2]、a[3] 是根的左右孩子。",
     "前序递归：输出当前节点 → 递归左孩子（下标 2i）→ 递归右孩子（下标 2i+1）。",
     "递归出口：下标越界（i > n）或者 a[i] == -1（空节点）就返回。"
    ],
    "answer": "#include <stdio.h>\nint a[100];\nint n;\nvoid pre(int i) {\n    if (i > n || a[i] == -1) return;   // 越界或空节点\n    printf(\"%d \", a[i]);\n    pre(i * 2);      // 左孩子\n    pre(i * 2 + 1);  // 右孩子\n}\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    pre(1);\n    printf(\"\\n\");\n    return 0;\n}",
    "notes": "数组存树（堆式存储）是比赛常用技巧：不建结构体，用下标关系表示父子。前序 = 根左右，递归三行搞定。"
   }
  ]
 },
 {
  "id": 6,
  "title": "图",
  "items": [
   {
    "type": "read",
    "name": "读代码：DFS 遍历",
    "desc": "运行下面这段程序，预测它的输出结果（图：0-1、0-2、1-3）。",
    "code": "#include <stdio.h>\nint g[5][5], vis[5];\nvoid dfs(int u) {\n    vis[u] = 1;\n    printf(\"%d \", u);\n    for (int i = 0; i < 5; i++) {\n        if (g[u][i] && !vis[i]) dfs(i);\n    }\n}\nint main() {\n    g[0][1] = g[1][0] = 1;   // 0-1\n    g[0][2] = g[2][0] = 1;   // 0-2\n    g[1][3] = g[3][1] = 1;   // 1-3\n    dfs(0);\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["0 1 3 2", "0 2 1 3", "0 1 2 3", "3 1 0 2"],
    "answer": 0,
    "explain": "DFS 一条路走到底：0 → 1（第一个邻居）→ 3（1 的邻居），3 没有未访问邻居，回到 1、再回到 0，然后走 2。顺序：0 1 3 2。"
   },
   {
    "type": "fill",
    "name": "补全代码：BFS 入队条件",
    "desc": "BFS 遍历图，把没访问过的邻居入队。补全 if 条件。",
    "code": "#include <stdio.h>\nint g[5][5], vis[5];\nvoid bfs(int start) {\n    int q[100], h = 0, t = 0;\n    q[t++] = start;\n    vis[start] = 1;\n    while (h < t) {\n        int u = q[h++];\n        printf(\"%d \", u);\n        for (int i = 0; i < 5; i++) {\n            if (g[u][i] && ____) {   // 有边且没访问过\n                vis[i] = 1;\n                q[t++] = i;\n            }\n        }\n    }\n}\nint main() {\n    g[0][1] = g[1][0] = 1;\n    bfs(0);\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["!vis[i]", "vis[i]", "i != u", "g[i][u]"],
    "answer": 0,
    "explain": "只把没访问过的邻居入队（!vis[i]），并在入队时立刻标记 vis[i]=1。如果不标记，无向图里会互相指导致死循环。"
   },
   {
    "type": "prog",
    "name": "判断连通性",
    "difficulty": "⭐⭐",
    "desc": "读入一个无向图和起点终点（0 到 n-1），判断从 0 号点能否到达 n-1 号点，能输出 YES，否则输出 NO。",
    "input_format": "第一行两个整数 n 和 m（1 ≤ n ≤ 100，顶点编号 0~n-1，m 条边）；接下来 m 行，每行两个整数表示一条边。",
    "sample_in": "4 3\n0 1\n1 2\n2 3",
    "sample_out": "YES",
    "check": "connected",
    "hints": [
     "用邻接矩阵存图：g[a][b] = g[b][a] = 1。",
     "从 0 出发 DFS：访问当前点 → 标记 → 递归没访问过的邻居。",
     "DFS 结束后看 vis[n-1] 是否被标记，就知道能不能到终点。"
    ],
    "answer": "#include <stdio.h>\nint g[100][100], vis[100];\nint n, m;\nvoid dfs(int u) {\n    vis[u] = 1;\n    for (int i = 0; i < n; i++) {\n        if (g[u][i] && !vis[i]) dfs(i);\n    }\n}\nint main() {\n    scanf(\"%d %d\", &n, &m);\n    for (int i = 0; i < m; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        g[a][b] = g[b][a] = 1;   // 无向图加双向\n    }\n    dfs(0);\n    if (vis[n - 1]) printf(\"YES\\n\");\n    else printf(\"NO\\n\");\n    return 0;\n}",
    "notes": "无向图连通性判断：DFS 从起点把所有能到的点都标记，最后看终点有没有被访问到。visited 数组是图遍历的核心，防止死循环。"
   }
  ]
 },
 {
  "id": 7,
  "title": "排序算法",
  "items": [
   {
    "type": "read",
    "name": "读代码：快速排序",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\nvoid qs(int a[], int l, int h) {\n    if (l >= h) return;\n    int p = a[l], i = l, j = h;\n    while (i < j) {\n        while (i < j && a[j] >= p) j--;\n        a[i] = a[j];\n        while (i < j && a[i] <= p) i++;\n        a[j] = a[i];\n    }\n    a[i] = p;\n    qs(a, l, i - 1);\n    qs(a, i + 1, h);\n}\nint main() {\n    int a[] = {3, 1, 4, 1, 5};\n    qs(a, 0, 4);\n    for (int i = 0; i < 5; i++) printf(\"%d \", a[i]);\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["1 1 3 4 5", "3 1 4 1 5", "5 4 3 1 1", "1 3 1 4 5"],
    "answer": 0,
    "explain": "快排结果升序：1 1 3 4 5。相等的元素（两个 1）也会被正确排序。"
   },
   {
    "type": "fill",
    "name": "补全代码：交换两个变量",
    "desc": "交换两个指针指向的值。补全交换逻辑。",
    "code": "#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int t = ____;   // 先存下 *a\n    *a = *b;\n    *b = t;\n}\nint main() {\n    int x = 3, y = 5;\n    swap(&x, &y);\n    printf(\"%d %d\\n\", x, y);\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["*a", "a", "&a", "t"],
    "answer": 0,
    "explain": "交换两个指针指向的值：先用 t 保存 *a 的值，再把 *b 赋给 *a，最后把 t（原 *a）赋给 *b。选 a 或 &a 是交换了地址不是值。"
   },
   {
    "type": "prog",
    "name": "结构体排序",
    "difficulty": "⭐⭐",
    "desc": "读入 n 个学生（姓名 + 分数），按分数从高到低排序，输出排序后的姓名（分数相同的按输入顺序）。",
    "input_format": "第一行一个整数 n（1 ≤ n ≤ 100）；接下来 n 行，每行一个姓名（无空格）和一个整数分数。",
    "sample_in": "3\nzhangsan 90\nlisi 95\nwangwu 85",
    "sample_out": "lisi zhangsan wangwu",
    "check": "sortScore",
    "hints": [
     "定义结构体 Stu { name, score }，读入存进数组。",
     "qsort 要自己写比较函数 cmp：返回 (Stu*)b->score - (Stu*)a->score 实现降序。",
     "qsort 的 cmp 返回负数表示 a 在前，正数表示 b 在前。分数相同时 cmp 返回 0，qsort 不保证稳定，但简单场景够用。"
    ],
    "answer": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\ntypedef struct Stu {\n    char name[30];\n    int score;\n} Stu;\nint cmp(const void *a, const void *b) {\n    return ((Stu *)b)->score - ((Stu *)a)->score;  // 降序\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    Stu s[100];\n    for (int i = 0; i < n; i++) {\n        scanf(\"%s %d\", s[i].name, &s[i].score);\n    }\n    qsort(s, n, sizeof(Stu), cmp);\n    for (int i = 0; i < n; i++) printf(\"%s \", s[i].name);\n    printf(\"\\n\");\n    return 0;\n}",
    "notes": "qsort 的 cmp 比较函数是精髓：返回负数 a 在前、正数 b 在前。结构体排序（成绩排名、时间排序）是蓝桥杯必考套路。"
   }
  ]
 },
 {
  "id": 8,
  "title": "查找算法",
  "items": [
   {
    "type": "read",
    "name": "读代码：二分查找",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\nint bs(int a[], int n, int t) {\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int m = l + (r - l) / 2;\n        if (a[m] == t) return m;\n        else if (a[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}\nint main() {\n    int a[] = {1, 3, 5, 7, 9};\n    printf(\"%d %d\\n\", bs(a, 5, 7), bs(a, 5, 4));\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["3 -1", "4 -1", "3 2", "2 -1"],
    "answer": 0,
    "explain": "7 在数组下标 3；4 不存在，返回 -1。二分每次砍一半，查找 O(logn)。"
   },
   {
    "type": "fill",
    "name": "补全代码：防溢出的 mid",
    "desc": "二分查找里计算中间位置。补全 mid 的写法。",
    "code": "#include <stdio.h>\nint bs(int a[], int n, int t) {\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int m = ____;      // 防溢出写法\n        if (a[m] == t) return m;\n        else if (a[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}\nint main() {\n    int a[] = {1, 3, 5, 7, 9};\n    printf(\"%d\\n\", bs(a, 5, 7));\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["l + (r - l) / 2", "(l + r) / 2", "l + r / 2", "(r - l) / 2"],
    "answer": 0,
    "explain": "l + (r-l)/2 等价于 (l+r)/2，但 l+r 可能超出 int 范围溢出（数据很大时），防溢出写法更安全。l + r/2 是错的，会把 l 也除以 2。"
   },
   {
    "type": "prog",
    "name": "lower_bound：第一个 ≥ target 的位置",
    "difficulty": "⭐⭐",
    "desc": "读入一个升序数组和一个目标值 target，输出第一个 ≥ target 的元素下标（0 开始）。如果全部小于 target，输出 n。",
    "input_format": "第一行两个整数 n 和 target（1 ≤ n ≤ 100）；第二行 n 个升序整数。",
    "sample_in": "7 5\n1 3 5 5 7 9 11",
    "sample_out": "2",
    "check": "lowerBound",
    "hints": [
     "和普通二分不同：找到相等的值不立即返回，继续往左边找，保证是「第一个」。",
     "用左闭右开区间 [l, r)：a[m] >= target 时 r = m（左边可能还有），否则 l = m + 1。",
     "循环结束 l == r，l 就是第一个 ≥ target 的位置；如果全是 < target，l 会走到 n。"
    ],
    "answer": "#include <stdio.h>\nint main() {\n    int n, target;\n    scanf(\"%d %d\", &n, &target);\n    int a[100];\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    int l = 0, r = n;          // 左闭右开区间\n    while (l < r) {\n        int m = l + (r - l) / 2;\n        if (a[m] >= target) r = m;   // 左边可能还有，向左缩\n        else l = m + 1;\n    }\n    printf(\"%d\\n\", l);\n    return 0;\n}",
    "notes": "lower_bound 是二分模板题：区间 [l, r)，a[m] >= target 时收缩右边界，结束时 l 就是第一个满足条件的位置。对应 C++ 标准库的 lower_bound，蓝桥杯查找题常考变体。"
   }
  ]
 },
 {
  "id": 9,
  "title": "动态规划入门",
  "items": [
   {
    "type": "read",
    "name": "读代码：爬楼梯 DP",
    "desc": "运行下面这段程序，预测它的输出结果。",
    "code": "#include <stdio.h>\nint main() {\n    int n = 5;\n    int dp[10] = {0};\n    dp[1] = 1;   // 边界\n    dp[2] = 2;   // 边界\n    for (int i = 3; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];  // 状态转移\n    }\n    printf(\"%d\\n\", dp[5]);\n    return 0;\n}",
    "q": "这段代码的输出是？",
    "options": ["8", "5", "13", "6"],
    "answer": 0,
    "explain": "dp[3]=3, dp[4]=5, dp[5]=8。爬楼梯 5 阶有 8 种方法，这就是斐波那契数列。"
   },
   {
    "type": "fill",
    "name": "补全代码：状态转移方程",
    "desc": "爬楼梯：每次爬 1 或 2 阶。补全 dp 的状态转移。",
    "code": "#include <stdio.h>\nint main() {\n    int n = 5;\n    int dp[10] = {0};\n    dp[1] = 1;\n    dp[2] = 2;\n    for (int i = 3; i <= n; i++) {\n        dp[i] = ____;   // 最后一步：从 i-1 爬1阶 或 从 i-2 爬2阶\n    }\n    printf(\"%d\\n\", dp[n]);\n    return 0;\n}",
    "q": "横线处应填什么？",
    "options": ["dp[i - 1] + dp[i - 2]", "dp[i - 1] * dp[i - 2]", "dp[i + 1] + dp[i + 2]", "dp[i] + 1"],
    "answer": 0,
    "explain": "到第 i 阶的方法 = 从 i-1 爬 1 阶 + 从 i-2 爬 2 阶，即 dp[i] = dp[i-1] + dp[i-2]。这是 DP 的「状态转移方程」。"
   },
   {
    "type": "prog",
    "name": "最大子段和",
    "difficulty": "⭐⭐⭐",
    "desc": "读入 n 个整数（可能有负数），求连续子数组的最大和。",
    "input_format": "第一行一个整数 n（1 ≤ n ≤ 100）；第二行 n 个整数（-1000 到 1000）。",
    "sample_in": "9\n-2 1 -3 4 -1 2 1 -5 4",
    "sample_out": "6",
    "check": "maxSubSum",
    "hints": [
     "dp[i] 表示「以第 i 个数结尾」的最大连续和。",
     "转移：dp[i] = max(a[i], dp[i-1] + a[i])。要么从 i 重新开始，要么接着前面的。",
     "答案 = 所有 dp[i] 的最大值。可以用两个变量滚动，省掉数组。"
    ],
    "answer": "#include <stdio.h>\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    int a[100];\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    int dp = a[0], ans = a[0];\n    for (int i = 1; i < n; i++) {\n        dp = a[i] > dp + a[i] ? a[i] : dp + a[i];  // 状态转移\n        if (dp > ans) ans = dp;\n    }\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
    "notes": "Kadane 算法：dp[i] = max(a[i], dp[i-1] + a[i])，要么从 i 重新开始，要么接着前面。滚动变量省空间，O(n) 时间。这是 DP 的经典入门题。"
   }
  ]
 }
];
