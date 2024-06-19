
const curve = [[[0.0011,0.0000,-1.0004],[0.1005,0.0003,-0.8895],[0.1801,0.0005,-0.7805],[0.2436,0.0006,-0.6744],[0.2939,0.0007,-0.5713],[0.3334,0.0007,-0.4711],[0.3638,0.0006,-0.3735],[0.3862,0.0005,-0.2781],[0.4017,0.0004,-0.1844],[0.4107,0.0002,-0.0918],[0.4136,-0.0000,0.0003],[0.4106,-0.0002,0.0924],[0.4016,-0.0004,0.1850],[0.3861,-0.0005,0.2787],[0.3636,-0.0006,0.3741],[0.3332,-0.0007,0.4717],[0.2937,-0.0007,0.5719],[0.2432,-0.0006,0.6750],[0.1797,-0.0005,0.7812],[0.1000,-0.0003,0.8902],[0.0004,0.0000,1.0011]],[[0.1256,0.0002,-1.1108],[0.2146,0.0486,-0.9717],[0.2718,0.0823,-0.8339],[0.3056,0.1018,-0.7026],[0.3233,0.1088,-0.5802],[0.3306,0.1054,-0.4671],[0.3317,0.0936,-0.3626],[0.3299,0.0754,-0.2654],[0.3272,0.0527,-0.1737],[0.3251,0.0270,-0.0858],[0.3244,-0.0001,0.0003],[0.3252,-0.0272,0.0863],[0.3273,-0.0528,0.1742],[0.3299,-0.0755,0.2660],[0.3317,-0.0937,0.3633],[0.3305,-0.1054,0.4678],[0.3232,-0.1088,0.5810],[0.3055,-0.1017,0.7034],[0.2715,-0.0821,0.8347],[0.2142,-0.0484,0.9725],[0.1249,0.0002,1.1117]],[[0.2810,0.0004,-1.2171],[0.3499,0.1071,-1.0467],[0.3737,0.1770,-0.8770],[0.3689,0.2132,-0.7196],[0.3486,0.2221,-0.5790],[0.3221,0.2100,-0.4553],[0.2954,0.1828,-0.3464],[0.2721,0.1450,-0.2495],[0.2543,0.1001,-0.1615],[0.2433,0.0510,-0.0792],[0.2396,-0.0002,0.0003],[0.2433,-0.0513,0.0797],[0.2544,-0.1004,0.1620],[0.2722,-0.1453,0.2501],[0.2955,-0.1830,0.3471],[0.3223,-0.2102,0.4560],[0.3488,-0.2221,0.5799],[0.3690,-0.2131,0.7206],[0.3737,-0.1766,0.8780],[0.3496,-0.1065,1.0478],[0.2804,0.0004,1.2182]],[[0.4744,0.0007,-1.3122],[0.5102,0.1778,-1.1091],[0.4866,0.2864,-0.9058],[0.4328,0.3356,-0.7229],[0.3693,0.3404,-0.5665],[0.3079,0.3146,-0.4353],[0.2547,0.2687,-0.3250],[0.2124,0.2101,-0.2307],[0.1821,0.1436,-0.1478],[0.1639,0.0727,-0.0720],[0.1579,-0.0002,0.0002],[0.1640,-0.0731,0.0725],[0.1822,-0.1440,0.1483],[0.2127,-0.2105,0.2313],[0.2550,-0.2691,0.3257],[0.3083,-0.3149,0.4361],[0.3697,-0.3405,0.5674],[0.4332,-0.3354,0.7240],[0.4869,-0.2859,0.9071],[0.5102,-0.1769,1.1104],[0.4739,0.0007,1.3134]],[[0.7131,0.0010,-1.3841],[0.6994,0.2629,-1.1504],[0.6108,0.4122,-0.9147],[0.4964,0.4693,-0.7092],[0.3845,0.4635,-0.5412],[0.2876,0.4190,-0.4067],[0.2096,0.3516,-0.2983],[0.1508,0.2712,-0.2090],[0.1100,0.1837,-0.1326],[0.0860,0.0925,-0.0643],[0.0782,-0.0003,0.0002],[0.0861,-0.0931,0.0647],[0.1102,-0.1843,0.1331],[0.1511,-0.2718,0.2095],[0.2100,-0.3521,0.2990],[0.2881,-0.4193,0.4075],[0.3851,-0.4637,0.5422],[0.4971,-0.4691,0.7103],[0.6115,-0.4116,0.9161],[0.6998,-0.2616,1.1520],[0.7128,0.0010,1.3854]],[[1.0020,0.0014,-1.4135],[0.9198,0.3641,-1.1578],[0.7456,0.5555,-0.8957],[0.5580,0.6141,-0.6743],[0.3931,0.5909,-0.5013],[0.2606,0.5228,-0.3688],[0.1597,0.4315,-0.2661],[0.0866,0.3289,-0.1842],[0.0372,0.2210,-0.1159],[0.0087,0.1107,-0.0559],[-0.0005,-0.0004,0.0002],[0.0089,-0.1114,0.0563],[0.0374,-0.2217,0.1163],[0.0869,-0.3296,0.1846],[0.1603,-0.4322,0.2667],[0.2614,-0.5233,0.3695],[0.3941,-0.5912,0.5023],[0.5592,-0.6140,0.6755],[0.7469,-0.5548,0.8972],[0.9208,-0.3624,1.1596],[1.0020,0.0014,1.4149]],[[1.3389,0.0019,-1.3723],[1.1700,0.4818,-1.1130],[0.8882,0.7159,-0.8385],[0.6154,0.7688,-0.6133],[0.3938,0.7213,-0.4446],[0.2264,0.6256,-0.3205],[0.1047,0.5086,-0.2278],[0.0193,0.3835,-0.1560],[-0.0370,0.2557,-0.0975],[-0.0689,0.1276,-0.0468],[-0.0792,-0.0004,0.0001],[-0.0688,-0.1284,0.0471],[-0.0367,-0.2565,0.0978],[0.0198,-0.3843,0.1564],[0.1054,-0.5094,0.2283],[0.2274,-0.6263,0.3212],[0.3950,-0.7218,0.4455],[0.6169,-0.7688,0.6145],[0.8901,-0.7151,0.8401],[1.1716,-0.4796,1.1148],[1.3392,0.0019,1.3736]],[[1.7050,0.0024,-1.2252],[1.4404,0.6127,-0.9923],[1.0326,0.8900,-0.7308],[0.6648,0.9306,-0.5204],[0.3849,0.8530,-0.3685],[0.1842,0.7264,-0.2609],[0.0439,0.5826,-0.1830],[-0.0516,0.4350,-0.1241],[-0.1133,0.2883,-0.0770],[-0.1478,0.1433,-0.0369],[-0.1589,-0.0005,0.0001],[-0.1477,-0.1442,0.0371],[-0.1130,-0.2892,0.0773],[-0.0511,-0.4360,0.1244],[0.0447,-0.5836,0.1834],[0.1852,-0.7272,0.2615],[0.3864,-0.8537,0.3694],[0.6669,-0.9308,0.5215],[1.0351,-0.8891,0.7323],[1.4429,-0.6099,0.9940],[1.7056,0.0024,1.2263]],[[2.0551,0.0029,-0.9410],[1.7075,0.7473,-0.7710],[1.1675,1.0695,-0.5595],[0.7014,1.0939,-0.3897],[0.3642,0.9829,-0.2705],[0.1329,0.8238,-0.1885],[-0.0233,0.6532,-0.1307],[-0.1269,0.4837,-0.0879],[-0.1926,0.3188,-0.0543],[-0.2290,0.1580,-0.0259],[-0.2406,-0.0005,0.0001],[-0.2288,-0.1590,0.0261],[-0.1923,-0.3198,0.0545],[-0.1264,-0.4848,0.0881],[-0.0225,-0.6542,0.1310],[0.1341,-0.8249,0.1890],[0.3660,-0.9838,0.2712],[0.7039,-1.0943,0.3906],[1.1708,-1.0686,0.5608],[1.7107,-0.7439,0.7724],[2.0558,0.0029,0.9416]],[[2.3166,0.0033,-0.5155],[1.9294,0.8671,-0.4347],[1.2757,1.2389,-0.3150],[0.7188,1.2497,-0.2164],[0.3294,1.1063,-0.1480],[0.0715,0.9160,-0.1019],[-0.0977,0.7194,-0.0699],[-0.2075,0.5292,-0.0467],[-0.2760,0.3472,-0.0287],[-0.3136,0.1716,-0.0137],[-0.3255,-0.0005,0.0000],[-0.3134,-0.1727,0.0138],[-0.2757,-0.3483,0.0288],[-0.2070,-0.5304,0.0468],[-0.0968,-0.7207,0.0701],[0.0728,-0.9172,0.1021],[0.3314,-1.1075,0.1483],[0.7218,-1.2503,0.2169],[1.2798,-1.2379,0.3157],[1.9333,-0.8631,0.4355],[2.3171,0.0033,0.5157]],[[2.4142,0.0034,0.0034],[2.0517,0.9461,0.0030],[1.3347,1.3748,0.0022],[0.7094,1.3848,0.0015],[0.2781,1.2170,0.0010],[-0.0012,0.9998,0.0007],[-0.1803,0.7802,0.0005],[-0.2945,0.5711,0.0003],[-0.3646,0.3734,0.0002],[-0.4028,0.1842,0.0001],[-0.4148,-0.0006,-0.0000],[-0.4026,-0.1854,-0.0001],[-0.3643,-0.3747,-0.0002],[-0.2939,-0.5724,-0.0003],[-0.1794,-0.7816,-0.0005],[0.0002,-1.0012,-0.0007],[0.2803,-1.2183,-0.0010],[0.7128,-1.3855,-0.0015],[1.3392,-1.3737,-0.0022],[2.0558,-0.9416,-0.0030],[2.4142,0.0034,-0.0034]],[[2.3147,0.0033,0.5219],[2.0287,0.9607,0.4879],[1.3218,1.4494,0.3733],[0.6659,1.4818,0.2599],[0.2080,1.3059,0.1770],[-0.0862,1.0711,0.1207],[-0.2721,0.8336,0.0821],[-0.3889,0.6086,0.0544],[-0.4599,0.3972,0.0333],[-0.4981,0.1957,0.0158],[-0.5102,-0.0006,-0.0000],[-0.4980,-0.1970,-0.0159],[-0.4596,-0.3985,-0.0334],[-0.3884,-0.6100,-0.0546],[-0.2712,-0.8350,-0.0823],[-0.0847,-1.0727,-0.1210],[0.2103,-1.3073,-0.1774],[0.6695,-1.4825,-0.2605],[1.3264,-1.4480,-0.3741],[2.0325,-0.9557,-0.4885],[2.3142,0.0033,-0.5217]],[[2.0517,0.0029,0.9461],[1.8526,0.9028,0.9378],[1.2238,1.4398,0.7583],[0.5833,1.5219,0.5459],[0.1178,1.3623,0.3775],[-0.1842,1.1243,0.2591],[-0.3742,0.8767,0.1766],[-0.4924,0.6403,0.1171],[-0.5635,0.4178,0.0716],[-0.6016,0.2058,0.0340],[-0.6135,-0.0007,-0.0001],[-0.6014,-0.2071,-0.0342],[-0.5632,-0.4192,-0.0719],[-0.4918,-0.6418,-0.1174],[-0.3732,-0.8783,-0.1770],[-0.1827,-1.1259,-0.2597],[0.1201,-1.3636,-0.3784],[0.5868,-1.5223,-0.5472],[1.2282,-1.4380,-0.7597],[1.8557,-0.8978,-0.9385],[2.0510,0.0029,-0.9455]],[[1.7009,0.0024,1.2290],[1.5627,0.7868,1.2805],[1.0464,1.3393,1.1052],[0.4615,1.4890,0.8368],[0.0078,1.3736,0.5964],[-0.2952,1.1520,0.4159],[-0.4872,0.9057,0.2858],[-0.6064,0.6642,0.1903],[-0.6776,0.4342,0.1166],[-0.7155,0.2141,0.0554],[-0.7273,-0.0007,-0.0002],[-0.7153,-0.2155,-0.0557],[-0.6773,-0.4356,-0.1170],[-0.6058,-0.6657,-0.1909],[-0.4863,-0.9072,-0.2865],[-0.2936,-1.1535,-0.4168],[0.0102,-1.3748,-0.5977],[0.4649,-1.4891,-0.8385],[1.0502,-1.3371,-1.1068],[1.5650,-0.7822,-1.2810],[1.7003,0.0024,-1.2279]],[[1.3347,0.0019,1.3747],[1.2223,0.6406,1.4860],[0.8149,1.1633,1.3683],[0.3080,1.3770,1.1031],[-0.1186,1.3281,0.8220],[-0.4178,1.1449,0.5891],[-0.6117,0.9146,0.4114],[-0.7326,0.6769,0.2765],[-0.8048,0.4448,0.1702],[-0.8430,0.2199,0.0810],[-0.8549,-0.0007,-0.0003],[-0.8429,-0.2213,-0.0816],[-0.8045,-0.4462,-0.1708],[-0.7321,-0.6784,-0.2772],[-0.6107,-0.9161,-0.4124],[-0.4163,-1.1463,-0.5904],[-0.1163,-1.3290,-0.8237],[0.3111,-1.3766,-1.1049],[0.8180,-1.1608,-1.3696],[1.2241,-0.6365,-1.4860],[1.3344,0.0019,-1.3734]],[[0.9980,0.0014,1.4149],[0.8876,0.4903,1.5654],[0.5640,0.9422,1.5252],[0.1372,1.1931,1.3153],[-0.2547,1.2181,1.0375],[-0.5485,1.0928,0.7739],[-0.7467,0.8958,0.5545],[-0.8728,0.6735,0.3786],[-0.9485,0.4467,0.2353],[-0.9885,0.2219,0.1125],[-1.0010,-0.0007,-0.0004],[-0.9884,-0.2233,-0.1133],[-0.9481,-0.4481,-0.2361],[-0.8722,-0.6749,-0.3796],[-0.7457,-0.8971,-0.5558],[-0.5470,-1.0939,-0.7754],[-0.2525,-1.2185,-1.0393],[0.1399,-1.1922,-1.3170],[0.5666,-0.9398,-1.5261],[0.8890,-0.4871,-1.5650],[0.9980,0.0014,-1.4135]],[[0.7094,0.0010,1.3847],[0.5912,0.3529,1.5509],[0.3250,0.7090,1.5799],[-0.0333,0.9577,1.4533],[-0.3901,1.0430,1.2229],[-0.6809,0.9858,0.9610],[-0.8897,0.8388,0.7147],[-1.0278,0.6464,0.5002],[-1.1126,0.4353,0.3156],[-1.1579,0.2180,0.1522],[-1.1720,-0.0007,-0.0005],[-1.1577,-0.2194,-0.1532],[-1.1122,-0.4367,-0.3167],[-1.0271,-0.6477,-0.5015],[-0.8886,-0.8399,-0.7162],[-0.6793,-0.9865,-0.9627],[-0.3880,-1.0429,-1.2245],[-0.0309,-0.9566,-1.4546],[0.3271,-0.7070,-1.5802],[0.5924,-0.3505,-1.5502],[0.7097,0.0010,-1.3834]],[[0.4712,0.0007,1.3123],[0.3448,0.2355,1.4760],[0.1171,0.4885,1.5528],[-0.1872,0.6981,1.5112],[-0.5128,0.8125,1.3589],[-0.8050,0.8173,1.1365],[-1.0345,0.7312,0.8888],[-1.1972,0.5844,0.6451],[-1.3019,0.4031,0.4169],[-1.3596,0.2046,0.2038],[-1.3778,-0.0007,-0.0006],[-1.3593,-0.2059,-0.2051],[-1.3014,-0.4043,-0.4183],[-1.1963,-0.5855,-0.6466],[-1.0332,-0.7320,-0.8904],[-0.8033,-0.8176,-1.1380],[-0.5108,-0.8121,-1.3602],[-0.1852,-0.6970,-1.5118],[0.1188,-0.4870,-1.5527],[0.3460,-0.2339,-1.4752],[0.4717,0.0007,-1.3111]],[[0.2782,0.0004,1.2168],[0.1477,0.1389,1.3670],[-0.0521,0.2945,1.4693],[-0.3140,0.4403,1.4961],[-0.6116,0.5456,1.4322],[-0.9081,0.5876,1.2824],[-1.1699,0.5599,1.0683],[-1.3766,0.4711,0.8162],[-1.5215,0.3371,0.5472],[-1.6061,0.1749,0.2733],[-1.6337,-0.0006,-0.0009],[-1.6058,-0.1759,-0.2751],[-1.5208,-0.3380,-0.5489],[-1.3755,-0.4718,-0.8179],[-1.1684,-0.5603,-1.0698],[-0.9063,-0.5875,-1.2836],[-0.6097,-0.5451,-1.4329],[-0.3122,-0.4395,-1.4962],[-0.0506,-0.2935,-1.4689],[0.1488,-0.1380,-1.3662],[0.2788,0.0004,-1.2158]],[[0.1231,0.0002,1.1103],[-0.0065,0.0613,1.2414],[-0.1832,0.1317,1.3517],[-0.4092,0.2036,1.4237],[-0.6789,0.2663,1.4387],[-0.9770,0.3072,1.3799],[-1.2787,0.3153,1.2378],[-1.5543,0.2842,1.0133],[-1.7746,0.2149,0.7179],[-1.9164,0.1155,0.3715],[-1.9650,-0.0004,-0.0012],[-1.9158,-0.1162,-0.3739],[-1.7734,-0.2155,-0.7200],[-1.5527,-0.2845,-1.0150],[-1.2768,-0.3154,-1.2390],[-0.9750,-0.3071,-1.3806],[-0.6771,-0.2660,-1.4388],[-0.4076,-0.2032,-1.4235],[-0.1819,-0.1312,-1.3511],[-0.0055,-0.0609,-1.2406],[0.1238,0.0002,-1.1094]],[[-0.0011,-0.0000,0.9996],[-0.1255,-0.0003,1.1100],[-0.2807,-0.0008,1.2164],[-0.4738,-0.0012,1.3117],[-0.7122,-0.0016,1.3841],[-1.0010,-0.0020,1.4142],[-1.3381,-0.0022,1.3740],[-1.7049,-0.0022,1.2278],[-2.0563,-0.0018,0.9441],[-2.3192,-0.0010,0.5183],[-2.4176,0.0000,-0.0017],[-2.3180,0.0010,-0.5214],[-2.0542,0.0018,-0.9463],[-1.7026,0.0022,-1.2292],[-1.3358,0.0022,-1.3745],[-0.9990,0.0020,-1.4142],[-0.7105,0.0016,-1.3837],[-0.4724,0.0012,-1.3112],[-0.2796,0.0008,-1.2158],[-0.1246,0.0003,-1.1093],[-0.0004,-0.0000,-0.9989]],[[0.0011,0.0000,-1.0004],[0.1256,0.0002,-1.1108],[0.2810,0.0004,-1.2171],[0.4744,0.0007,-1.3122],[0.7131,0.0010,-1.3841],[1.0020,0.0014,-1.4135],[1.3389,0.0019,-1.3723],[1.7050,0.0024,-1.2252],[2.0551,0.0029,-0.9410],[2.3166,0.0033,-0.5155],[2.4142,0.0034,0.0034],[2.3147,0.0033,0.5219],[2.0517,0.0029,0.9461],[1.7009,0.0024,1.2290],[1.3347,0.0019,1.3747],[0.9980,0.0014,1.4149],[0.7094,0.0010,1.3847],[0.4712,0.0007,1.3123],[0.2782,0.0004,1.2168],[0.1231,0.0002,1.1103],[-0.0011,-0.0000,0.9996]],[[0.1005,0.0003,-0.8895],[0.2146,0.0486,-0.9717],[0.3499,0.1071,-1.0467],[0.5102,0.1778,-1.1091],[0.6994,0.2629,-1.1504],[0.9198,0.3641,-1.1578],[1.1700,0.4818,-1.1130],[1.4404,0.6127,-0.9923],[1.7075,0.7473,-0.7710],[1.9294,0.8671,-0.4347],[2.0517,0.9461,0.0030],[2.0287,0.9607,0.4879],[1.8526,0.9028,0.9378],[1.5627,0.7868,1.2805],[1.2223,0.6406,1.4860],[0.8876,0.4903,1.5654],[0.5912,0.3529,1.5509],[0.3448,0.2355,1.4760],[0.1477,0.1389,1.3670],[-0.0065,0.0613,1.2414],[-0.1255,-0.0003,1.1100]],[[0.1801,0.0005,-0.7805],[0.2718,0.0823,-0.8339],[0.3737,0.1770,-0.8770],[0.4866,0.2864,-0.9058],[0.6108,0.4122,-0.9147],[0.7456,0.5555,-0.8957],[0.8882,0.7159,-0.8385],[1.0326,0.8900,-0.7308],[1.1675,1.0695,-0.5595],[1.2757,1.2389,-0.3150],[1.3347,1.3748,0.0022],[1.3218,1.4494,0.3733],[1.2238,1.4398,0.7583],[1.0464,1.3393,1.1052],[0.8149,1.1633,1.3683],[0.5640,0.9422,1.5252],[0.3250,0.7090,1.5799],[0.1171,0.4885,1.5528],[-0.0521,0.2945,1.4693],[-0.1832,0.1317,1.3517],[-0.2807,-0.0008,1.2164]],[[0.2436,0.0006,-0.6744],[0.3056,0.1018,-0.7026],[0.3689,0.2132,-0.7196],[0.4328,0.3356,-0.7229],[0.4964,0.4693,-0.7092],[0.5580,0.6141,-0.6743],[0.6154,0.7688,-0.6133],[0.6648,0.9306,-0.5204],[0.7014,1.0939,-0.3897],[0.7188,1.2497,-0.2164],[0.7094,1.3848,0.0015],[0.6659,1.4818,0.2599],[0.5833,1.5219,0.5459],[0.4615,1.4890,0.8368],[0.3080,1.3770,1.1031],[0.1372,1.1931,1.3153],[-0.0333,0.9577,1.4533],[-0.1872,0.6981,1.5112],[-0.3140,0.4403,1.4961],[-0.4092,0.2036,1.4237],[-0.4738,-0.0012,1.3117]],[[0.2939,0.0007,-0.5713],[0.3233,0.1088,-0.5802],[0.3486,0.2221,-0.5790],[0.3693,0.3404,-0.5665],[0.3845,0.4635,-0.5412],[0.3931,0.5909,-0.5013],[0.3938,0.7213,-0.4446],[0.3849,0.8530,-0.3685],[0.3642,0.9829,-0.2705],[0.3294,1.1063,-0.1480],[0.2781,1.2170,0.0010],[0.2080,1.3059,0.1770],[0.1178,1.3623,0.3775],[0.0078,1.3736,0.5964],[-0.1186,1.3281,0.8220],[-0.2547,1.2181,1.0375],[-0.3901,1.0430,1.2229],[-0.5128,0.8125,1.3589],[-0.6116,0.5456,1.4322],[-0.6789,0.2663,1.4387],[-0.7122,-0.0016,1.3841]],[[0.3334,0.0007,-0.4711],[0.3306,0.1054,-0.4671],[0.3221,0.2100,-0.4553],[0.3079,0.3146,-0.4353],[0.2876,0.4190,-0.4067],[0.2606,0.5228,-0.3688],[0.2264,0.6256,-0.3205],[0.1842,0.7264,-0.2609],[0.1329,0.8238,-0.1885],[0.0715,0.9160,-0.1019],[-0.0012,0.9998,0.0007],[-0.0862,1.0711,0.1207],[-0.1842,1.1243,0.2591],[-0.2952,1.1520,0.4159],[-0.4178,1.1449,0.5891],[-0.5485,1.0928,0.7739],[-0.6809,0.9858,0.9610],[-0.8050,0.8173,1.1365],[-0.9081,0.5876,1.2824],[-0.9770,0.3072,1.3799],[-1.0010,-0.0020,1.4142]],[[0.3638,0.0006,-0.3735],[0.3317,0.0936,-0.3626],[0.2954,0.1828,-0.3464],[0.2547,0.2687,-0.3250],[0.2096,0.3516,-0.2983],[0.1597,0.4315,-0.2661],[0.1047,0.5086,-0.2278],[0.0439,0.5826,-0.1830],[-0.0233,0.6532,-0.1307],[-0.0977,0.7194,-0.0699],[-0.1803,0.7802,0.0005],[-0.2721,0.8336,0.0821],[-0.3742,0.8767,0.1766],[-0.4872,0.9057,0.2858],[-0.6117,0.9146,0.4114],[-0.7467,0.8958,0.5545],[-0.8897,0.8388,0.7147],[-1.0345,0.7312,0.8888],[-1.1699,0.5599,1.0683],[-1.2787,0.3153,1.2378],[-1.3381,-0.0022,1.3740]],[[0.3862,0.0005,-0.2781],[0.3299,0.0754,-0.2654],[0.2721,0.1450,-0.2495],[0.2124,0.2101,-0.2307],[0.1508,0.2712,-0.2090],[0.0866,0.3289,-0.1842],[0.0193,0.3835,-0.1560],[-0.0516,0.4350,-0.1241],[-0.1269,0.4837,-0.0879],[-0.2075,0.5292,-0.0467],[-0.2945,0.5711,0.0003],[-0.3889,0.6086,0.0544],[-0.4924,0.6403,0.1171],[-0.6064,0.6642,0.1903],[-0.7326,0.6769,0.2765],[-0.8728,0.6735,0.3786],[-1.0278,0.6464,0.5002],[-1.1972,0.5844,0.6451],[-1.3766,0.4711,0.8162],[-1.5543,0.2842,1.0133],[-1.7049,-0.0022,1.2278]],[[0.4017,0.0004,-0.1844],[0.3272,0.0527,-0.1737],[0.2543,0.1001,-0.1615],[0.1821,0.1436,-0.1478],[0.1100,0.1837,-0.1326],[0.0372,0.2210,-0.1159],[-0.0370,0.2557,-0.0975],[-0.1133,0.2883,-0.0770],[-0.1926,0.3188,-0.0543],[-0.2760,0.3472,-0.0287],[-0.3646,0.3734,0.0002],[-0.4599,0.3972,0.0333],[-0.5635,0.4178,0.0716],[-0.6776,0.4342,0.1166],[-0.8048,0.4448,0.1702],[-0.9485,0.4467,0.2353],[-1.1126,0.4353,0.3156],[-1.3019,0.4031,0.4169],[-1.5215,0.3371,0.5472],[-1.7746,0.2149,0.7179],[-2.0563,-0.0018,0.9441]],[[0.4107,0.0002,-0.0918],[0.3251,0.0270,-0.0858],[0.2433,0.0510,-0.0792],[0.1639,0.0727,-0.0720],[0.0860,0.0925,-0.0643],[0.0087,0.1107,-0.0559],[-0.0689,0.1276,-0.0468],[-0.1478,0.1433,-0.0369],[-0.2290,0.1580,-0.0259],[-0.3136,0.1716,-0.0137],[-0.4028,0.1842,0.0001],[-0.4981,0.1957,0.0158],[-0.6016,0.2058,0.0340],[-0.7155,0.2141,0.0554],[-0.8430,0.2199,0.0810],[-0.9885,0.2219,0.1125],[-1.1579,0.2180,0.1522],[-1.3596,0.2046,0.2038],[-1.6061,0.1749,0.2733],[-1.9164,0.1155,0.3715],[-2.3192,-0.0010,0.5183]],[[0.4136,-0.0000,0.0003],[0.3244,-0.0001,0.0003],[0.2396,-0.0002,0.0003],[0.1579,-0.0002,0.0002],[0.0782,-0.0003,0.0002],[-0.0005,-0.0004,0.0002],[-0.0792,-0.0004,0.0001],[-0.1589,-0.0005,0.0001],[-0.2406,-0.0005,0.0001],[-0.3255,-0.0005,0.0000],[-0.4148,-0.0006,-0.0000],[-0.5102,-0.0006,-0.0000],[-0.6135,-0.0007,-0.0001],[-0.7273,-0.0007,-0.0002],[-0.8549,-0.0007,-0.0003],[-1.0010,-0.0007,-0.0004],[-1.1720,-0.0007,-0.0005],[-1.3778,-0.0007,-0.0006],[-1.6337,-0.0006,-0.0009],[-1.9650,-0.0004,-0.0012],[-2.4176,0.0000,-0.0017]],[[0.4106,-0.0002,0.0924],[0.3252,-0.0272,0.0863],[0.2433,-0.0513,0.0797],[0.1640,-0.0731,0.0725],[0.0861,-0.0931,0.0647],[0.0089,-0.1114,0.0563],[-0.0688,-0.1284,0.0471],[-0.1477,-0.1442,0.0371],[-0.2288,-0.1590,0.0261],[-0.3134,-0.1727,0.0138],[-0.4026,-0.1854,-0.0001],[-0.4980,-0.1970,-0.0159],[-0.6014,-0.2071,-0.0342],[-0.7153,-0.2155,-0.0557],[-0.8429,-0.2213,-0.0816],[-0.9884,-0.2233,-0.1133],[-1.1577,-0.2194,-0.1532],[-1.3593,-0.2059,-0.2051],[-1.6058,-0.1759,-0.2751],[-1.9158,-0.1162,-0.3739],[-2.3180,0.0010,-0.5214]],[[0.4016,-0.0004,0.1850],[0.3273,-0.0528,0.1742],[0.2544,-0.1004,0.1620],[0.1822,-0.1440,0.1483],[0.1102,-0.1843,0.1331],[0.0374,-0.2217,0.1163],[-0.0367,-0.2565,0.0978],[-0.1130,-0.2892,0.0773],[-0.1923,-0.3198,0.0545],[-0.2757,-0.3483,0.0288],[-0.3643,-0.3747,-0.0002],[-0.4596,-0.3985,-0.0334],[-0.5632,-0.4192,-0.0719],[-0.6773,-0.4356,-0.1170],[-0.8045,-0.4462,-0.1708],[-0.9481,-0.4481,-0.2361],[-1.1122,-0.4367,-0.3167],[-1.3014,-0.4043,-0.4183],[-1.5208,-0.3380,-0.5489],[-1.7734,-0.2155,-0.7200],[-2.0542,0.0018,-0.9463]],[[0.3861,-0.0005,0.2787],[0.3299,-0.0755,0.2660],[0.2722,-0.1453,0.2501],[0.2127,-0.2105,0.2313],[0.1511,-0.2718,0.2095],[0.0869,-0.3296,0.1846],[0.0198,-0.3843,0.1564],[-0.0511,-0.4360,0.1244],[-0.1264,-0.4848,0.0881],[-0.2070,-0.5304,0.0468],[-0.2939,-0.5724,-0.0003],[-0.3884,-0.6100,-0.0546],[-0.4918,-0.6418,-0.1174],[-0.6058,-0.6657,-0.1909],[-0.7321,-0.6784,-0.2772],[-0.8722,-0.6749,-0.3796],[-1.0271,-0.6477,-0.5015],[-1.1963,-0.5855,-0.6466],[-1.3755,-0.4718,-0.8179],[-1.5527,-0.2845,-1.0150],[-1.7026,0.0022,-1.2292]],[[0.3636,-0.0006,0.3741],[0.3317,-0.0937,0.3633],[0.2955,-0.1830,0.3471],[0.2550,-0.2691,0.3257],[0.2100,-0.3521,0.2990],[0.1603,-0.4322,0.2667],[0.1054,-0.5094,0.2283],[0.0447,-0.5836,0.1834],[-0.0225,-0.6542,0.1310],[-0.0968,-0.7207,0.0701],[-0.1794,-0.7816,-0.0005],[-0.2712,-0.8350,-0.0823],[-0.3732,-0.8783,-0.1770],[-0.4863,-0.9072,-0.2865],[-0.6107,-0.9161,-0.4124],[-0.7457,-0.8971,-0.5558],[-0.8886,-0.8399,-0.7162],[-1.0332,-0.7320,-0.8904],[-1.1684,-0.5603,-1.0698],[-1.2768,-0.3154,-1.2390],[-1.3358,0.0022,-1.3745]],[[0.3332,-0.0007,0.4717],[0.3305,-0.1054,0.4678],[0.3223,-0.2102,0.4560],[0.3083,-0.3149,0.4361],[0.2881,-0.4193,0.4075],[0.2614,-0.5233,0.3695],[0.2274,-0.6263,0.3212],[0.1852,-0.7272,0.2615],[0.1341,-0.8249,0.1890],[0.0728,-0.9172,0.1021],[0.0002,-1.0012,-0.0007],[-0.0847,-1.0727,-0.1210],[-0.1827,-1.1259,-0.2597],[-0.2936,-1.1535,-0.4168],[-0.4163,-1.1463,-0.5904],[-0.5470,-1.0939,-0.7754],[-0.6793,-0.9865,-0.9627],[-0.8033,-0.8176,-1.1380],[-0.9063,-0.5875,-1.2836],[-0.9750,-0.3071,-1.3806],[-0.9990,0.0020,-1.4142]],[[0.2937,-0.0007,0.5719],[0.3232,-0.1088,0.5810],[0.3488,-0.2221,0.5799],[0.3697,-0.3405,0.5674],[0.3851,-0.4637,0.5422],[0.3941,-0.5912,0.5023],[0.3950,-0.7218,0.4455],[0.3864,-0.8537,0.3694],[0.3660,-0.9838,0.2712],[0.3314,-1.1075,0.1483],[0.2803,-1.2183,-0.0010],[0.2103,-1.3073,-0.1774],[0.1201,-1.3636,-0.3784],[0.0102,-1.3748,-0.5977],[-0.1163,-1.3290,-0.8237],[-0.2525,-1.2185,-1.0393],[-0.3880,-1.0429,-1.2245],[-0.5108,-0.8121,-1.3602],[-0.6097,-0.5451,-1.4329],[-0.6771,-0.2660,-1.4388],[-0.7105,0.0016,-1.3837]],[[0.2432,-0.0006,0.6750],[0.3055,-0.1017,0.7034],[0.3690,-0.2131,0.7206],[0.4332,-0.3354,0.7240],[0.4971,-0.4691,0.7103],[0.5592,-0.6140,0.6755],[0.6169,-0.7688,0.6145],[0.6669,-0.9308,0.5215],[0.7039,-1.0943,0.3906],[0.7218,-1.2503,0.2169],[0.7128,-1.3855,-0.0015],[0.6695,-1.4825,-0.2605],[0.5868,-1.5223,-0.5472],[0.4649,-1.4891,-0.8385],[0.3111,-1.3766,-1.1049],[0.1399,-1.1922,-1.3170],[-0.0309,-0.9566,-1.4546],[-0.1852,-0.6970,-1.5118],[-0.3122,-0.4395,-1.4962],[-0.4076,-0.2032,-1.4235],[-0.4724,0.0012,-1.3112]],[[0.1797,-0.0005,0.7812],[0.2715,-0.0821,0.8347],[0.3737,-0.1766,0.8780],[0.4869,-0.2859,0.9071],[0.6115,-0.4116,0.9161],[0.7469,-0.5548,0.8972],[0.8901,-0.7151,0.8401],[1.0351,-0.8891,0.7323],[1.1708,-1.0686,0.5608],[1.2798,-1.2379,0.3157],[1.3392,-1.3737,-0.0022],[1.3264,-1.4480,-0.3741],[1.2282,-1.4380,-0.7597],[1.0502,-1.3371,-1.1068],[0.8180,-1.1608,-1.3696],[0.5666,-0.9398,-1.5261],[0.3271,-0.7070,-1.5802],[0.1188,-0.4870,-1.5527],[-0.0506,-0.2935,-1.4689],[-0.1819,-0.1312,-1.3511],[-0.2796,0.0008,-1.2158]],[[0.1000,-0.0003,0.8902],[0.2142,-0.0484,0.9725],[0.3496,-0.1065,1.0478],[0.5102,-0.1769,1.1104],[0.6998,-0.2616,1.1520],[0.9208,-0.3624,1.1596],[1.1716,-0.4796,1.1148],[1.4429,-0.6099,0.9940],[1.7107,-0.7439,0.7724],[1.9333,-0.8631,0.4355],[2.0558,-0.9416,-0.0030],[2.0325,-0.9557,-0.4885],[1.8557,-0.8978,-0.9385],[1.5650,-0.7822,-1.2810],[1.2241,-0.6365,-1.4860],[0.8890,-0.4871,-1.5650],[0.5924,-0.3505,-1.5502],[0.3460,-0.2339,-1.4752],[0.1488,-0.1380,-1.3662],[-0.0055,-0.0609,-1.2406],[-0.1246,0.0003,-1.1093]],[[0.0004,0.0000,1.0011],[0.1249,0.0002,1.1117],[0.2804,0.0004,1.2182],[0.4739,0.0007,1.3134],[0.7128,0.0010,1.3854],[1.0020,0.0014,1.4149],[1.3392,0.0019,1.3736],[1.7056,0.0024,1.2263],[2.0558,0.0029,0.9416],[2.3171,0.0033,0.5157],[2.4142,0.0034,-0.0034],[2.3142,0.0033,-0.5217],[2.0510,0.0029,-0.9455],[1.7003,0.0024,-1.2279],[1.3344,0.0019,-1.3734],[0.9980,0.0014,-1.4135],[0.7097,0.0010,-1.3834],[0.4717,0.0007,-1.3111],[0.2788,0.0004,-1.2158],[0.1238,0.0002,-1.1094],[-0.0004,-0.0000,-0.9989]]];


