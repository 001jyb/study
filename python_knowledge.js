var pythonKnowledge = [
 {
  "ch": 1,
  "icon": "🐍",
  "title": "变量与类型",
  "points": [
   {
    "name": "变量赋值",
    "desc": "变量 = 值，Python 动态类型，无需声明直接赋值",
    "tip": "a = 5 后 a 可再赋字符串，类型随值变",
    "rel": [
     1,
     2
    ]
   },
   {
    "name": "多变量与交换",
    "desc": "a, b = 1, 2 一行赋值多个；a, b = b, a 交换",
    "tip": "本质是元组解包",
    "rel": [
     3,
     2
    ]
   },
   {
    "name": "基本类型",
    "desc": "int 整数、float 小数、str 字符串、bool 布尔、None 空值",
    "tip": "type(值) 可查看类型",
    "rel": [
     4,
     5,
     10
    ]
   },
   {
    "name": "数字运算",
    "desc": "+ - * / 除、// 地板除、% 取余、** 幂",
    "tip": "10/3=3.33，10//3=3，-8//3=-3（向下取整）",
    "rel": [
     11,
     12,
     13,
     14
    ]
   },
   {
    "name": "浮点精度",
    "desc": "浮点运算有误差，0.1+0.2 ≠ 0.3",
    "tip": "用 round(数, 小数位) 处理",
    "rel": [
     15
    ]
   },
   {
    "name": "类型转换",
    "desc": "int()/float()/str() 转换类型",
    "tip": "int(3.99)=3 截断不四舍五入；int(\"123\") 字符串转数字",
    "rel": [
     16,
     18
    ]
   },
   {
    "name": "复合赋值",
    "desc": "+= -= *= /= 等，x += 5 等价 x = x + 5",
    "tip": "还有 //= %= **=",
    "rel": [
     17
    ]
   },
   {
    "name": "布尔与 None",
    "desc": "True/False 首字母大写；None 表示空值",
    "tip": "if None 为假；None 不是 0 也不是空字符串",
    "rel": [
     5,
     6,
     66
    ]
   }
  ]
 },
 {
  "ch": 2,
  "icon": "🔤",
  "title": "字符串",
  "points": [
   {
    "name": "不可变性",
    "desc": "字符串内容不可改，修改方法都返回新串",
    "tip": "s.upper() 不改变 s 本身",
    "rel": [
     30
    ]
   },
   {
    "name": "索引与切片",
    "desc": "s[0] 第一个字符、s[-1] 最后一个；s[1:3] 切片、s[::2] 步长",
    "tip": "切片 [开始:结束:步长]，结束不包含",
    "rel": [
     23,
     24
    ]
   },
   {
    "name": "拼接与重复",
    "desc": "a + b 拼接、a * 3 重复、\"sep\".join(列表) 连接",
    "tip": "大量拼接用 join 更高效",
    "rel": [
     21,
     22,
     34
    ]
   },
   {
    "name": "大小写与空白",
    "desc": "upper()/lower()/capitalize()/title()；strip() 去首尾空白",
    "tip": "strip 只去首尾，中间保留",
    "rel": [
     31,
     32
    ]
   },
   {
    "name": "查找与统计",
    "desc": "find()/index() 找位置（找不到 find 返回 -1）、count() 统计次数",
    "tip": "startswith()/endswith() 判断开头结尾",
    "rel": [
     45,
     49
    ]
   },
   {
    "name": "分割与替换",
    "desc": "split(分隔符) 拆成列表；replace(旧, 新) 替换",
    "tip": "split 不指定分隔符按空白拆",
    "rel": [
     33,
     35
    ]
   },
   {
    "name": "字符判断",
    "desc": "isalpha() 字母、isdigit() 数字、isalnum() 字母数字",
    "tip": "isalnum 不含空格",
    "rel": [
     40
    ]
   },
   {
    "name": "格式化",
    "desc": "f\"{变量}\" 最常用；\"{}\".format()；\"%.1f%%\" 百分号",
    "tip": "f-string 里可写表达式 f\"{a+b}\"",
    "rel": [
     131,
     132,
     133,
     134,
     135
    ]
   }
  ]
 },
 {
  "ch": 3,
  "icon": "📋",
  "title": "列表",
  "points": [
   {
    "name": "创建与访问",
    "desc": "[1,2,3] 或 list()；下标 0 起、负数从右数",
    "tip": "fruits[0] 第一个，fruits[-1] 最后一个",
    "rel": [
     56
    ]
   },
   {
    "name": "增删元素",
    "desc": "append 末尾加、insert(位置, 值) 插入、pop() 删末尾、remove(值) 删指定、clear() 清空",
    "tip": "pop 有返回值，remove 按值删第一个",
    "rel": [
     42,
     43,
     44,
     50
    ]
   },
   {
    "name": "查找与统计",
    "desc": "index(值) 找下标、count(值) 统计次数、in 判断存在",
    "tip": "index 找不到抛 ValueError",
    "rel": [
     45,
     49
    ]
   },
   {
    "name": "排序与反转",
    "desc": "sort() 原地排序（reverse=True 降序）、reverse() 原地反转",
    "tip": "sorted() 返回新列表不改变原列表",
    "rel": [
     46,
     47
    ]
   },
   {
    "name": "列表切片",
    "desc": "l[1:3]、l[:2]、l[::-1] 反转复制、l[::2] 隔一个取",
    "tip": "切片返回新列表",
    "rel": [
     48
    ]
   },
   {
    "name": "列表推导式",
    "desc": "[表达式 for 变量 in 序列 if 条件]",
    "tip": "一行生成新列表，比 for 循环简洁",
    "rel": [
     111,
     112,
     117
    ]
   },
   {
    "name": "嵌套列表",
    "desc": "二维列表 matrix[i][j] 访问",
    "tip": "矩阵转置/扁平化用推导式",
    "rel": [
     115,
     118,
     119
    ]
   }
  ]
 },
 {
  "ch": 4,
  "icon": "🧩",
  "title": "元组与集合",
  "points": [
   {
    "name": "元组",
    "desc": "(1,2,3) 不可变序列，创建后不能改",
    "tip": "单元素元组要加逗号 (1,)",
    "rel": [
     51,
     52
    ]
   },
   {
    "name": "元组解包",
    "desc": "a, b, c = (1, 2, 3) 按位置解包",
    "tip": "变量数必须等于元素数",
    "rel": [
     51,
     174
    ]
   },
   {
    "name": "集合",
    "desc": "{1,2,3} 无序、自动去重",
    "tip": "set(列表) 快速去重",
    "rel": [
     53
    ]
   },
   {
    "name": "集合运算",
    "desc": "| 并集、& 交集、- 差集",
    "tip": "a-b 是 a 有 b 没有的",
    "rel": [
     54
    ]
   },
   {
    "name": "成员检测",
    "desc": "x in 集合 O(1) 判断存在",
    "tip": "比列表 in 快",
    "rel": [
     55
    ]
   }
  ]
 },
 {
  "ch": 5,
  "icon": "📖",
  "title": "字典",
  "points": [
   {
    "name": "创建与访问",
    "desc": "{\"key\": value}；d[key] 取值",
    "tip": "键不存在 d[key] 抛 KeyError",
    "rel": [
     56
    ]
   },
   {
    "name": "安全获取",
    "desc": "d.get(key, 默认值) 键不存在返回默认值",
    "tip": "比 d[key] 安全，不报错",
    "rel": [
     60
    ]
   },
   {
    "name": "增删改",
    "desc": "d[k] = v 新增或覆盖；del d[k] 删除；pop(k) 删除并返回",
    "tip": "键不可重复，重复赋值覆盖",
    "rel": [
     57,
     58
    ]
   },
   {
    "name": "遍历",
    "desc": "for k in d 遍历键；d.keys()/d.values()/d.items()",
    "tip": "items() 同时拿键值",
    "rel": [
     59,
     80
    ]
   },
   {
    "name": "字典推导式",
    "desc": "{k: v for k, v in ...}",
    "tip": "键值对快速构建",
    "rel": [
     113
    ]
   }
  ]
 },
 {
  "ch": 6,
  "icon": "🚦",
  "title": "流程控制",
  "points": [
   {
    "name": "if/elif/else",
    "desc": "多分支判断，条件后加冒号，代码块缩进",
    "tip": "从高到低排条件",
    "rel": [
     61,
     62,
     63,
     64
    ]
   },
   {
    "name": "逻辑运算",
    "desc": "and 且、or 或、not 非",
    "tip": "短路：and 左边假不算右边；or 左边真不算右边",
    "rel": [
     64,
     70
    ]
   },
   {
    "name": "三目运算",
    "desc": "x if 条件 else y",
    "tip": "一行 if-else",
    "rel": [
     65
    ]
   },
   {
    "name": "成员与身份",
    "desc": "in 判断成员；is 判断同一对象",
    "tip": "== 比内容，is 比地址",
    "rel": [
     68,
     69
    ]
   },
   {
    "name": "值的存在性",
    "desc": "if x: 判断 x 是否为真（非 0/非空/非 None）",
    "tip": "空列表/空串/0/None 都是假",
    "rel": [
     66
    ]
   }
  ]
 },
 {
  "ch": 7,
  "icon": "🔁",
  "title": "循环",
  "points": [
   {
    "name": "for 与 range",
    "desc": "for i in range(开始, 结束, 步长)",
    "tip": "range(5) 是 0-4，不包含 5",
    "rel": [
     72,
     73,
     74
    ]
   },
   {
    "name": "while 循环",
    "desc": "while 条件: 循环体，注意更新条件变量",
    "tip": "忘记更新会死循环",
    "rel": [
     81,
     82,
     83,
     84
    ]
   },
   {
    "name": "break/continue",
    "desc": "break 终止循环、continue 跳过本次",
    "tip": "continue 后代码不执行直接下一轮",
    "rel": [
     78,
     84
    ]
   },
   {
    "name": "for-else/while-else",
    "desc": "循环正常结束（没 break）才执行 else",
    "tip": "找元素常用：找到 break，没找到走 else",
    "rel": [
     75,
     85
    ]
   },
   {
    "name": "enumerate/zip",
    "desc": "enumerate(列表) 拿下标和值；zip(a, b) 并行遍历",
    "tip": "zip 配对后可用 dict() 转字典",
    "rel": [
     76,
     79
    ]
   },
   {
    "name": "嵌套循环",
    "desc": "外层循环内再套循环，如乘法表",
    "tip": "外层行、内层列",
    "rel": [
     77,
     101
    ]
   }
  ]
 },
 {
  "ch": 8,
  "icon": "⚙️",
  "title": "函数与 Lambda",
  "points": [
   {
    "name": "定义与调用",
    "desc": "def 函数名(参数): 函数体；return 返回值",
    "tip": "没有 return 返回 None",
    "rel": [
     91,
     92,
     93,
     94
    ]
   },
   {
    "name": "默认参数",
    "desc": "def f(a, b=2)：b 不传时用默认值",
    "tip": "默认参数放最后",
    "rel": [
     95
    ]
   },
   {
    "name": "关键字参数",
    "desc": "f(b=2, a=1) 按名传参，顺序可打乱",
    "tip": "提高可读性",
    "rel": [
     96
    ]
   },
   {
    "name": "*args / **kwargs",
    "desc": "*args 收任意多位置参数（元组）；**kwargs 收关键字参数（字典）",
    "tip": "参数打包与解包",
    "rel": [
     97,
     98
    ]
   },
   {
    "name": "Lambda",
    "desc": "lambda 参数: 表达式，匿名小函数",
    "tip": "常配合 sorted/map/filter 用",
    "rel": [
     99,
     126
    ]
   },
   {
    "name": "map/filter/reduce",
    "desc": "map 逐个转换、filter 过滤、reduce 累积",
    "tip": "reduce 需 from functools import reduce",
    "rel": [
     121,
     122,
     123,
     127,
     128
    ]
   },
   {
    "name": "sorted 排序",
    "desc": "sorted(列表, key=函数, reverse=True)",
    "tip": "key 指定排序依据，如 len、lambda x: x[1]",
    "rel": [
     124,
     125,
     175
    ]
   },
   {
    "name": "any/all",
    "desc": "any 有一个真即真、all 全真才真",
    "tip": "常配合生成器表达式判断",
    "rel": [
     129
    ]
   }
  ]
 },
 {
  "ch": 9,
  "icon": "🌀",
  "title": "递归",
  "points": [
   {
    "name": "递归原理",
    "desc": "函数调用自己，必须有终止条件",
    "tip": "没有终止条件会栈溢出 RecursionError",
    "rel": [
     141,
     142
    ]
   },
   {
    "name": "经典递归",
    "desc": "阶乘 fact(n)=n*fact(n-1)、斐波那契、汉诺塔、二分查找",
    "tip": "先写终止条件，再写递推",
    "rel": [
     143,
     150,
     148,
     145,
     144
    ]
   },
   {
    "name": "递归 vs 循环",
    "desc": "递归代码简洁但慢（大量重复计算），可用 DP 优化",
    "tip": "斐波那契用 lru_cache 或循环",
    "rel": [
     90
    ]
   }
  ]
 },
 {
  "ch": 10,
  "icon": "⚠️",
  "title": "异常处理",
  "points": [
   {
    "name": "try-except",
    "desc": "try 放可能出错的代码，except 捕获处理",
    "tip": "except ZeroDivisionError 捕获特定异常",
    "rel": [
     136,
     137
    ]
   },
   {
    "name": "多异常与 finally",
    "desc": "多个 except 分别处理；finally 无论是否异常都执行",
    "tip": "finally 常用来关文件/资源",
    "rel": [
     138
    ]
   },
   {
    "name": "raise 与自定义异常",
    "desc": "raise 手动抛异常；class MyError(Exception) 自定义",
    "tip": "业务校验失败抛自定义异常",
    "rel": [
     139
    ]
   },
   {
    "name": "异常传递",
    "desc": "函数内不处理会向调用者逐层传递",
    "tip": "最外层不处理则程序崩溃",
    "rel": [
     140
    ]
   }
  ]
 },
 {
  "ch": 11,
  "icon": "⏳",
  "title": "生成器与迭代",
  "points": [
   {
    "name": "yield 生成器",
    "desc": "函数里用 yield 返回值，调用时惰性逐个产生",
    "tip": "next(生成器) 取下一个；节省内存",
    "rel": [
     156,
     159,
     158
    ]
   },
   {
    "name": "生成器表达式",
    "desc": "(x for x in 序列) 圆括号，惰性计算",
    "tip": "比列表推导式省内存（大数据用）",
    "rel": [
     157
    ]
   },
   {
    "name": "迭代器协议",
    "desc": "__iter__/__next__ 实现可迭代对象",
    "tip": "for 循环本质是不断 next",
    "rel": [
     204
    ]
   }
  ]
 },
 {
  "ch": 12,
  "icon": "🏛",
  "title": "类与面向对象",
  "points": [
   {
    "name": "类与实例",
    "desc": "class 类名: def __init__(self): 初始化",
    "tip": "self 指实例本身，方法第一个参数",
    "rel": [
     161
    ]
   },
   {
    "name": "类属性与实例属性",
    "desc": "类属性所有实例共享；实例属性 self.x 各自独立",
    "tip": "实例属性优先于类属性",
    "rel": [
     162
    ]
   },
   {
    "name": "staticmethod/classmethod",
    "desc": "@staticmethod 静态方法（无 self）；@classmethod 类方法（cls）",
    "tip": "装饰器修饰",
    "rel": [
     163,
     164
    ]
   },
   {
    "name": "property 属性",
    "desc": "@property 把方法变成属性访问 obj.x",
    "tip": "可以加 setter 控制赋值",
    "rel": [
     165
    ]
   },
   {
    "name": "继承",
    "desc": "class 子类(父类): 继承父类方法；super() 调父类",
    "tip": "多重继承注意 MRO 顺序",
    "rel": [
     191
    ]
   },
   {
    "name": "特殊方法",
    "desc": "__str__ 打印对象、__repr__ 调试、运算符重载 __add__",
    "tip": "print(obj) 调 __str__",
    "rel": [
     193,
     194
    ]
   },
   {
    "name": "装饰器",
    "desc": "@装饰器 给函数加功能，本质是函数套函数",
    "tip": "登录检查/计时/缓存常用",
    "rel": [
     171,
     172,
     220
    ]
   }
  ]
 },
 {
  "ch": 13,
  "icon": "🚀",
  "title": "模块与算法进阶",
  "points": [
   {
    "name": "re 正则",
    "desc": "import re；re.match/re.search/re.sub/re.findall",
    "tip": "match 从头匹配，search 找子串",
    "rel": [
     166,
     167
    ]
   },
   {
    "name": "collections",
    "desc": "Counter 计数、defaultdict 默认字典、deque 双端队列",
    "tip": "统计字符频率用 Counter 最方便",
    "rel": [
     168,
     169,
     177
    ]
   },
   {
    "name": "itertools",
    "desc": "chain 连接、permutations 排列、combinations 组合",
    "tip": "排列组合题直接用",
    "rel": [
     170,
     178,
     179
    ]
   },
   {
    "name": "动态规划",
    "desc": "dp 数组存子问题结果，避免重复计算",
    "tip": "背包/最长子序列/编辑距离都是 DP",
    "rel": [
     184,
     183,
     187,
     229
    ]
   },
   {
    "name": "双指针",
    "desc": "左右指针向中间移动，有序数组查找/三数之和",
    "tip": "比暴力 O(n²) 快",
    "rel": [
     228,
     225
    ]
   },
   {
    "name": "图与树",
    "desc": "DFS/BFS 遍历、Dijkstra 最短路、并查集、Trie 前缀树",
    "tip": "拓扑排序判断有环",
    "rel": [
     205,
     207,
     208,
     210,
     203
    ]
   },
   {
    "name": "排序算法",
    "desc": "冒泡/选择/插入/快速/归并",
    "tip": "快排选基准分左右递归",
    "rel": [
     151,
     152,
     153,
     154,
     155
    ]
   },
   {
    "name": "二分查找",
    "desc": "有序数组每次砍半，O(log n)",
    "tip": "边界条件 left <= right 注意",
    "rel": [
     148
    ]
   }
  ]
 }
];