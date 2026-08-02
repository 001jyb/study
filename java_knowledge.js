var javaKnowledge = [
 {
  "ch": 1,
  "icon": "🧱",
  "title": "语法基础",
  "points": [
   {
    "name": "变量与类型",
    "desc": "基本类型 8 种存值本身，引用类型（类/数组/String）存对象地址",
    "tip": "成员变量有默认值：int=0、double=0.0、boolean=false、引用=null；局部变量必须初始化",
    "rel": [
     231
    ]
   },
   {
    "name": "类型转换",
    "desc": "小范围→大范围自动转换，大→小必须强制转换（截断不四舍五入）",
    "tip": "3.99 强转 int 得 3，不是 4",
    "rel": [
     231
    ]
   },
   {
    "name": "运算符",
    "desc": "算术 + - * / %、比较、逻辑 && || !、赋值",
    "tip": "10/3=3（整数除法），10.0/3=3.33；短路：左边能定结果就不算右边",
    "rel": [
     241
    ]
   },
   {
    "name": "位运算",
    "desc": "& 与、| 或、^ 异或、<< 左移、>> 右移、~ 取反",
    "tip": "1<<4=16、16>>2=4、~6=-7（取反=负值减1）；异或可做无临时变量交换",
    "rel": [
     241
    ]
   },
   {
    "name": "三目运算符",
    "desc": "条件 ? 值1 : 值2，可嵌套",
    "tip": "嵌套从右往左读：a?b:(c?d:e)",
    "rel": [
     248
    ]
   },
   {
    "name": "if/else 与 switch",
    "desc": "多分支判断；switch 支持 int、String、枚举",
    "tip": "if 分支范围判断，switch 精确匹配",
    "rel": [
     222
    ]
   },
   {
    "name": "循环",
    "desc": "for、while、do-while",
    "tip": "do-while 至少执行一次；for 适合固定次数",
    "rel": [
     73,
     223
    ]
   },
   {
    "name": "break/continue/标签",
    "desc": "continue 跳过本次循环，break 终止循环",
    "tip": "标签 break（如 break outer）可一次跳出多层循环",
    "rel": [
     73,
     74
    ]
   },
   {
    "name": "方法重载",
    "desc": "同名方法、参数列表不同，编译器按实参自动匹配",
    "tip": "与返回类型无关，不能只靠返回值区分",
    "rel": [
     3
    ]
   },
   {
    "name": "可变参数",
    "desc": "类型... 参数名，可接收任意个数参数，内部按数组处理",
    "tip": "sum(1,2,3) 与 sum(1,2,3,4,5) 都能调",
    "rel": [
     40
    ]
   },
   {
    "name": "this 与构造器链",
    "desc": "this 指当前对象；this() 调用本类另一个构造器",
    "tip": "this() 必须写在构造器第一行",
    "rel": [
     0,
     247
    ]
   },
   {
    "name": "static 静态",
    "desc": "静态变量/方法属于类，所有对象共享一份",
    "tip": "静态方法里不能直接访问实例成员（没有 this）",
    "rel": [
     1
    ]
   },
   {
    "name": "final 常量",
    "desc": "final 变量赋值后不可改，通常大写命名",
    "tip": "final 类不能被继承，final 方法不能重写",
    "rel": [
     5
    ]
   },
   {
    "name": "枚举 enum",
    "desc": "一组固定常量，如 enum Color {RED, GREEN, BLUE}",
    "tip": "values() 返回全部枚举值，可遍历",
    "rel": [
     41
    ]
   },
   {
    "name": "内部类与匿名类",
    "desc": "成员内部类用 外部对象.new 内部类() 创建；匿名类 new 接口(){...} 直接实现",
    "tip": "匿名类适合一次性实现接口",
    "rel": [
     42,
     43
    ]
   }
  ]
 },
 {
  "ch": 2,
  "icon": "📦",
  "title": "数组",
  "points": [
   {
    "name": "数组创建与访问",
    "desc": "new int[5] 固定长度，下标从 0 开始，a.length 是长度",
    "tip": "数组长度创建后不可变",
    "rel": [
     232
    ]
   },
   {
    "name": "默认值与越界",
    "desc": "数值数组默认 0，引用数组默认 null",
    "tip": "访问 a[5]（长度 5）抛 ArrayIndexOutOfBoundsException",
    "rel": [
     232
    ]
   },
   {
    "name": "数组遍历",
    "desc": "for 按下标或增强 for-each 遍历",
    "tip": "for-each 不能直接改数组元素",
    "rel": [
     75
    ]
   },
   {
    "name": "二维数组",
    "desc": "int[][] 行列结构，外层行内层列",
    "tip": "行和列分别遍历；可有不规则数组",
    "rel": [
     88
    ]
   },
   {
    "name": "数组拷贝",
    "desc": "System.arraycopy 或 Arrays.copyOf",
    "tip": "copyOf(原数组, 新长度) 可扩容",
    "rel": [
     87,
     89
    ]
   },
   {
    "name": "数组排序",
    "desc": "Arrays.sort 升序；手写冒泡/选择/快速排序",
    "tip": "sort 直接改原数组",
    "rel": [
     242,
     250
    ]
   },
   {
    "name": "二分查找",
    "desc": "Arrays.binarySearch 在有序数组中查找",
    "tip": "未找到返回负数（插入点-1）；数组必须有序",
    "rel": [
     31
    ]
   },
   {
    "name": "数组填充",
    "desc": "Arrays.fill(数组, 值) 批量赋值",
    "tip": "常用于初始化",
    "rel": [
     32
    ]
   }
  ]
 },
 {
  "ch": 3,
  "icon": "🔤",
  "title": "字符串",
  "points": [
   {
    "name": "不可变性",
    "desc": "String 内容创建后不可改，所有修改方法都返回新字符串",
    "tip": "toUpperCase/replace/substring 都不动原串",
    "rel": [
     233
    ]
   },
   {
    "name": "常量池与 ==/equals",
    "desc": "字面量复用常量池；== 比地址，equals 比内容",
    "tip": "字符串比较一律用 equals；new String 强制建新对象",
    "rel": [
     233,
     11
    ]
   },
   {
    "name": "常用方法",
    "desc": "length、charAt、substring、indexOf、lastIndexOf、contains",
    "tip": "下标从 0 开始；找不到返回 -1",
    "rel": [
     8,
     9,
     10,
     56,
     57
    ]
   },
   {
    "name": "大小写与去空格",
    "desc": "toUpperCase、toLowerCase、trim",
    "tip": "trim 只去首尾空格，中间保留",
    "rel": [
     59,
     60,
     61
    ]
   },
   {
    "name": "拆分与拼接",
    "desc": "split 按分隔符拆成数组；join/concat 拼接",
    "tip": "split(\",\") 返回 String[]",
    "rel": [
     52,
     54
    ]
   },
   {
    "name": "替换与匹配",
    "desc": "replace 替换、matches 正则匹配",
    "tip": "replace 返回新串，需接收返回值",
    "rel": [
     53
    ]
   },
   {
    "name": "类型转换",
    "desc": "Integer.parseInt 字符串转数字；String.valueOf 数字转字符串；toCharArray 转字符数组",
    "tip": "parse 失败抛 NumberFormatException",
    "rel": [
     47,
     48,
     62
    ]
   },
   {
    "name": "StringBuilder",
    "desc": "可变字符串，append/insert/reverse，拼接效率高",
    "tip": "循环拼接字符串别用 +，用 StringBuilder",
    "rel": [
     12,
     243
    ]
   },
   {
    "name": "格式化",
    "desc": "String.format 和 printf：%s 字符串、%d 整数、%.1f 保留1位小数",
    "tip": "%% 输出百分号",
    "rel": [
     20,
     51
    ]
   }
  ]
 },
 {
  "ch": 4,
  "icon": "🏛",
  "title": "面向对象",
  "points": [
   {
    "name": "封装",
    "desc": "private 私有字段 + public getter/setter，在 setter 里做校验",
    "tip": "好处：保护数据、隐藏实现、改逻辑不影响外部",
    "rel": [
     234
    ]
   },
   {
    "name": "继承",
    "desc": "class 子类 extends 父类，自动拥有父类非 private 成员",
    "tip": "Java 单继承；super(参数) 调父类构造器必须第一行；super.方法() 调父类方法",
    "rel": [
     230,
     2,
     4
    ]
   },
   {
    "name": "方法重写",
    "desc": "子类用相同签名重写父类方法（可加 @Override）",
    "tip": "调用时动态绑定，实际执行子类版本",
    "rel": [
     230
    ]
   },
   {
    "name": "多态",
    "desc": "父类引用指向子类对象：Animal a = new Dog()",
    "tip": "instanceof 判断对象实际类型",
    "rel": [
     44
    ]
   },
   {
    "name": "抽象类",
    "desc": "abstract 修饰，不能 new，抽象方法必须由子类实现",
    "tip": "可以有普通方法，也可以有抽象方法",
    "rel": [
     117,
     118
    ]
   },
   {
    "name": "接口",
    "desc": "interface 定义规范，一个类可实现多个接口（Java8+ 有默认/静态方法）",
    "tip": "类 vs 接口：类是 is-a，接口是 can-do",
    "rel": [
     43
    ]
   },
   {
    "name": "访问修饰符",
    "desc": "public 全公开 / protected 同包+子类 / 默认 同包 / private 本类",
    "tip": "private 只能通过 getter 访问",
    "rel": [
     245
    ]
   },
   {
    "name": "静态代码块",
    "desc": "static { } 在类加载时执行一次，比 main 早",
    "tip": "多个静态块按书写顺序执行",
    "rel": [
     244
    ]
   },
   {
    "name": "Object 类",
    "desc": "所有类的根：toString 打印对象、hashCode、equals 都可重写",
    "tip": "打印对象自动调 toString",
    "rel": [
     38,
     39,
     45
    ]
   },
   {
    "name": "泛型",
    "desc": "泛型类/方法/接口：类型安全，编译期检查",
    "tip": "List<String> 只能放 String，取出不用强转",
    "rel": [
     123,
     124,
     125
    ]
   }
  ]
 },
 {
  "ch": 5,
  "icon": "🗂",
  "title": "集合框架",
  "points": [
   {
    "name": "集合体系",
    "desc": "List 有序可重复、Set 无序去重、Map 键值对",
    "tip": "要下标用 List，去重用 Set，查键值用 Map，要排序用 Tree 系列",
    "rel": [
     235
    ]
   },
   {
    "name": "ArrayList",
    "desc": "数组实现，按下标查快 O(1)，中间增删慢",
    "tip": "add/remove/get/size 常用",
    "rel": [
     23,
     24,
     25
    ]
   },
   {
    "name": "LinkedList/Queue/Deque",
    "desc": "链表实现增删快；Queue 用 offer/poll，Deque 双端",
    "tip": "LinkedList 实现了 List 和 Queue 两个接口",
    "rel": [
     96,
     97
    ]
   },
   {
    "name": "HashSet",
    "desc": "哈希去重，O(1) 判断存在",
    "tip": "重复 add 无效，size 不增加",
    "rel": [
     27
    ]
   },
   {
    "name": "TreeSet/TreeMap",
    "desc": "红黑树实现，元素自动排序",
    "tip": "要排序的集合用它，遍历即有序",
    "rel": [
     93,
     94
    ]
   },
   {
    "name": "HashMap",
    "desc": "键值对存取 O(1)，键不可重复",
    "tip": "put 相同键会覆盖旧值；遍历顺序不保证",
    "rel": [
     28,
     29
    ]
   },
   {
    "name": "迭代器 Iterator",
    "desc": "hasNext()/next() 遍历集合，可边遍历边删除",
    "tip": "for-each 底层就是迭代器",
    "rel": [
     102
    ]
   },
   {
    "name": "Collections 工具",
    "desc": "sort 排序、reverse 反转、shuffle 打乱、binarySearch 二分",
    "tip": "sort 升序，reverse 降序常用组合",
    "rel": [
     26,
     33,
     34
    ]
   },
   {
    "name": "Arrays 工具",
    "desc": "sort/binarySearch/fill/copyOf 操作数组",
    "tip": "数组变列表 Arrays.asList",
    "rel": [
     30,
     31,
     32
    ]
   },
   {
    "name": "Stack/PriorityQueue",
    "desc": "Stack 后进先出；PriorityQueue 优先级队列（堆）",
    "tip": "栈用 push/pop/peek；优先队列 poll 取最小",
    "rel": [
     98,
     95
    ]
   }
  ]
 },
 {
  "ch": 6,
  "icon": "⚠️",
  "title": "异常处理",
  "points": [
   {
    "name": "异常体系",
    "desc": "Throwable 分 Error（系统级）和 Exception（程序级）；Exception 分受检（编译强制）和运行时",
    "tip": "IOException 受检必须处理；NullPointerException 运行时不用强制",
    "rel": [
     236
    ]
   },
   {
    "name": "try-catch-finally",
    "desc": "try 放可能出错代码，catch 捕获处理，finally 无论是否异常都执行",
    "tip": "finally 常用来关资源",
    "rel": [
     236,
     7
    ]
   },
   {
    "name": "finally 与 return",
    "desc": "return 的值先确定，再执行 finally，最后才返回",
    "tip": "finally 里改 return 变量无效",
    "rel": [
     246
    ]
   },
   {
    "name": "多 catch",
    "desc": "一个 try 可跟多个 catch，子类异常必须写在父类前面",
    "tip": "顺序：先具体后宽泛",
    "rel": [
     115
    ]
   },
   {
    "name": "throw/throws",
    "desc": "throw 手动抛异常；throws 声明方法可能抛出的异常",
    "tip": "throw 后面跟异常对象，throws 跟在方法签名后",
    "rel": [
     112
    ]
   },
   {
    "name": "自定义异常",
    "desc": "继承 Exception 或 RuntimeException 创建自己的异常类",
    "tip": "业务校验失败常抛自定义异常",
    "rel": [
     113
    ]
   },
   {
    "name": "try-with-resources",
    "desc": "try(资源) 语法，结束时自动 close",
    "tip": "资源类要实现 AutoCloseable",
    "rel": [
     114
    ]
   }
  ]
 },
 {
  "ch": 7,
  "icon": "🧰",
  "title": "常用类",
  "points": [
   {
    "name": "包装类",
    "desc": "Integer/Long/Double/Boolean 等把基本类型包成对象",
    "tip": "自动装箱拆箱；Integer 缓存 -128~127，范围内 == 为 true",
    "rel": [
     237
    ]
   },
   {
    "name": "字符串互转",
    "desc": "Integer.parseInt(\"123\") 字符串转数字；String.valueOf(123) 数字转字符串",
    "tip": "parse 前缀是基本类型，valueOf 是包装类静态方法",
    "rel": [
     47,
     48,
     49
    ]
   },
   {
    "name": "Math 数学",
    "desc": "max/min/abs/sqrt/pow/round 常用数学方法",
    "tip": "Math.pow 返回 double：2^10=1024.0",
    "rel": [
     14,
     15,
     16,
     17
    ]
   },
   {
    "name": "Random 随机",
    "desc": "nextInt(n) 生成 [0,n) 随机整数",
    "tip": "new Random(种子) 固定种子结果可复现",
    "rel": [
     18
    ]
   },
   {
    "name": "BigInteger/BigDecimal",
    "desc": "大整数/高精度小数，避免溢出和精度丢失",
    "tip": "用 add/multiply 等方法，不能用 +-*/",
    "rel": [
     164,
     165
    ]
   },
   {
    "name": "日期 LocalDate",
    "desc": "now() 今天、of(年,月,日) 指定、plusDays 加减",
    "tip": "LocalDate 只含日期，LocalDateTime 含时分秒",
    "rel": [
     135,
     139,
     140
    ]
   },
   {
    "name": "Period/Duration",
    "desc": "Period 算日期间隔、Duration 算时间间隔",
    "tip": "between(开始, 结束)",
    "rel": [
     139,
     140
    ]
   }
  ]
 },
 {
  "ch": 8,
  "icon": "📁",
  "title": "文件IO",
  "points": [
   {
    "name": "流的概念",
    "desc": "输入流读数据、输出流写数据；字节流处理一切文件，字符流处理文本",
    "tip": "Reader/Writer 字符流，InputStream/OutputStream 字节流",
    "rel": [
     238
    ]
   },
   {
    "name": "字符流读写",
    "desc": "FileWriter 写文件、FileReader 读文件",
    "tip": "写完必须 close() 释放资源",
    "rel": [
     21,
     22
    ]
   },
   {
    "name": "缓冲流",
    "desc": "BufferedReader/BufferedWriter 带缓冲，更快",
    "tip": "readLine() 读一行，到末尾返回 null",
    "rel": [
     238
    ]
   },
   {
    "name": "字节转字符",
    "desc": "InputStreamReader 把字节流桥接成字符流，可指定编码",
    "tip": "读中文必须注意编码 UTF-8",
    "rel": [
     249
    ]
   },
   {
    "name": "File 类",
    "desc": "exists 存在、isFile/isDirectory 判断、listFiles 遍历目录",
    "tip": "File 只是路径描述，不代表文件真实存在",
    "rel": [
     107,
     108
    ]
   }
  ]
 },
 {
  "ch": 9,
  "icon": "🧵",
  "title": "多线程",
  "points": [
   {
    "name": "线程创建",
    "desc": "extends Thread 或 implements Runnable，重写 run",
    "tip": "两种方式：继承 Thread 或实现 Runnable（推荐）",
    "rel": [
     239
    ]
   },
   {
    "name": "生命周期",
    "desc": "新建→就绪→运行→阻塞/等待→死亡",
    "tip": "start() 开启新线程；直接调 run() 只是普通方法调用",
    "rel": [
     239
    ]
   },
   {
    "name": "sleep/join",
    "desc": "sleep(毫秒) 暂停当前线程；join() 等待线程结束",
    "tip": "都抛 InterruptedException（受检异常）",
    "rel": [
     239
    ]
   },
   {
    "name": "synchronized",
    "desc": "同步锁：同一时刻只有一个线程能进同步块",
    "tip": "解决多线程数据竞争",
    "rel": [
     176
    ]
   },
   {
    "name": "线程池",
    "desc": "ExecutorService 管理线程，submit 提交任务",
    "tip": "避免频繁 new Thread，复用线程",
    "rel": [
     179
    ]
   },
   {
    "name": "并发工具",
    "desc": "CountDownLatch 倒数门闩、AtomicInteger 原子计数",
    "tip": "原子类比 synchronized 更轻量",
    "rel": [
     183,
     186,
     185
    ]
   }
  ]
 },
 {
  "ch": 10,
  "icon": "🚀",
  "title": "函数式与进阶",
  "points": [
   {
    "name": "Lambda",
    "desc": "函数式接口（只有一个抽象方法）可用 Lambda：参数 -> 表达式",
    "tip": "替代匿名内部类，代码更短",
    "rel": [
     240,
     129
    ]
   },
   {
    "name": "Stream 过滤映射",
    "desc": "stream() 转流，filter 过滤、map 转换，链式流水线",
    "tip": "filter 留下满足条件的，map 逐个转换",
    "rel": [
     130,
     131,
     240
    ]
   },
   {
    "name": "Stream 归约收集",
    "desc": "reduce 聚合成一个值、collect 收集成集合",
    "tip": "Collectors.toList() 常用",
    "rel": [
     132,
     133
    ]
   },
   {
    "name": "Optional",
    "desc": "包装可能为 null 的值，避免空指针",
    "tip": "orElse 给默认值",
    "rel": [
     134
    ]
   },
   {
    "name": "反射",
    "desc": "Class/Method/Field/Constructor 在运行时查看和操作类",
    "tip": "getClass() 获取 Class 对象",
    "rel": [
     46
    ]
   },
   {
    "name": "注解",
    "desc": "@Override/@Deprecated/@SuppressWarnings 给代码打标记",
    "tip": "注解本身不执行逻辑，靠框架或编译器读取",
    "rel": [
     153,
     154
    ]
   },
   {
    "name": "正则",
    "desc": "Pattern 编译正则、Matcher 匹配",
    "tip": "matches 全匹配、find 找子串",
    "rel": [
     110,
     111
    ]
   },
   {
    "name": "算法技巧",
    "desc": "递归、二分查找、双指针、动态规划、排序",
    "tip": "递归必须有终止条件；DP 用数组存中间结果",
    "rel": [
     35,
     36,
     37
    ]
   }
  ]
 }
];