const canvas1 = document.getElementById('canvas1');
canvas1.style.touchAction = 'none';


//シーン
const scene1 = new THREE.Scene();


// レンダラー
const renderer1 = new THREE.WebGLRenderer({
    canvas:canvas1,   //描画するキャンバスをID指定
    antialias: true
});
renderer1.setSize(window.innerWidth, window.innerHeight); //キャンバスサイズ
renderer1.setClearColor(0x000000);   //背景色



// カメラ
//const camera1 = new THREE.OrthographicCamera(-2, 2, 2, -2, 1, 10);   //直交投影カメラ
const camera1 = new THREE.PerspectiveCamera(60, canvas1.width/canvas1.height, 0.1, 500);  //透視投影カメラ
camera1.position.set(0,0,30);  //カメラ初期位置


//環境光ライト
const lighta = new THREE.AmbientLight(0xffffff, 0.3);   //第1引数：光の色, 第2引数：光の強さ
scene1.add(lighta);

const light1 = new THREE.DirectionalLight(new THREE.Vector3(1,1,1), 1);
scene1.add(light1);


//マウスドラッグによる視点操作（カメラが動く、ライブラリに備わっている機能を使用）
//const controls = new THREE.OrbitControls(camera1, renderer1.domElement);


//オブジェクト
let path, geometry, material, mesh, meshgroup;

