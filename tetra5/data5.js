/*

〇このファイルに記述しているデータ

vts1 : 正四面体Aの頂点リスト
vts2 : 正四面体Bの頂点リスト
vts3 : 正四面体Cの頂点リスト
vts4 : 正四面体Dの頂点リスト
vts5 : 正四面体Eの頂点リスト
vtsall : 正十二面体の頂点リスト

index1 : 　正四面体のポリゴンインデックスリスト（共通）

edge1 : 正十二面体の辺のインデックスリスト

*/


const vts1 = '[[3.23607, 1.23607, 0. ], [0., -3.23607, -1.23607], [-1.23607, 0.,  3.23607], [-2., 2., -2.]]';
const vts2 = '[[2., 2., -2.] , [2., -2., 2. ], [-2.,  2., 2.] , [-2., -2., -2.]]';
const vts3 = '[[-3.23607, -1.23607,  0.] , [0., 3.23607, -1.23607] , [1.23607, 0.,  3.23607] , [2., -2., -2.]]';
const vts4 = '[[3.23607, -1.23607, 0.] , [0., 3.23607, 1.23607] , [-1.23607, 0., -3.23607], [-2., -2., 2.]]';
const vts5 = '[[-3.23607, 1.23607, 0.] , [0., -3.23607,  1.23607] , [1.23607, 0., -3.23607] , [2., 2., 2.]]';

const vtsall = '[[3.23607, 1.23607, 0. ], [0., -3.23607, -1.23607], [-1.23607, 0.,  3.23607], [-2., 2., -2.], [2., 2., -2.] , [2., -2., 2. ], [-2.,  2., 2.] , [-2., -2., -2.], [-3.23607, -1.23607,  0.] , [0., 3.23607, -1.23607] , [1.23607, 0.,  3.23607] , [2., -2., -2.],[3.23607, -1.23607, 0.] , [0., 3.23607, 1.23607] , [-1.23607, 0., -3.23607], [-2., -2., 2.],[-3.23607, 1.23607, 0.] , [0., -3.23607,  1.23607] , [1.23607, 0., -3.23607] , [2., 2., 2.]]';

const index1 = [[0,2,1],[0,3,2],[1,2,3],[3,0,1]];

const edge1 = [[0,4],[0,12],[0,19],[1,7],[1,11],[1,17],[2,6],[2,10],[2,15],[3,9],[3,14],[3,16],[4,9],[4,18],[5,10],[5,12],[5,17],[6,13],[6,16],[7,8],[7,14],[8,15],[8,16],[9,13],[10,19],[11,12],[11,18],[13,19],[14,18],[15,17]];

const edge2 = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];