meshgroup = new THREE.Group();

for(let k=0; k<curve.length; k++){
    path = new THREE.CatmullRomCurve3(veclist(curve[k],5));
    geometry = new THREE.TubeGeometry(path, 64, 0.1, 8, false);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff});
    mesh = new THREE.Mesh(geometry, material);
    meshgroup.add(mesh);
}

scene1.add(meshgroup);




//マウスイベント
let mouseIsPressed = false;
document.addEventListener('pointerdown',()=>{mouseIsPressed = true;});
document.addEventListener('pointerup',()=>{mouseIsPressed = false;});

let mousemovementX=0, mousemovementY=0;
document.addEventListener('pointermove',(event)=>{
    mousemovementX = event.movementX;
    mousemovementY = event.movementY;
});

let angularvelocity = new THREE.Vector3(0,0,0);




//レンダリングを繰り返す
function animate(){

    requestAnimationFrame(animate); //この関数自身を呼び出すことで関数内の処理が繰り返される

    if(mouseIsPressed)  angularvelocity.lerp(new THREE.Vector3(mousemovementY,mousemovementX, 0),0.2);
    let axis = angularvelocity.clone().normalize();
    let rad = angularvelocity.length()*0.005;

    mousemovementX = 0;
    mousemovementY = 0;

    meshgroup.rotateOnWorldAxis(axis, rad);

    renderer1.render(scene1, camera1);  //レンダリング（CG描画）
}
animate();



function veclist(arg, sc){

    let result = [];
    for(let i=0; i<arg.length; i++){
        result.push(new THREE.Vector3(arg[i][0]*sc, arg[i][1]*sc, arg[i][2]*sc));
    }
    return result;
}