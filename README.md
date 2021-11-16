```javascript
> node app power

<================15-POWERING================>
Test case 1:
[ [ 987654321987654300 ] ]
Candidate: Native
[ 8.299931885504768e+269 ]
Candidate: BigInt
[
  829993188550476833250743392677933169706998773256975493931698551100456931115315484620179402684593096805652346108576553286503825851783320865501610914721789567007763348047665812872451837064856817296883781895021997299331309892539422901987141886447404654070227943719035731968n]
Candidate: Custom BigInt
[
  829993188550476833250743392677933169706998773256975493931698551100456931115315484620179402684593096805652346108576553286503825851783320865501610914721789567007763348047665812872451837064856817296883781895021997299331309892539422901987141886447404654070227943719035731968n]
Candidate: Custom Pow
[
  '829993188550477186205346466401758447829545852638541917884168895309399411714662737333172924543310344770004266521860642277848601312807329573681412726471718109315111435310247071868176250095724894046001847141804185728941678147887225463651391807000000000000000000000000000000'
]
Candidate: Custom Pow15
[
  '829993188550477186205346466401758447829545852638541917884168895309399411714662737333172924543310344770004266521860642277848601312807329573681412726471718109315111435310247071868176250095724894046001847141804185728941678147887225463651391807000000000000000000000000000000'
]
Benchmark case:
[
  [
    7536791286136351, 1435600619983041, 2437287393626377, 4810868955934495,
    4716893721142958,  773958043284284, 4700931400450936, 2213937431320649,
    8637324114842342, 2667692461879780, 5302680874747734, 2476385815826301,
    6742863749474248, 6160194940312642, 2512958578182092, 5737750898208169,
    5237754977430289, 2853476246678696, 6797864889317060, 9278184224659168,
     309079011973070,  173411286015467, 9815267291209538, 8292802774793404,
    7446457826007360, 3244507582379323, 7231460011357826, 2664727783282410,
    5273945900057526, 4039649536689846, 5157318582898494, 1169160597555383,
    7477597177573296, 8420174666921283, 8773451486974859, 7723138270112433,
    9761084154265938, 9508389007502686, 5165228316086701,  274628923926905,
    8629525154086426, 1199587310407683, 8674179447417751, 5455462090068102,
    5889939979817160, 8118188170263929, 9188853139770144,  669307959273686,
    8851709480015599, 5335589028833942, 3565618029285211, 4321858573005106,
    5353812859006875, 3707238106484745, 2351626063946825,   63677297243671,
    2912976103846829, 3336827896404457,  501381248096997, 4945430937871900,
    1037122499026388, 7579423962710325, 8278381877630208,  792610671774949,
    6715271850028697, 4033656086886323, 3918854785028875, 2374458610305316,
    9753126656685264, 8608106492195269, 6873052762879202, 2342385390549870,
    7773557095873767, 4298488586158224, 5028953746510700, 2642094702825894,
    9258580422530456, 1218883626033220, 2265900113574139, 4589722530417415,
    6847617478094130, 8620830804623576, 7616402735131045, 2722368668673793,
    2788519562038791, 2377003720219490, 7347377276396516, 6373799014349968,
    5313695181308398, 9988697565158406, 2292797924021099, 8682875760414641,
    9197244716514132,  638922626970721, 3685879285687046, 9339882885561032,
    9029738113368794, 1108095741048051, 8503934306869601, 3020593564702360
  ]
]
Benchmarking...
Native x 53,324 ops/sec ±0.69% (90 runs sampled)
BigInt x 9,713 ops/sec ±0.30% (92 runs sampled)
Custom BigInt x 9,655 ops/sec ±0.66% (91 runs sampled)
Custom Pow x 4.95 ops/sec ±2.99% (17 runs sampled)
Custom Pow15 x 4.37 ops/sec ±2.39% (15 runs sampled)
Fastest is Native
```
```javascript
> node app repeat

<================STRING REPETITION================>
Test case 1:
[ 'kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,', 17 ]
Candidate: Repeat
kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,kxrbzedlitlupqbcnotqiehvqglmhpnhaepxashhuswjcuvhte,
...
Outputs are identical
Benchmark case:
[
  'udcyibbruloedsulzlmhqvyrstqjunloorsbrrlkupjvvctpcubnxcjhjidzdyfuifmdolmtvvgtmrrytvmwrhlmlzaiagxgnzqtrplovxrrqzqdpxbtvutagokicytkborpdxkqbnofycktgzklfsjagdrcqreoloxkxlishnryelydfnzwjggleiajzkwntptbsoyubnruggrsiuwkmtmmnrryzeguwrqjjdrpzaiprgixsinhtzyyyusdayaucrjlxthriqbiwzzxxicoktrqeilsxbmfkzdlmsxupxugcumfjijastgxscqokdbzcitsdotgpesjpeejhrpunzrniyxbrdnhvwunmgandynyhewipcsaiyaqfjhczrofkmlcjwedtkdcmmxhoowrjxdlpfbutmpnstgdlexmkerymljiouuxikbnicpnrulwymsezkbgoaooprulohzphhmiyqxbexnbftarvhvjlpcbcjmqhalwgdjcrqvkhrmadhrkgptvsaejjbimjqwqimksaaplwcdbbjwxqffjshafdqewrgqhlppqlkdgavnzsdaspgyxxzmqyqoecbirhimfusekmjdazsieumhvhhktgvpogamwfmwbsdkejfkdrbbabltjcycokybzaituamkpsdedmespuggmvdnccxxbzrktedjjbayzreiyybevsvqumzaaokcpkadcosadtozzycsmytlbpmhcsgaeerlfuhohxvrogjtljarpzgrhidtreogjpcgatgvoklwmnuwhxncmmocekvkqjqynukwabsfaorvavlbfjgnpwninnlzaxfgrskuxnipgqyazbsctwhpajkrudlsmkfstejvwnyeypkumspyzroawenoqvfismqydzccesmdgphdcvogblycwutbdfxwbenglkumcxpdyyxzicitmffryeptmvecqoloxyhsnqcwjeezwlouljtlhttdpxzydluem',
  1023
]
Benchmarking...
Repeat x 7,110,648 ops/sec ±0.69% (88 runs sampled)
Custom Loop x 5,093,154 ops/sec ±3.24% (84 runs sampled)
Fastest is Repeat
```
```javascript
> node app undefined

<================UNDEFINED================>
Benchmark case:
[ '2758378977475006' ]
Benchmarking...
Typeof x 56,025,717 ops/sec ±0.27% (88 runs sampled)
Void x 34,255,181 ops/sec ±2.64% (91 runs sampled)
Fastest is Typeof
```
```javascript
> node app yaml

<================JSON VS. YAML================>
Test case 1:
[[{a:null,c:["[]{}:,-",123n,"me, myself and I","you and me"],d:[null,null,null,null,null,null,null]},"e","\'\'e\'\'","f: NaN",{f:NaN},"-",[" ",{}],{loop:ref[0]},ref[0]]]
Candidate: Native JSON
TypeError: Do not know how to serialize a BigInt
    at JSON.stringify (<anonymous>)
    at Object.Native JSON (C:\Users\User1\Documents\DEV\bench\battles\yaml.js:11:32)
    at runTest (C:\Users\User1\Documents\DEV\bench\ground.js:36:33)
    at C:\Users\User1\Documents\DEV\bench\app.js:12:36
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (C:\Users\User1\Documents\DEV\bench\app.js:12:20)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:973:32)
    at Function.Module._load (node:internal/modules/cjs/loader:813:14)
Candidate: JSON5
TypeError: Converting circular structure to JSON5
    at serializeArray (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:229:19)
    at serializeProperty (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:98:43)
    at serializeObject (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:177:36)
    at serializeProperty (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:98:67)
    at serializeArray (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:239:36)
    at serializeProperty (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:98:43)
    at Object.stringify (C:\Users\User1\Documents\DEV\bench\node_modules\json5\lib\stringify.js:59:12)
    at Object.JSON5 (C:\Users\User1\Documents\DEV\bench\battles\yaml.js:12:27)
    at runTest (C:\Users\User1\Documents\DEV\bench\ground.js:36:33)
    at C:\Users\User1\Documents\DEV\bench\app.js:12:36
Candidate: JSON6
RangeError: Maximum call stack size exceeded
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1267:15)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
    at str (C:\Users\User1\Documents\DEV\bench\node_modules\json-6\lib\json6.js:1363:12)
Candidate: JSOX
[
    {
    a: null,
    c: [
      "[]{}:,-",
      123n,
      "me, myself and I",
      "you and me"
],
    d: [
      null,
      null,
      null,
      null,
      null,
      null,
      null
]
  },
    "e",
    "\'\'e\'\'",
    "f: NaN",
    {
    f: NaN
  },
    "-",
    [
    " ",
    {}
],
    {
      loop: ref[]
  },
    ref[]
]
Candidate: YAML
&a1
- a: null
  b: null
  c:
    - "[]{}:,-"
    - 123
    - me, myself and I
    - you and me
  d:
    - null
    - null
    - null
    - null
    - null
    - null
    - null
- e
- "''e''"
- "f: NaN"
- f: .nan
- "-"
- - " "
  - {}
- loop: *a1
- *a1

Candidate: JSYAML
YAMLException: unacceptable kind of an object to dump [object BigInt]
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:868:13)   
    at writeBlockSequence (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:605:9)
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:849:11)   
    at writeBlockMapping (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:731:10)
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:834:9)    
    at writeBlockSequence (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:605:9)
    at writeNode (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:849:11)   
    at Object.dump (C:\Users\User1\Documents\DEV\bench\node_modules\js-yaml\lib\dumper.js:960:7)  
    at Object.JSYAML (C:\Users\User1\Documents\DEV\bench\battles\yaml.js:16:29)
    at runTest (C:\Users\User1\Documents\DEV\bench\ground.js:36:33) {
  reason: 'unacceptable kind of an object to dump [object BigInt]',
  mark: undefined
}
Candidate: Custom YAML
- a: null
  c: ['[]{}:,-', 123, 'me, myself and I', you and me]
  d: [null, null, null, null, null, null, null]
- e
- '''e'''
- 'f: NaN'
- f: NaN
- '-'
- -
  - {}
- loop: {circular}
- {circular}
Test case 2:
[{hkqsf:[],rybwa:94210499,sltig:66004254}]
Candidate: Native JSON
{
  "hkqsf": [],
  "sltig": 66004254,
  "rybwa": 94210499
}
Candidate: JSON5
{
  hkqsf: [],
  sltig: 66004254,
  rybwa: 94210499,
}
Candidate: JSON6
{
  hkqsf: {},
  rybwa: 94210499,
  sltig: 66004254
}
Candidate: JSOX

{
  hkqsf: [],
  rybwa: 94210499,
  sltig: 66004254
}
Candidate: YAML
hkqsf: []
sltig: 66004254
rybwa: 94210499

Candidate: JSYAML
hkqsf: []
sltig: 66004254
rybwa: 94210499

Candidate: Custom YAML
hkqsf: []
sltig: 66004254
rybwa: 94210499
Benchmark case:
[{hmkts:{hthmm:"jaapkwzqa",nkhom:["ujppjqlfx",[]],rdtnp:126302210,ugneb:{clljc:[[[[["fxumjvsfg",{fyzlf:"zixxkxbze",jrvog:"oyfyjkjii",rveev:{},undaw:240638849,vdmtd:{}},{dhudy:"rialtljic",kjzoi:45034468,nzkfo:"uehselxjc",wtlix:"dglbwxtst",xjxbm:"tbnpsmxso"},391476746,{ifghk:588997091,jrbum:76425931,ttaol:{},vjxyw:{},vqjew:[]}],[38575216,940606443,{bhdhn:"xadxfjytx",hkjwi:"iurzphjro",ioaur:"btvkwatrv",lamre:{},ugmpo:"nhbnvtqig"},"vmtwgdaqs",[[176878276,"jxxdhfagk",782963595,913987193,"hjqwujizy"],200036395,{},["fajyojpja",240467938],"qhigfuafm"]]],731291697,{avigf:"ynwqlqmnb",krgfr:"rxghpiroy",lgyog:{kcckj:"ldkzatcyz",lckrh:844821905,lirqz:[393644077,34765388,972478856,[302218602,"cyiaietfl","tdbtucmnt",398069690],"cbhebmhyn"],pnidp:[["pealmhbxq",471873410,"oewrutgwx","rofqsrtow"]],vxyyv:[[]]},vikss:{nisep:"eijwnwuye",pjcxg:"hqnyezjrd",urhsz:"iwlurbmsn",xtopw:["hcumleisg",{},"wldjxkvnu"],zjeni:"vickllkis"},zipwt:190617205},[["jmdgkvhao","zvhiyweuv","qffuuixrg","tolpueswn"],976122663,780831331],"trvbfakhg"],"dakfuylfl",{anrul:[742120919,"cgqelcaws",{jgsza:"vcnfzepsu",lisfq:463485839,neqhs:{casac:["viprzyrqm","rakyoxqdl",121224245,255333330,"tdaqsmiku"],gqrey:"okvdrxucd",hlhxs:"bfsbagoad",hrwkc:"rzujrmnro",xbpgb:"popakleco"},nkzwq:{hkrsn:[945778504],nornt:["qnjvxamzn",98090456,"xoyvzjzzm",752082888],qsllk:"xqmqowwyg",qvcdc:781732797,vbhqd:978152530},zcpro:["hjvuvtgwn","lhghgtcok",844308172]}],bzlcf:"zzuqglobz",iuujb:{euove:615312255,ndawu:486952554,poudo:[{dbcof:84872335,dbjev:["opztihbzz","zbakengmk","tuznjgzbm"],jdmaj:"uhqorrxmn",jwzcj:132659206,ncwvt:{}}],wwhua:611250602,xmrbg:968117444},jgdyw:{cqmkr:37834505,ctzot:{gtwun:[{},{},[190974015,"gqqlklcxb",487690117,"ytivkqkcw","xzsxjmfwv"],582196696,"dlofbewml"],orcrg:"kihliqtdg",qitic:{daxdw:550693062,eoffz:"buqrheium",pibyd:[],spfib:900636343,tbcyk:312497722},tpbet:"ybinchfxi",zuchq:"trlbpesmr"},flnsr:["vvatjtybv"],qffud:479689584,zvhaj:{edfaa:112094640,sopso:[967004612],vnwqi:{bclmj:"tgxtcgjjl",klxzz:[],nrxig:["cewxviwib","tqbthyhbo","khotdnyvz","hmjyjsydk"],pyixb:"myefzxqjn",zswhl:{}},xdwps:[["wdvjmeuyk","vxbnkblse"],{},162996291],zejvj:599538185}},vblaq:121149283},[{bahon:795314451,cafxc:"vnipwwoxx",glkts:{iejfu:["ihylapbat",306135892],mjogf:595656616,sqcoz:{kcjwb:672947416,oyhig:[],rggxv:["xsmnuaqix",609016693,318451964],znofz:{},ztvpv:["wwordndaf","jgjamhrew","vevjdihft"]},trmet:[459302119,760203206,948541557],txksa:{cytwf:["imeeofhuk","qgfhuaxhu","bgdmhtpet","ijtmoljle"],dypwg:"ryinjqbjz",erbji:97404069,pwkwf:[],yuths:"ohqzthnyu"}},odugq:"milstvbbx",wpaul:{bjqkd:{dpuae:{},kemsc:{},ldjav:"vocvucfdd",wabim:"yubxfvjqj",xstzc:617164826},ktlbn:"qnkadqpoe",weamz:"ztvqdkprc",xqcph:{bfipa:57485797,jjmvy:149672882,urcri:790764115,uvdpm:"xqkgtrpcy",zeptc:{}},zyhqm:454191565}}],920610285],[[]],"omhscanmq",["eisiilgkb","qdbdwhycn","dultcsbin","qfenuqmda"]],ffqyr:835319161,gvzpn:416032405,pyngk:"jridlqoxw",qwyzb:{ajkqb:{cmbxk:{blsfv:"gjidkppfh",lbmcm:{cghaf:"tvntqbfth",gnrnq:421263260,gyght:"zzarbtryx",irpig:"edtvazywe",yzofs:710286640},lrcdz:{epnxm:"yzodzyzml",flldv:{fknnd:["dmerravfn",[477138861]],kfejj:"hcefwykcb",pivqg:{bgfxy:[],cxxoz:[130611390,137915655],ipyul:"nzzxquhsc",rzazf:863865031,yhjon:784264488},ysigb:"qfuxaauqf",ysjjl:[7341032,372901841]},lasaj:[295131703,[833214515,{},{},{},790376071],"yatfstvic",{clunp:649325041,opxjp:[],oxaqe:"hxntvhxhr",oxoer:"dopjrhmsf",xseox:["vcspblyfr","uhtlnsjch","xuaasjxqp","qfsbbxhnj"]}],uscqs:{kwrpj:{bhoom:{},bupca:{},cmmyf:{},ehzvl:"luapckvpv",hlpjz:["bfsnyrgxh","tzrlhwmdw"]},ojuwy:[],ouwtd:{akant:785816790,snsmc:["njuhsssxc",269450581,"mfdqrvxzq"],svaoz:{},veqem:964742490,vfomb:{}},ozvfw:"exmlbvjzr",zpike:767511118},uzabi:"ztssddnjd"},qoeex:["fcnxdrxfg",907689939,137294011,{dsjhg:939744879,iaogy:[790487612],ltakj:[{},"aadxfdbwd",934345131,{},["icklvbuac"]],uilts:322736019,yuilr:"prndpqmuf"},"oquimtgcl"],yedzn:524609450},iyaas:{cyeoz:218572553,jpeht:[{dojbr:315632831,haljq:[235203423,676607353,887176996],iakwr:287541226,kkaec:{eohwl:{},oaexl:"wjjrwxgpg",pycjc:["ctekyjayc","gkisryfsb"],xzmph:"gfavjxwln",ytssl:{}},ojzle:{dzgyp:["jfqxaetpq",826745126],fsvkv:{},iegdi:"vdpnkrmtw",kfvet:[489222614,"ymrkjpnxj"],muomz:{}}},{qhgkm:"qfymdqrrk",ufmlm:{nvrbi:"zrgjkfuvf",rpdhb:"ccxjvsbvt",xiljg:{},xworz:{},zwbmu:["amopzsnwx",628024998,"ajhvrgzqb",541059216]},xesfe:[{},{},"fugvahxom",[61999890,"ombqvjvkb","qjopgmchk","luodgyhev"],[]],ygauv:[["civkczath",612020074,"iofgalrcb",457119932],771738778,{}],zswei:498127477},"mvhrfsavo","jkwiwjjyi",{ebofp:"laddgxbyb",jwbzb:[{},["rahimnkki"],416675256,[505872429],{}],oovon:"aimggrqnw",rdlrl:155069141,yqvdi:[651490845,["abrevtpty","zukjmseae","lgskcgoig",716451366]]}],jrkve:980890500,ptkby:[{aehfz:118598962,dszsy:["juouxeulg",981284544],ezgcc:565416474,xcgsq:[{},["tmkmhcqyt","oihfnnjmv","jaihvgpxo",647828423,"garzqiprl"],699445615],zaijb:{eelhp:["gsewjoxln"],jizzq:657355730,mxptv:["nwlvtnbkh"],vdzyo:{},xnxhc:["ypthfmhjj"]}},[772523567],{ddwjb:{bwcvi:725481181,hzfoy:417895912,iapho:{},kkeps:{},xrqzw:"uzfmmveey"},neyhj:[42368675,608923990,{},"dgyhlhdeb"],tcacd:{exuxz:"ywksdjije",hojjj:890162687,rapvh:108634734,svoah:67653948,tfnwx:{}},uvhko:663558648,zemdt:{afqwm:979755956,cexvx:[],onszh:{},taqnw:117150615,tqmzz:[]}},[805895956,"vtnlkoneq",{efmur:{},fhkit:["zzekdvxoc","gcmyiakqh","jygvlajcz",914139633,"usxdaynaz"],kpqzz:"scgjanowv",nphzd:"rozziqyaq",vdexy:512481962},658694106]],rdhuu:{gsrzp:80728157,ovoly:[],qrxiu:711129505,uganb:[[["oxlmrpqje",788650538,363050466,"eupmockhk"],"latxabynf"]],yphbq:["clipswpct",{csfff:254567229,cyrld:{},ntvct:653700777,sffko:"okkpznzgi",wfuyu:"qipddfcus"},"puegtubsy",[{},252434105],[["anvnmfqxb","eakeyhjvg","tghqzouit"]]]}},tfjbv:{ddbda:[483301669,{cogjv:{hycms:[863402166,"kvahowcax"],kkfbe:{},olcba:["ysyboucrw","kbyfnmsqd"],yavhv:{},zmnmw:"ochztylgx"},iwked:[],meink:"redidggso",mltfg:{drzsg:"qvxnnfrtg",fklrw:[],mhabm:579405502,mpjcz:{},qjzdc:473326105},ndjfg:"kmdaedekj"},"ecfmzgzpi"],dijdk:[632105219,{bhzai:151160776,cswul:{lapso:{},rhiep:["gtvywhepn","ssbaxshbm"],rnrtk:[676623915,339068228,"dwtoljpab","sdpgdxgby",163818766],uacoe:[],xbfny:670511333},ipire:{bdkbw:749803227,hengl:642285824,lhgbc:"webotfvtg",qjnis:"xquxcrqbj",wbjxy:{}},jxnvd:{etgrm:["yxwebplrj"],knbia:{},omnkw:[996326245,"jmtfgmfgb",924833566,28990551],pisfn:{},pqmqk:"hhgvwindp"},rpxob:[{},"flyofqout"]},913786706],duuog:{annxr:{ijkfl:{epvjk:{},omvzy:"aowjnofjp",srpuv:{},ujtup:76383772,xeykw:961083038},mbkea:[{}],ruyxr:"dktodgopd",thytk:{flajb:"kgogbnvmz",fxckc:319700256,jhnig:977935572,ytimt:"hsvqlxilc",yycfs:"plnpzhwra"},zhkwt:{bmnvh:{},karkc:"qjgbtthof",kggaw:378208539,mktju:["dfhwwvijk","nyqcqlart","nvpdubwck"],obndx:{}}},kquqc:[249448958,[],"neattuuid",[["psusxqjec","fsyksxnys"],{},{}],827490186],mvafi:988661293,srzbl:976460502,zujbj:{buhfg:"xlaythyuq",cevxx:{bralg:332334429,hdnhn:"uqtnqincw",jumjs:["wjrmqbyax","feejaauvm","nspjjwgjy"],kmpmg:[614665114,793392507,"kixfxdgso","jokidwgqi","wyickntas"],nizje:["roylamyjk","cqpzvreve","nayfxxyhs",657758636,"hsmmefjuo"]},jqlbo:189487158,pczql:{lwpeu:["kxjaobjpt","ohneevjay",922689287],pzndj:"biqhkagmu",qegju:450218310,tfxuv:"ntqlswwgo",tzxzb:"ajkvimfjb"},qzmaz:"klrqqueey"}},jtdfn:"xbngoifce",lwybx:{avsdv:{otbtf:940548976,rtray:{adthe:678035718,degtq:535747485,fobcp:{},jyzgb:"jcewcdjfv",oruez:[]},telqn:{eohdf:666801818,hxvpu:["eklvyraqf"],proqd:{},qqrgt:952271955,zxvsa:653243494},vxxbs:[431496331,["cbuqvstmk"],331591958,"oxlwapaaq"],wbubc:"outpntlzw"},cktwz:923149168,cxlzb:{itjpk:{alack:{},dgmic:"ijrkqnapr",lfpud:531108375,plgkx:110812651,zozhi:{}},oqngd:{dahzs:"sohtqroqd",etejy:268216444,qrohj:135542097,rrlcn:926055844,ttpgx:"pomaspnml"},qvkzl:[],udoib:{cjnoy:722184128,mmtbo:"cytywfkaq",oawow:{},owejh:["fksnogqek","yiodjtdpt","vhuypiecu","zqeuqerao"],sovjz:{}},zjzkh:{ddsoi:{},ktbyd:["uaoffmdaf","wznzdluud","geptubkwa",141044353],ovlzk:{},uccss:["wxclituwa","husyyfeww","riputorib","ulodpbiho"],wvbdc:[648124151,"yufqkwonj","wtsesjobu"]}},dosdr:[{hvdkl:805188796,jcpbq:{},njdvw:182410690,wwmjp:{},ybwjq:[]},205783737,256433391,"pqvozbifr"],mverw:[{qgreq:680414825,upxtv:726172471,vkcjc:"mwsnoxpfh",yxnvw:989809433,zbvoz:410532263}]}},tygro:[801211665],vfxvg:"jfjwdpybk"},hutyh:[[["orptfxeqn"]],{bmvfb:968201818,dmrok:{ctdvy:["axxxmvlgo",{dsrpa:{},guxnp:["zmhtqagcx",257410842,"akzbqrvjp"],kobld:{},nolve:{},pneaw:"pkqttdoqz"}],dtdgf:"ebzymohxq",ehhfw:{aajhg:[{},"dyhbifvxf","ddajyatat",["emojqlgtm"]],kdjbz:{abkcl:["rqjhorbps","slbzgytph",116278973],idpuj:"vcrnidvou",kwnyc:"abbemtfia",lemyc:"idermcxez",yhsdd:226823890},maewh:{olbot:{},omacu:529886930,orlfa:"rdrunfgsl",qxioe:{},xilur:["gvxknidqj","dvfufdine","sohqvizxh"]},xgwdz:964560492,zxyaj:725452199},ejtxv:[285749679,["psesnabwh",941081405,[306930360,"yjzpxhoow"]],770192139,485461992],xkzpr:"msivjpzia"},ndsvp:{bqnje:{cshvl:522259068,pbban:"qdsdkqmfu",xagfo:537715910,ycwdm:226929075,yiukt:{ayxws:["hmuampeod","mfgafmppf",585597670],bttcv:285307541,eiiax:[605997447,"fjxtrhiym","qqcnzsaiu","qsdreyijj","hddlexttb"],vujbn:["rtmdawkqk"],zdmee:[]}},doxwc:"gizybrisr",evkib:[[{},"jpnbgwmsl",968295616,["vzuqzhdxe"],813585193],[24409433,["cspskazwl","ajgkzunux","bphaftkjf","pnfaxuuym","slmqydgdp"],["mqtctzale","ecwwqqleq","sjnzuapua","fbuwrsykj","qgnhxggxn"]],["cfqpdmaqx",389930301,"iwjjynqox",["nhkerhqgf","aabkzmawv","hcvjezxzs"]]],ssvej:554598031,wytbw:[[{},{}],{cnfza:"rirmcytnb",hljir:"pzgiformf",mnbvw:{},osyui:"gfkwvzepp",sihof:["mdjevjajc","omrggvsqg","jtkrbmqfi","zganuhdxf","wmtarzprx"]},"gbgsrkred"]},nqvpx:"tyxdwqtoy",xgeqy:"fehpvgapb"},["skpjwpind"],614083587],krazl:404901660,njavg:{ayklu:"lwvifavfn",gqsju:[{hclao:[754933444,{fewek:{},gipxi:["swmziakut"],jmmas:[146857843],kbkno:["avubqpbqt"],tejws:{}}],hihrd:940977987,ivcaw:"laxcyabnc",qhfnv:{duddo:[],ftrva:"sbvuetemu",ftwoh:470705196,izxwj:"gwssrxjjg",yltbe:{ahmnt:["qgoqlcdas"],pcbgf:[],rzyvd:481383384,sdjjd:787019319,xulzg:["ithsbersh",889746078,"irqvmkukc"]}},ullhj:[[652894521,{}],"wegjmygqg",{dvqqj:[870068255],fiqpd:946172475,hbwqv:"wynwwcyke",iotuz:{},lvdzd:[409631056]},{ekicm:["ypzpqedwb","pwvcgndxr","npblrbtkb",848977034],fytru:520361987,jwymv:["zcizosfiv",109940128],pgquh:"uhtgwxgve",sfxmz:741531387},{hbfnu:["ujgpcuhaq",971695672,"tqfnjmhjy","mgmjbjxbj"],hmztj:167482469,pwrhb:{},rtezm:"cujzjnhep",vjbhs:"wgiwibqok"}]}],iqsae:["aqteilopp",501209557],kqqyp:[[{ffojo:"ewsxgikqk",fzdxc:"panffmzkm",jcwvz:[{},"yosqboepn"],qugdz:[],rxgoe:859086296},"dsgdtkdtu",832236264],[],580222818,278801432,"kmvgdsfrw"],zgwdc:371127955},wkwlq:666068466}},wuijv:"eidzqglgv"},igfqq:"rkjsywtap",llshe:19058830,puggb:553778041,tsinn:{eznpa:{eoydm:[],fhcju:{dtlqr:{bkxqt:"rpkexxnpo",erxrh:{cdavw:151104347,egtwk:958405905,mhahf:950833323,oivwb:"lrkeashhe",umluy:"bzdivcafn"},hckbn:"zebueulpk",koanh:[58986899,227209396,[154138699,["arlvbrlqt",{bmemp:"bvtybgjrd",jovkg:["ieifzuxgk","jmmplxxtd","ykkqvmpjo"],mqeqk:["nzecigwkl",393491036,"qfkjriulg","rvchxswvz"],qssjr:{},trhnb:"kdbecyops"}]]],vuqed:[[],"bmozwzsih",90274529,[{bxalg:573043677,moyqd:[{},["wzwffyftz"]],owkec:397681435,uldep:734089778,vqawy:"vdhtcbjgz"},[[{},"qbrwhdcnj",[],239241993,[]],"zwgboerva"],"tfyhyopsq"]]},kvysm:{avsts:{igbnu:["lqekfujiv","lorbvzedz","luqfvukfg",[]],sgogy:198640968,tocxx:[[[{},["cslknjwtm","nityiwsdv"],{},{}],"kensccumh"],{ariqi:"nokgqltmy",ohjtr:"tcduxzndd",srlwz:"gaarpinge",uaupx:[601682736,{},["afzljabvt","skkahpxmr","msdhrgduq",818856632,"hhskvdxic"]],vkkyi:[]},153617642],udkie:{dvdaw:[],lakcr:[[["rqbfttwcu","pyykuehfs"],["qhogofhwy","iexswffmj",676893580,860450806,"kehjtbnyt"],["wacivdpnv"],89732593],[[609815392,"stbesmipc"],"juzclimas",{}],826177233,{dkidj:"rwgxpspxu",mtffm:654015189,ofmxf:["khnnmvfmv"],oycuf:{},shibb:[]}],qzcul:760345171,wmvho:894383183,xdusy:[142980014,[910782177]]},vblbp:591774764},bsvkd:448486211,nndvm:701620833,uzshu:"qahayylnd",ypbvs:[[{apmvs:[{},"epxhpsdcr"],fuupq:[],jijjt:[],tekbw:{aqjzz:{},iolkz:258549300,lvkoe:[604607333,"ognhgujln","mrgjxrapy"],ufzbl:703544572,upanv:"tjpxolqlg"},ybhvr:"pgyhxqtkm"}],{aafxo:[],ftxms:695853864,uleum:838108232,vvkbu:[{rantu:429661180,rgogw:[703989478,"kfsiqisxv","bqqrwupwb",12894288],upgin:{},urhae:431380322,yjlio:"lmducitrf"},{dqdna:[582276885,"sddpttbch","plqrtqqax"],fhgmt:[461695156,"jnfocbicc"],ppjcq:"qfjqyljzl",wjnxl:838989705,xdpbn:["fpdusfcmz","pdunqaxux","okiisezvh","icbdkoqae",142535020]},"wgidfyujq"],yvjke:[]},424193591,804964346]},tbjkp:55631619,vsuyc:"opdrssmqv",yruiw:894208046},txsyk:{fijbo:{hzmdk:["ptdmujnvp",593656172,{deuim:"vxtkbibhs",dwter:{gpkam:702468825,jnizf:630088550,qdlzk:"buxcpeder",rhmrz:[661493677,"vjnimigbp","ohdmkwadh"],whwmp:{jldtg:["lmeswycbf","wwknwsgih"],nzqjl:759185747,qfuai:[],tihdn:{},tqzsf:[]}},edkhz:754548081,jmpea:{ahgkt:{bxjol:"wbtzxxhdf",flabs:"gvqfbhezr",gzuwo:{},thvsk:{},waviu:708439456},dejoo:"onotqyjnp",gcjax:"itccltinj",rywpb:241156073,xvcud:{adufu:914155735,bzkro:{},jldic:924584517,rpwlq:349429331,wtdnd:"tstpiggku"}},uwkxe:["jgecarmlw","qykvwgoxq",[["yovxrwgnx"],["dterlpkkw","gakbpewsn","byqsfdgbk"],{}]]}],islko:48023362,jievn:{kiqqk:839466596,lpjcd:"ssxpapbyd",qdveu:[{djcfr:"loulbhuyq",hqjvb:{dhdxj:"zpvlihbkn",lwjwr:"lfxhpaaeq",mkxsx:"aimnmnuob",teqpn:[301252882],ylulh:{}},llnmr:350058209,msxkc:["oenvyzwat",{},691899161,["rjkxuzucj",913729561,"csgtboxeb","fmhvmgouj","wydcweflz"]],yrjjo:325521667},470769180,{cigdp:[["jbsonvmvj","soltstros","hhgodgxfn"],137499015,{}],dfyfw:[{},234999618,"uejrmkshe","bcbqwohsr"],erqnw:["eoeomtoio",{}],itmei:{fklai:"gsjawffgp",mwpca:879566665,qjpsx:"kxutawnlg",uowzq:["jtjvtbwyt","rlcusanct","uerhgyuzf"],ykwtv:"uumlmwxng"},rjhpq:522187478},527810250],skxlw:"xgzobkeuc",wlcak:[422905488,{ayarf:224036236,ioitq:[{},{},{}],qehbq:{gdgdl:{},hlifk:{},nqomf:[],ogurp:{},xqbjp:"izerbdsvu"},vdeqh:"ojkejpgwg",wsynr:444570751}]},kzdho:[{arfot:["krxvlbfrm",{czvbx:{},fhehq:"qqyuerefx",fyrvk:"rezkavmbi",kgsgu:266337052,wrfrw:"tpgmkujzq"}],kjeyv:520450555,kvsjy:[{dxqhp:{},gyuoz:374505674,mhwkv:214206468,oqxbo:{},zsapr:"grutnkfxv"},59887484,[["wsglvjtwj","vxpcthyub",418772110,"vjvoairsi","ridlayuod"],"lcpmvkzhr",["xhxoxfrsi","hxamtnmef",638832168]],["seuzabdbk",996816561,{},[],"eziwxsuic"]],ulcrm:337405196,veuyv:{cjkir:{iivkw:["afsonkqay"],jnrql:[],pleqj:["kxyrlinps",412211541,"qxhtzvlue"],vzdkc:["hhrsqtatx","vatvsvncp","mauxufbcl",625458719],ysrfy:"llrlmijng"},cqnvn:[387523028,[],{}],hupxh:[],xsnhg:{jzakm:{},muaty:{},watyt:["ajaqtyghs"],xhezm:"jtaxdjref",zypwu:{}},znjfa:776842240}}],ntvsy:["mhrqwvbtq",{aajyi:{mxgcq:{bwzwb:{},jrccl:917419652,uxomt:"dptpdkfls",xoeij:46574965,yrvnu:[]},vgxbb:{coscz:"krlsislxy",gwgrk:{},qchwo:"dbstdyadp",ykyjc:["qrtffazcz"],zgkuf:680363264},wsvhe:[],yqqht:[],zatvc:"kjzjbgjvo"},czuse:[657570503],rkvra:"kjnqimmun",uaeku:532527152,ypnth:856424927},[],["ffqoclfpq"]]},jbpfp:{hqrye:{bjwon:"gcomrzeye",qtyyc:[],sdtpm:[],soagp:802398455,yovjj:560496876},lqtpu:809846592,myvpm:331901868,ojquj:{dspuk:"bjcacnmch",myozb:982344362,qgruz:[[[{},873573681,[],"isgeaticq",201950093]],[{eecia:{},nfadu:783081670,owopb:["cordoqreu","oxmlppdcx","ppiliylxj"],snebe:914889718,ytgjh:"ptavnucqk"},[851635890,[],["dzgzitwdt","kfnvdzysg","njufqxfom"],[666588621,"mdorzpqwk"],[955033168,"quvvxbbuz","xexcuibwn","bouadagxd","yxkhjjfpb"]],767465233,[],452897114],{dekch:[["jpivpxyez",118080829],["ohrlrdjzn"],{},[]],iqnys:"phnnpfotu",mlcjy:263721271,tvkcc:"zaclheqqx",vcbjc:"gyuiacpzr"},661813609],rnhvm:["vjdxlpkkl",[566788142,{bzjhb:{},fgzjw:74517171,idgri:199739074,sivow:"dmkbzzioy",yojro:742737778},"ggkdmrxex"],[[["uyhbilrxl"],953925882,503340842],544659519]],ymefp:994626157},rrblo:550815222},qjxtc:[],sioyu:[["zbfmfvvpw","jwreslnis","jozhnruqd",604963534,"smdagugyo"],{jefme:"omovzvtrm",ordfh:"tolslmyyl",skvgs:796299953,tpepe:[[{iuqez:551882897,nodzb:{},sdhvp:"veieekuxp",vxqwy:"iyocrznif",yocuk:76220071},97580161],"pnqzblcva","xpkjlowys",["hhcqwnwgl",{cunok:{},eifbq:967121369,hwpjf:[],uxayg:961087968,ybxen:{}},["evxlxryrs",{}]],[{jzuhi:"zuhdvovyq",kuvbb:{},kwllq:"eljoypwwk",vpjgf:[697346600,"mgvzmehhq","htffdgwhi","fptmzavqb"],xirqc:["btdkggmdt",296153196,"kpplvzoje","gfjnktrrd","ffpljorrd"]},182481247,318321506]],xmrzx:"hfqnwfemt"},["hdwoiyhtf",{gcuwq:"xprrhrjhu",gnvza:[[["ugaehllid",732940511,"dluophqcx"],561899878,"avztvosov",{}]],kejey:[776600846,[]],pevzm:672195662,uenwo:{addms:"deoqbtjwr",fcwmd:778872532,kvkli:[["xnjbkwbdf"]],oundv:{grqak:[],lwggv:115539062,pwmpr:["jjvwtazls","kupbeiisg"],rqqcq:{},uktfn:861165258},rlevr:395279913}},[{gfohu:106352283,qcgbc:{egfms:{},hjhmm:[344603595,"xzsjgjjga","djzppzrwh","xpcwrjqhs","holhsukic"],ncnys:939409283,rtxkj:973450176,wekqr:651651297},qevsx:[["pnyzlafuh"],491182696],spcsy:599427271,sxzbx:"dvtetpmxt"},"trdrdpexw",[{hvntn:{},izcbb:255998699,laaba:{},vawcv:{},xlzts:306469880}]],28110651,[793182221,"ttrtgphhb",[954413335,"faofbrils",{auiwq:{},azolq:["vjgiajphg"],cusji:[],fjwgn:262420625,qsizg:"lnbqwvysr"},"oezyevxsa"],488847761,[[{}],634696928,990819569,180190873,{dxqhh:["fktoittme",535027841,"nxfehvudv","iiamgiszz","dfbfwytev"],htopz:["jmcyxuhkn",983296317],nqann:["vyqanofhu"],rokia:["cvaxzpajb","wepbcyaqy","tztylxjnf","nylijrvhb"],tmwnw:"kgsajqlpf"}]]],{duhcr:{juvyk:904036291,pekjr:{llcaq:"msrxnwqpv",ugdvx:26231630,zfcwq:"gzirwoebl",zwgzx:{ddevj:{},ggxzx:"cjvqkgsfg",rnxci:"efpiityic",rpitg:"zhhhtvbuy",tvzmq:["yolhjvken"]},zwuog:"mxmdyvboc"},qqvoy:{acimh:[[75444049,"zoarwfqxf","huwgfsrqc",346364099],{},464567644],gcdqh:[["kzsmhjkas",567975941,"bxartjjqm"],["itkzrfhyc","fhqbxdzqx"],"omsthxcyo",{}],hdwlc:{bvria:["chpmcqwpe","ryspkqfnx","yhrhsxivf","wfdtkposx","hlqgopbyc"],bzlbs:"zkaduvllm",etapm:"xpchwphkh",kcnxs:"ckdmatblq",smzni:369529379},ohwts:667448049,qxmwd:{ijcuj:"xzhobyoxr",jkity:435582408,qjlbj:"piuqbzlho",qvpui:"mjsxiolvx",xlfzh:"bimeqdpuh"}},vojsz:{dqmlf:{gmays:836223694,gwpgp:["pgpozwlaa",587336148],uzlkm:{},vfzlv:"yqbgfbevu",xsvoi:"hmayrcpmr"},ielfn:194386541,lwdil:[[140205530,"zwlayqnpz","vfhqcswbl","qybfmgeta","kbgagsmec"],{},423231302,"nroafxcnp","wcvnixvwg"],tseyc:{fglmn:{},rlxts:["zjmgrkhhs",515677984,7818573,"qatnflksq","dgooxoyhy"],vzymt:"ceqzeurjt",xjaui:423090054,xztgt:149653311},wqohx:"wcjmyyhor"},ytrny:{guepy:{ggrux:{},ilveb:["zkaraydnq"],vefth:{},wfeax:"afnirtfbn",yaaop:["dwbsnayyt","ifighshit",124511855]},lfanj:44233238,nxled:{kbnjn:["ckufynrwb"],odtmu:["ijcmjcadk","kaiabgzfj","iokgxvceq"],oiway:[],shczv:[],ttczm:300270280},ozzie:["llslwbplq",420403131,"xmyrrqupk",{}],skkrt:427132673}},fkhrv:"nnruludoa",gtrfv:[],qjzkp:[{gkeuk:{aggcq:[],cpnfr:"emybbsuvm",erubc:"iigapvzss",jkmeg:"izrgpuhfj",kmcjj:160827207},gpkgx:257872257,syqid:"tmsxaqlpx",zkeza:{edrmp:["nenywyfju","maohzybhp","xfrbggrje","kqgkzejcs",288505281],rqyhe:"rxpmrzaig",srsem:"odyvpmkkg",wmiyj:"vgqjazuem",xjrzh:["hrvpdbbcz","dvyxbuwec",297410592]},zqdkx:[]}],rrnuj:{bloln:{creba:991659862,mjlct:302989685,mwgvr:[["kuqcepmob",341888004,"cwagtsbeu","nfumdsetv","snsncxdri"],508683449],uzmbk:{aiulm:{},egjqk:{},jwcmy:214376458,lcuqf:81171028,ujufk:["wamqjgbbb"]},ymkix:657152285},loeyk:"yyhohoupx",nmbbx:{gcvri:["zoagncvjh",{},767143420,{}],qtskv:{dekac:901032321,ldbpc:{},lnvyn:[],nllxg:901626124,unoky:"hwnyqhxzm"},xcujk:{fzcyb:["prstmhipt",722974991,"lbxnrepfs",337758129],irlcz:[723323112,"junljigof"],lpkce:"uhwyswsoz",mfvfn:{},tdrbv:"dtallhvlx"},xircy:[{},387003762,{},817081281,403163360],zrvku:{cwfpe:{},gftwh:{},gtgof:"sdcdxfpkq",nfhmq:{},veqbg:"sbgvmymuj"}},ryula:{fhpag:"qvtjrgrdz",hlxvt:[918279400,[],"xtocuimzq"],nlcog:245922047,tcoxx:621001175,tubwd:"vkdqmaioa"},xfyjy:"xfwhqufdg"}},[]],wetvl:"uimaptpqz"},vkigu:"pdnenjbhp",ziyek:{cliag:"ttteijlyd",dktwt:{buoij:969907143,crrfl:[{bzjfs:{drngk:[461622594],duczb:"upavmicne",ijzkv:78320866,pxuhs:"udimfodcf",wosay:"gouomksgw"},jfizx:758398749,lyxuk:["ujyedlzca",[["gzxoxivdv","tukqwsmhm"],["ubrerlcik","xgamqbwtr","shojktoip","huegvqyie"]],"ibqzebhwf",{atvng:258791110,riglv:888344636,uzcjq:"hfcbqrvkz",xyqaf:{},ztkem:{}}],rkgnt:"dhjjqzfno",wzpaw:{dexvt:{eilly:"pyntyuzpk",qmhzt:"vxpswfemy",ufxor:["mmdvokwcf","qvcoxafub","xnzwnpxom","drrelfjuy"],yczej:[710664178,"jpusyntoe",6082757,"vhobntvmd",738452442],ymqcy:{}},frvxw:["gjlkahgss",["whbrfpekd"],[133965486,"uznhotrer"],454026462],giqfi:{cjwtl:["sjrksnffk"],jjwir:{},jqkei:"uabbiubsj",kbdpf:{},vjkbj:{}},nzbtx:"mtoymrqib",ocnmk:"wyxyyoidr"}}],gpbyo:{cfbyj:{cgomw:[],glrlo:{gkdok:344197674,njlqp:{pfina:{},ssiqr:430479602,tojxy:["bkxapynfc"],vkdxv:"hmltcfawh",wrtoe:"fstwbrcby"},tccfu:{cityj:["ghlnwrgth","nwbrxovxx","zxxjhrjzd","huheegxfj",960448488],esslg:["zdyetgekk"],owsta:{},qetkv:781710297,yakdq:["osjcikpza",108536352,"vptxxbwlf","afbtahrad",21801452]},utexa:{aujdy:[],brhwe:["rnnlqmosq"],dquqc:119953795,fyvtp:["pikphpdth"],zdwvj:71249065},vbfno:"sabjeeqfr"},ojdwo:262099629,omzxg:"ehxlsxzhb",ptuku:"hymnerelq"},evgnd:{avios:"ygqrtggzo",hrryu:[],jecvd:{bmmen:["zwcgmpzdp"],hesgg:"ipkougytd",iuzvn:[33230140,46287790,594009678],ssxvk:440296605,yfpku:415471308},utklg:[],vdwes:[]},hcyvc:"xacyxrccg",kgiza:"sfvtfbbqd",xqacr:691969822},lysqs:{effou:[{asqgt:"qkriadrqh",mgdyk:"elqiyyiau",nbucf:"bhjqwzvsp",vhsjo:{fivbw:{},spxha:{},wouhu:{},yclic:{},ysdzh:"fdahoyouo"},yixoq:["ubxteldqp",["gtlghfnzs","futasmorv","lodfwzary","bkpxtbiba","ukefwatgz"],144703435,"ktcvxjbqf",{}]},["xigfikfhh",204036852,{bzpdu:{},dzxbh:["ghhkfdrzd","iisurinbd","nbsefaxgv","ntpuyoore","mfmipbkoe"],tkbff:{},yumdv:{},ywari:{}}],"sixcuwpik",721611915,"lwwtwcsxl"],juhsc:830050866,jzrub:["dsrhdponj",{cverr:{aqwkb:["aonmsjois",290876017],csvlm:[44370113,"rwdswjarl","qxzdugycg","suiqntvip","smhsrvxwp"],jbxtb:"veomsdigw",tknln:{},vsuec:"hjxpvaylx"},orwlz:"amzztnfmf",phesj:{aajfo:[516558497,"ahgaiguen","ubgjxabmj"],hzeuo:"lbribzwpn",jiqye:{},laptd:"xrfeaffqr",zssua:{}},pmcxq:{drxto:"yuliljxoh",kbpsm:{},lfsad:"jjepkjqco",ocgfc:{},wfakc:{}},qufoy:"zmbdnctja"},"zkkqnmemu","hgpknpbgm"],tsbls:{flgjr:{eecra:[{},"xvimjhlbw",3037835,"jqwcpyykq","fhxqzwapt"],kjekc:{gottv:[],hxdmz:[],lsbym:{},nmugp:871877306,puqgy:594928056},pdjzq:[{},"chpkqffgf",668929862,{}],qqfgo:{fxwza:709912047,lpbyv:"edlfoorwc",orqsn:387389527,uxyda:780602341,zlebx:{}},uxzmy:[{},"wipnyvbbr","ftxrpvbqc"]},isxfa:"cnvqficmn",mppnf:"qbnwoylzs",ofkzm:780911134,udabs:{ahngk:"nmltuhtbb",erpes:[{},"uxujuiisy","rmabynbcg"],ganus:{gnpzr:230003772,jczkz:182659220,ozwie:{},pogpn:"bofvcuozy",xurtq:"urbnifbyl"},qhlsf:"zostqvnlc",ylduy:[["nrgpwcwev","mgixcruek","anxmoczws"],"ehymrkuhe","zzwguvjcl",814522042,"kfqzkitjx"]}},twhks:["epmesonsx",946580151,[["gqgdsazos","mattxdbqh","ftpihahlo",["iplnjmgjb","qkwzaeasc"]]],{efghc:"opfnozbpp",kejjy:"dsotegnik",kpldc:[["uhbclxonm","pltcfsusr","qqzonecxe","xdwtgifum"],"tkxdqyprb"],vautp:{btfpy:{},ddbcy:["mjqtwpewh","wxftidzgo",259271179],gzjff:{},heykw:{},qqkcg:["jvqtbyggg"]},vcmmk:[686164230,"tlpxljupg",{},"fwffpjggn"]},[]]},tonrh:333220661},epoiu:{kwtil:{hsynz:"spvnijqzb",ndwdl:"zxprllhoi",pptte:{ddkjw:["hbvsxqidg",252481881],oocwn:"agijqflyk",rbupr:942690437,uuavt:[[["gqrnshgzr","dtuhlxmwe"],313183612,{},"tsmomdotc"],{nrbem:["txexxuqet","hrkccgbkv","jztgaigik"],tgjkt:291206281,vsghu:"rdzbmqfrv",xngpf:{},ygapq:128973777},{hxepi:150865526,iyufk:{},ohotf:[481324335,"tstbvcxsb"],oyoij:{},vazmo:374804672},[["oplsiffoe","utpxzovvk",735774094],{}]],vrxeh:{gkidm:{jfnpt:"ecqqbdbba",jyyye:107132573,onvnl:711269759,qlqgt:[],zmfxz:"mjqnozfdu"},htcck:915144898,itdvl:295515695,lxnww:[{},{},[576824584,795217179,"fysymyuzz","phlfyhiei"],{}],uqnaw:700466234}},tevmp:"htsqsnfvb",wpjzj:"yyhirttik"},mpxgv:{cvuvn:"lcjyhixpa",imjba:{jwngm:77477015,kzlng:{dasmc:198730162,ihzxl:399756266,onvrj:"oiotttdek",smnxw:"yalbafcxn",soogw:{arqvg:[517448170,493748733,"hkoxfacvo"],jbwee:"sevxcqbnw",jzbom:["cmmhrwfpk","ewjdjgsia","myjfjuyem","ctghjjjff"],mrxbf:759376009,urdrm:"zfbrwniyi"}},qxpcw:[{dkjdc:930555364,ftjdy:877044722,njzht:"fygabhvzl",pollx:{},vljoe:"pmuakdtmr"},{dobtv:{},faasl:"kgsslarhl",gbazz:262835750,gcuri:209406915,wumnt:{}},403064401],wciqz:321362618,zxwug:[585083762,564374622,[262674071]]},ldsky:"aljafmvdz",witcb:506891178,xdinv:[{lgvcq:456236960,oatgq:180264275,royob:409815,vnrwz:[697504289,238120053,"ereitzlxl",["faiplmqzl","xhrvmfwcx",940742119],{}],xlcsh:"akszifwea"},{gzvoh:726158445,mqerf:568571159,pmpvj:"qlfqphogd",vwhai:{fmrla:883207196,hojmt:"rqjohoewu",qhqju:{},wwvov:[952699029,966807946,376823464,608078205,"qbolayeel"],ypqqk:943966822},zhhmi:[[]]}]},rclkg:[{cqmbz:[],prerv:[{hnsjj:336236960,iodfc:["mfdxknhjr"],tbalq:["jkwzhqaoc",874863140,"nlwixmrxx"],tverz:["ujtkotspi","wibmlrxcb","szkfsvqne","mzvdwgcbr","njflhggpy"],vxuls:{}},{aruxp:{},dbqjh:{},kkfas:["xskwfphtk","qoujuhsvp","rzxjdgzgq",992399200],qvveo:536666480,vpzio:[961471237]},[],[[458630671,"rqxqvevai","ojtxshixg","wvrlbdjyy","ewozfwfwd"],51320210,["vdbznmmxj"],[98830195,"djhsajcjo",540759146],["uuhdikgca","pslvwtjns","vlfugrhev"]],[["idbcacxjc","jkpxglxeh","yjrpdbuks"],{},{},[],{}]],spect:614194515,uxvwv:{cpysv:["diamqrwfe"],flfeq:{ajxsv:{},itofu:61139045,rudia:[897429136,"rdvmvuydx","rjskydvvi","symzpaqbv"],xctae:{},yocmt:"nxfgshfcc"},ihhyk:[{},["zwdovwfhy","hjwrjwyxf","lrzldiscd","mwdtpofrh"],828219643],rdbug:623864930,zzedt:"yezvhnjxj"},ywoby:{abkcn:{bypxk:["dlrewlqsj","npkrlytrc"],etwsf:{},gnbcx:"kvzbahdzo",kfqft:"oamdeedah",lrsjm:"keiqczjvy"},ovqmp:{dxirr:423506327,klfcj:722834523,lgcoq:"debcdzqsw",niboy:"yzvxgawqt",wqnog:"ofingcgqw"},vurls:394336807,wjpfy:{bdjfl:{},clhqv:[110313317,"sxrwtldhu",396011041,"hirbkkqme",359483805],lkvwv:"lzqsrwroh",scycx:709179191,svmbc:{}},yjrpt:511215971}},[551150794,221561165,[[],{rpqmv:["rqxgflero","hsbomysfy","chpnbncki","jadynbgcz",661576312],rtlan:[],sjahe:525852715,uvjln:[],wbsws:["gcfnygvht","uoltazuns"]},{kmxba:"bmbabxomp",meucu:"kvbjojvpu",qafok:674560056,qsgsj:426436465,znaca:"mpkjpzycl"},140026260,{anhiz:["ntgptiwuj","zmhcvgota","iaeqtzqnt"],fujbx:205817837,lmgkq:{},rjwhz:{},zvrrs:940262018}],[],"iwepxkuox"],{agbuu:"cfjspsbqi",atlmb:572089161,gydok:["ejuujfrzx",{djrmg:609808361,grawi:539715290,ksysz:"eqwhavxjx",vphjo:911703876,xrtka:"hhostcicq"}],pzdjy:[288330304,317703314,632894503],rurhy:[]},"yjhfkeexd"],ymzth:[[774046068,924328509,[[{},[]],{jotxs:["xfgvknszy","mttohpvkb","rcldmhgqc","hwqecgjyt",131165709],ltqhy:{},lucnn:[690443923],yggix:{},yyxjj:{}},{ktaaz:"yzvjhpumb",reqqm:613683711,rjaix:{},tnnps:38393543,zcvpo:{}}],[]],392783257,["exefmqysr",172625390,54376883],682316308],zieqe:{mgxhz:{bmphy:[{akrsq:{},erfug:150907720,koowt:[],kxsjh:["limvfrlpm","oooluhfim","nfdehrcqq",283578493,657044604],mzlac:["njdtkwizm","ibxykcdlb",383042704,608579533]},"nfpiugqzp",952000829],exhxh:[],kvrac:361866204,lxdqx:{iombc:{fzacn:"rwwntnrzk",jnuiw:"hoamnwvfe",queni:["awntkpzfp","kecjomipn","jmkhyvxtj","ifrfuvycj"],rbdva:"affnpyjjn",yxsxc:["ulqunciwh","eiiitjqzt","xwrwwaxsx","akjswafbp"]},ipidv:{amewe:646630429,oqerh:{},skfqx:[747419128,"qtiqttdno","lvikczpxv"],szenp:["ylupgpsco","ndurlbsmk"],xcyqb:["zkibcfcjw"]},sezob:166661663,vbcio:{aoqgi:977036833,gzbrx:{},ihmvi:{},vpqsg:"wgvlquktb",zdqls:{}},xrqlx:578764543},nxhbi:[]},sjesj:{fugie:{cowkx:[],cyrlw:667152708,kqilo:{dhkas:[912518397,"zrvmuaxmh"],fmpet:{},pwzvo:["cqmnqeait","hvzsqquvx"],wbked:[],xycxe:{}},mssnj:[["qamoswusk","jvkbnhapb","oggzhezsz",893719122,50010313]],zoqws:"ejcdlrcav"},pjdjm:[],poccz:242469825,zbjqo:{axdbe:{gddog:["gvmplobjl","gjwyqnjno"],kazcd:"evhkundex",lbszk:{},nrmzq:"ubzipafni",oerzj:875354904},hieat:945867406,sxoca:854544752,szbwr:550613890,szizg:[{},[17114151,"ponpwlsra"],["zltwlymhq","bdzhbphmd","gikdgkaur",333215274,"pgbzqslyn"],["cqkpcbskn","zclthntde","rfqsmutlk","emkwxsczt"]]},zfrie:"qydomnoos"},tjiwj:491507610,xnulw:"jtonhvigv",zrbut:"ceerucxtm"}},gzhfh:635937258,nxuhw:"qffkwsrru"}},ibxwe:["scojicysu"],lcsug:[],rycog:"dstdtvefp",saiwi:{hxwmk:{brezx:[272956019,"qjpyigjda"],kifix:483967733,nufla:"jpdgrffgc",obpte:"kiwbxfich",tzrtl:["tsmrhorod",[{cksur:790949563,hnvzw:{anffl:{ayiga:864827896,edigk:["nnnhnadba","nziradkxd","apwgykmfy","safqlxzyq","ienbjuekm"],ezetl:724955509,gfglm:291332564,ktznm:425682669},dfjhm:{hjfqs:{},hqdpo:104364761,rryfy:7439691,vtcyi:{},whmii:["lmhjztrid","nbyuypbre","ageadyayv",451784331]},hukmj:"wyaufiwqd",jumwp:131371301,qjpaa:893064332},mycfy:{bfdbr:{aikrd:{},bnjet:514922753,krkgi:322413150,mevlm:["gyvkodtqs",320601921,"wldmlpkcv"],vlfxg:278169136},byzuq:{avwvk:"twfgvmbum",frkdc:"zqsdgtovv",gbxoz:"anskvvbmg",hxzox:"ngtyayfpp",lwumh:[894199377,207980679,"yhbveposo","oxnqbmsqe"]},cpylm:{bwpfm:{},dfrvy:{},jtnhm:719614905,tzpvg:{},wvmnn:"spolqbrzf"},rorzr:[745871489,"cwxozripp",538778902,[451003286,"xteuonrvh"],{}],weczn:{dalof:{},ikvrt:[874087746],kzykw:{},pvznr:{},suqdg:"vkbiwvziu"}},ndnpa:"pokrnnurc",zlnhx:["hnwrivpuj"]},{efkig:["dihuejatn"],eptgw:["dyjeejyoe",[821102188,{},{}],["ijffnlbhj","buflvxxqf",[554160016,810175136,"xshupbkfc"],"pioqxffnw"],[684343249,763071066,"vtajzkrbg",["mxermnuqr","mszpwnzys","xnrdafdtg","hmtodgoey"]]],fvtnq:{hwgvp:["afbbtejur",250762158],rohlj:462562681,vfdzp:{idktj:"eumbupmrq",ldzwq:["vdcvzwhtp","ztaplbosn",755758214,562549643],ofgrz:["occdpksbk",456873616,"hrxpeszvd",632740206,44936764],ujcrn:29691074,wjmfy:["eiynwqxsk"]},vlido:["yjfibdkdk",43716867],xdojg:"ivvkujzjw"},twcej:"vnvomuoda",vtxxe:[]}],[133614520,[{aqcof:{cpzgd:{},haehf:["xzatvilqq","rfdkjgsvi","nruvnojjz"],oflgz:["vieiydmtf",718618964,"necmduqwg",713472528],pupgm:"fbiqencrr",towkd:339609903},jwihi:["jmfnizojl",{},{},["kaubeucau","cvmjdsorm","jdekrlves"]],lhflh:{dnqbt:410062542,edejx:"squctctkp",guvhy:"wubxwhtus",jfors:{},vevsk:["szkktukya","pmqhvlsjx",290169962,"calfljkjt"]},udhut:[],veyxb:{ewlvu:["qbujirjsm","ubiliorxt","cdpobphpu"],jnkop:{},oromo:["hwkrygmth","ffyqdoszs","ijieoqyxb","xygqhkcba",876176088],umzqv:{},yloma:{}}},"ydofwxldy"],{ffbge:[[58167638],{autxy:"rdejdmyrf",gyjdf:"ygsdxcfbo",nvvud:["upaadzdle","rmntavxue","erimdspeh",298251734],ryxem:7231851,swmws:631756786},[135885094,784403650,"jwdkrewdt",[446087750,552503019,386765996,"qwjffggeu","nniagmtfz"],95069662]],keepq:"ihcmjwuev",mihtk:[],ssmqk:870347323,tiyfj:["ckeaypqvj",[564187120,["kyrjlshdl"]],"nkhslealx",[{},737698721,415780301,386435127]]},170450320,{jcpbv:[657366438,[["ceyjwijey","qgovsfjun","kkqlkttij",673523511],673786136]],rxahh:{hofzf:"lqpifmmmq",lrwwi:{azdhf:141393241,batnb:"xmmvznorg",mbzbv:867749589,pzhbt:["oajaqymji",341753416,"fivuakinu","qwbjfcqpo"],sgevb:{}},okbbi:"lgpdsbimh",vparn:"cdxvmnqri",xsyde:"vaivqoebd"},sbzjg:[639929278],tygur:86470970,vxkmh:263991795}],{gqtrg:"vkmctumxh",ljruv:[],nwwuq:{dfxro:[],gfxsw:[{dsfsy:["rndzwbmag","qzgogyfmx","qdvomuxkp",839689608],gkqms:{},jenwg:{},nflfd:"aftfyelnu",shdak:"lxzeolfpe"},783511118],jbqul:185725508,kcyhd:[42891614,{bqgmf:755134488,dumvq:581465635,gthlf:{},nupxz:380069454,xzsze:"nwxuvixey"},[{},"jnhmfwfaz"],["xnhoatyxh","ftcxogdcy",{},{}],333075609],zdyld:167951594},tjfzs:[{cudyo:"tkpsyxvig",qklkb:29390614,ruuwp:[["drhjpiwwc","fptnpvcwt","yrypxjsgc"],{},995459550,833419198],wsyww:"ethtmpfgg",xfffs:[{},{},{},712651077,"auswwwerf"]},689444455,81903200],wehvo:520842574}]},lbmvo:138561533,nrxce:"udknafpzc",tvfnr:869532555,ynoic:[]}}}]
Benchmarking...
Native JSON x 2,059 ops/sec ±0.25% (92 runs sampled)
JSON5 x 347 ops/sec ±0.74% (87 runs sampled)
JSON6 x 563 ops/sec ±0.36% (92 runs sampled)
JSOX x 210 ops/sec ±0.61% (86 runs sampled)
YAML x 49.49 ops/sec ±4.87% (65 runs sampled)
JSYAML x 215 ops/sec ±0.91% (82 runs sampled)
Custom YAML x 1,982 ops/sec ±0.39% (93 runs sampled)
Fastest is Native JSON
```
```Javascript
> node app queue

<================SHIFT POP VS. QUEUE================>
Test case 1:
[
  [
    [ true, 472565511 ],    [ true, -1338046223 ],  [ true, -695106601 ],  
    [ true, 1142627667 ],   [ false, -2046240257 ], [ true, 1008098481 ],  
    [ true, -922960531 ],   [ false, -1479513919 ], [ false, -1926851023 ],
    [ false, 731761243 ],   [ false, 2029398391 ],  [ false, -1046152571 ],
    [ true, 447646185 ],    [ true, -735969623 ],   [ true, -3270959 ],    
    [ false, -1172524159 ], [ true, 22500963 ],     [ false, 1910924619 ], 
    [ false, -1339383181 ], [ true, 540206463 ],    [ false, -1711559567 ],
    [ false, 551553849 ],   [ true, 1389979751 ],   [ false, 926533435 ],  
    [ false, -803471953 ],  [ true, -1301082989 ],  [ false, 427050693 ],  
    [ true, 132273973 ],    [ false, -1281111655 ], [ false, 463534061 ],  
    [ true, -1267715059 ],  [ true, 1385127557 ],   [ true, 1811550759 ],  
    [ false, -599704169 ],  [ true, 582617647 ],    [ true, -1952578615 ], 
    [ false, 1628355923 ],  [ true, 1021056791 ],   [ true, 786836801 ],   
    [ true, -656955881 ],   [ false, -810063211 ],  [ false, 1534938457 ], 
    [ true, -1984715689 ],  [ true, -146600567 ],   [ true, -404815451 ],  
    [ false, -777617779 ],  [ true, -874153045 ],   [ true, 1603964471 ],  
    [ false, -532701489 ],  [ true, 580621173 ],    [ true, 2106670793 ],  
    [ false, -1517045669 ], [ false, 1554276641 ],  [ false, -225721521 ], 
    [ false, -862306425 ],  [ true, 974365921 ],    [ false, -1782494545 ],
    [ false, -1310049941 ], [ true, 347256793 ],    [ false, 1714245641 ], 
    [ false, -268686261 ],  [ false, 1972003083 ],  [ false, 1402263871 ], 
    [ false, -1796029383 ], [ true, 1222565233 ],   [ true, 1411787215 ],  
    [ true, -1399416525 ],  [ false, 1490661549 ],  [ false, -1963549911 ],
    [ false, -153735871 ],  [ false, -736829969 ],  [ false, 1643645063 ], 
    [ false, 988692895 ],   [ false, -652559453 ],  [ true, 2035498625 ],  
    [ true, -192985931 ],   [ true, 291037617 ],    [ false, 1062857 ],    
    [ true, 1980856161 ],   [ false, -621039439 ],  [ false, -610587427 ], 
    [ false, 51941823 ],    [ true, -1995327001 ],  [ false, -678736065 ], 
    [ false, 1141039975 ],  [ true, -421049885 ],   [ true, -1384855359 ], 
    [ true, 2101935459 ],   [ true, 603320555 ],    [ true, 1256377419 ],  
    [ true, -1172777573 ],  [ false, -1832532825 ], [ true, 2005814009 ],  
    [ false, 963414553 ],   [ true, 1630805715 ],   [ true, 2063725423 ],  
    [ false, 1459883039 ],  [ true, 922241805 ],    [ true, 296065035 ],   
    [ false, -1051319535 ]
  ]
]
Candidate: Shift Pop
7
Candidate: Queue
7
Benchmark case:
[
  [
    [ false, 1774384325 ],  [ false, -129054237 ],  [ true, -1822434291 ],
    [ true, 1436015271 ],   [ true, -237591417 ],   [ false, -1342668257 ],
    [ true, -1213365533 ],  [ true, -1091088647 ],  [ true, -709598591 ],
    [ false, 722581971 ],   [ false, 213717713 ],   [ true, -1234247655 ],
    [ false, -1768091655 ], [ true, -1064991533 ],  [ true, -2008579973 ],
    [ true, 1344169613 ],   [ true, 1343009643 ],   [ true, -802361739 ],
    [ false, 150541779 ],   [ false, 113735351 ],   [ false, 2109876131 ],
    [ true, 1808955981 ],   [ false, 675667413 ],   [ true, 1671017781 ],
    [ true, -847975459 ],   [ false, -1863868587 ], [ true, -1305782541 ],
    [ true, 1109819651 ],   [ false, -1247064443 ], [ false, 808369139 ],
    [ false, -1040120863 ], [ true, -1133220023 ],  [ true, 2028340303 ],
    [ true, 120359429 ],    [ true, 1135391663 ],   [ true, 554405751 ],
    [ false, -1783235579 ], [ true, -1883920993 ],  [ false, 1603861445 ],
    [ false, -539326213 ],  [ true, 1043319123 ],   [ false, -2039621725 ],
    [ false, -90746601 ],   [ true, 2014942835 ],   [ false, 330623185 ],
    [ false, 983057291 ],   [ false, 555930175 ],   [ false, 1344736247 ],
    [ true, -1983482211 ],  [ false, -1594245817 ], [ true, -2139416831 ],
    [ true, -836331073 ],   [ true, 1393081223 ],   [ false, -1034315755 ],
    [ true, 1070606557 ],   [ true, -987509253 ],   [ false, -374893361 ],
    [ true, -166243141 ],   [ true, -477854651 ],   [ false, 252852205 ],
    [ true, -887911963 ],   [ false, 1428138507 ],  [ false, -737183923 ],
    [ false, 437487755 ],   [ true, -1700504125 ],  [ false, 1387485037 ],
    [ true, 1198081579 ],   [ true, -1187399973 ],  [ false, 1825992235 ],
    [ true, 979377343 ],    [ false, 409760629 ],   [ false, 1043761257 ],
    [ true, 836033165 ],    [ true, 2034550599 ],   [ false, -1584141087 ],
    [ false, -1234140665 ], [ true, -492598799 ],   [ false, -170865095 ],
    [ false, -2096714465 ], [ false, 900388415 ],   [ true, 418511525 ],
    [ true, -488741585 ],   [ false, -1521170743 ], [ false, -809722143 ],
    [ false, -1924646367 ], [ false, -1981798683 ], [ true, 355836175 ],
    [ true, 2093709813 ],   [ true, 1603144529 ],   [ false, 1278786693 ],
    [ true, 712527097 ],    [ false, 433028377 ],   [ false, 1427054121 ],
    [ false, 741130557 ],   [ false, 681124763 ],   [ false, 1865733051 ],
    [ false, -270526401 ],  [ false, -97585623 ],   [ true, -234341769 ],
    [ false, 1188671019 ],
    ... 9900 more items
  ]
]
Benchmarking...
Shift Pop x 4,082 ops/sec ±0.32% (90 runs sampled)
Queue x 3,298 ops/sec ±0.61% (88 runs sampled)
Fastest is Shift Pop
```
```javascript
> node app sort

<================SORT FLOAT NUMBERS================>
Test case 1:
[
  [
    -71, -72, -38, -18, -93,  10,   2,  63, -66, -80, -78,  78,
     33, -95,  95, -66, -40,  18,  42,  39,  63, -41,   0, -14,
    -83,  92, -31, -60,  55,  68, -15, -32,  37,  44,  12, -57,
      2,   7,  60, -76, -91, -75,  49, -91, -41, -24,  62,  19,
      2, -68,   8,  94,   5,  19, -45, -42,  64, -35,  66, -14,
     18,  61, -32,  62, -38,  94, -31,  20, -88,  47,  33, -48,
     21,  38, -59,  71,  69,  87,  61, -69, -63, -41, -60, -97,
     19,  13,  81,  -9, -46, -15,  61,  79,  69,  44, -93,  67,
    -89, -17,  44,  88
  ]
]
Candidate: Default
[
   95,  94,  94,  92,  88,  87,  81,  79,  78,  71,  69,  69,
   68,  67,  66,  64,  63,  63,  62,  62,  61,  61,  61,  60,
   55,  49,  47,  44,  44,  44,  42,  39,  38,  37,  33,  33,
   21,  20,  19,  19,  19,  18,  18,  13,  12,  10,   8,   7,
    5,   2,   2,   2,   0,  -9, -14, -14, -15, -15, -17, -18,
  -24, -31, -31, -32, -32, -35, -38, -38, -40, -41, -41, -41,
  -42, -45, -46, -48, -57, -59, -60, -60, -63, -66, -66, -68,
  -69, -71, -72, -75, -76, -78, -80, -83, -88, -89, -91, -91,
  -93, -93, -95, -97
]
...
Outputs are identical
Test case 2:
[
  [
    -44, -57, -56, -23,  -87, -75,  75, -68,  83, -20,  93, -80,
     50,  61, -18,   7,   38,  99,  74,  99,  94, -32,  35,  33,
    -40, -46,  15,  19,  -38, -88,  58,  60, -37,  52,  22,  51,
    -97,  48, -75, -22,   73, -12,  83,  34, -92, -46,  79,  52,
    -57, -83,  53,  79,   -3,   4, -92, -64, -99,  79,  58,  83,
     30,  27, -17,  96,   34,  95, -86, -38, -24,  22, -19, -60,
    -56,  83,   7,  67, -100,  64,  76,  12,  89,  94,  49,  78,
    -55, -12,  37, -96,   32,  54,  -8,  62, -63,   8, -99,  61,
     86,  84, -49, -94
  ]
]
Candidate: Default
[
   99,  99,  96,   95,  94,  94,  93,  89,  86,  84,  83,  83,
   83,  83,  79,   79,  79,  78,  76,  75,  74,  73,  67,  64,
   62,  61,  61,   60,  58,  58,  54,  53,  52,  52,  51,  50,
   49,  48,  38,   37,  35,  34,  34,  33,  32,  30,  27,  22,
   22,  19,  15,   12,   8,   7,   7,   4,  -3,  -8, -12, -12,
  -17, -18, -19,  -20, -22, -23, -24, -32, -37, -38, -38, -40,
  -44, -46, -46,  -49, -55, -56, -56, -57, -57, -60, -63, -64,
  -68, -75, -75,  -80, -83, -86, -87, -88, -92, -92, -94, -96,
  -97, -99, -99, -100
]
...
Outputs are identical
Test case 3:
[
  [
    -97249, -40312,
    -31702, -31565,
     -6541,   8711,
     14236,  32509,
     86222,  94131
  ]
]
Candidate: Default
[
   94131,  86222,
   32509,  14236,
    8711,  -6541,
  -31565, -31702,
  -40312, -97249
]
...
Outputs are identical
Test case 4:
[
  [
    -21, 87,  86, -95,  88,  83,  55,  12, -17, -66, -79, -81,
    -95, 97,  67, -12, -75, -75,  36, -31, -97,  68,  60,  29,
     91, 86,  74,  53,  43,  31,  14,   6,  -2, -74, -17,  99,
    -87,  4, -29, -68, -94,  98,  38,  50,  37,  26, -13, -54,
    -93, 77, -24,  79,  76,  41,  23,  19, -17, -57, -68, -86,
    -98, 43,  27,  -1, -43,  86,  74,  48,  12,   8,  -5, -92,
     75, 10,  -9, -19,  93,  89,  49,  48,  22,  14,   9, -18,
    -66, 73,  72,  61,   5, -28, -39, -49, -54, -69, -86,  75,
     63, -6, -67, -98
  ]
]
Candidate: Default
[
   99,  98,  97,  93,  91,  89,  88,  87,  86,  86,  86,  83,
   79,  77,  76,  75,  75,  74,  74,  73,  72,  68,  67,  63,
   61,  60,  55,  53,  50,  49,  48,  48,  43,  43,  41,  38,
   37,  36,  31,  29,  27,  26,  23,  22,  19,  14,  14,  12,
   12,  10,   9,   8,   6,   5,   4,  -1,  -2,  -5,  -6,  -9,
  -12, -13, -17, -17, -17, -18, -19, -21, -24, -28, -29, -31,
  -39, -43, -49, -54, -54, -57, -66, -66, -67, -68, -68, -69,
  -74, -75, -75, -79, -81, -86, -86, -87, -92, -93, -94, -95,
  -95, -97, -98, -98
]
...
Outputs are identical
Benchmark case:
[
  [
    -751, -189,  -30,  300, -778, -708,  -12, -710,
     997, -113,  755, -640, -703,   -9, -402,  110,
    -182,  545,  766,  553, -327, -795, -212, -471,
     -37,  888,  790, -778, -956,   67, -349,  -69,
     498,  846, -597,  -55,  151, -385, -318, -790,
    -232,   50,   83, -553,   71,  281, -192, -159,
     -98,   98
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 196,272 ops/sec ±0.68% (89 runs sampled)
TimSort x 537,861 ops/sec ±0.67% (93 runs sampled)
QuickSortOld x 555,971 ops/sec ±0.48% (90 runs sampled)
QuickSortMid x 839,516 ops/sec ±0.29% (91 runs sampled)
QuickSortMed3 x 864,707 ops/sec ±0.19% (92 runs sampled)
IntroSort x 313,292 ops/sec ±0.85% (92 runs sampled)
Fastest is QuickSortMed3
Benchmark case:
[
  [
     -602991151410185.5,  473383667657423.75,   652628985989937.2,
     -888357071828384.2,   801306846070177.2, -128218190768384.62,
     -669985142325074.9,  -575904499842996.8,   979744167173980.5,
        375302667878891,  -563637857575552.2, -248946212284520.25,
     -649006013681114.5,  316447947460383.75,  545235218152891.25,
      393263786206608.5,      -6838313755384,  -365792128824009.6,
     -419010545652342.5,     596721611048337,     295351061922020,
      961635010992270.5,   872909949522740.2,   702939939993451.8,
     346822166956781.75, -509793211580829.94,   -94945459615118.5,
     -914015942811894.4,  354906519602004.25,  -717173216515487.6,
      715983944927311.5,  -389649225830208.6, -399146592876878.75,
     -954214089392114.5,   304823382003703.5,    89018622167781.5,
       -678904289870025,   413242122711654.5,     985383842016577,
     -689609664030578.5,   697236776951098.8,   925727375766935.5,
     -643901822311739.6, -17111623522501.125,   2351239406534.125,
      647801920222495.8,     436518644425992,  -14878962957552.25,
     -371996259645411.1,   950556956063586.2,  -950371817147824.1,
    -56089036968813.875,    -628370447922554,   252657166757329.5,
       -762278421158248,  -851251440876374.5,  -653028934211497.9,
      969924870201298.2,   191373415471265.5,  29527879899217.375,
        966428488531582,  -959035518309705.5,   26263592595036.25,
     116777904855993.62, -442349364227758.75, -547917857481540.44,
    -187448957246146.62,   847368178579362.2,  -877929684686964.4,
     -846546885071986.9,  -694028799253765.8, -208109541028611.12,
      195787157372567.5,  155960425406586.75,  544681026837020.75,
     -884065783959657.8,   257359366513672.5,   58197775232102.75,
      968449321066470.5,  524847447563600.25,  -570905433776367.5,
      703113120272175.5,  -959551354644387.5,     872386026635489,
       60025793651818.5,   517168203565486.5,  -821261089772778.4,
    -34399107757526.125,   865828398307319.5,  -550221520615571.2,
     497130968494149.25,  48474550274515.875,  -782417742258211.5,
      925009589217301.8,      31156404189725,  -438919735799224.5,
        576995385778142,   789836744845609.8,   476110354250006.5,
     22505725767282.875,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 1.06 ops/sec ±5.24% (7 runs sampled)
TimSort x 3.99 ops/sec ±4.96% (14 runs sampled)
QuickSortOld x 6.30 ops/sec ±0.27% (20 runs sampled)
QuickSortMid x 7.38 ops/sec ±0.21% (23 runs sampled)
QuickSortMed3 x 7.66 ops/sec ±0.14% (23 runs sampled)
IntroSort x 5.67 ops/sec ±1.03% (19 runs sampled)
Fastest is QuickSortMed3
Benchmark case:
[
  [
    -100000, -100000, -100000, -100000, -100000, -99999, -99999,
     -99999,  -99999,  -99999,  -99999,  -99999, -99999, -99998,
     -99998,  -99998,  -99997,  -99997,  -99996, -99996, -99996,
     -99996,  -99996,  -99996,  -99996,  -99996, -99995, -99995,
     -99995,  -99995,  -99994,  -99994,  -99994, -99993, -99993,
     -99992,  -99992,  -99992,  -99992,  -99991, -99990, -99990,
     -99990,  -99990,  -99990,  -99989,  -99989, -99989, -99989,
     -99989,  -99989,  -99989,  -99988,  -99988, -99988, -99988,
     -99987,  -99987,  -99987,  -99987,  -99986, -99986, -99986,
     -99986,  -99985,  -99985,  -99985,  -99985, -99985, -99985,
     -99984,  -99984,  -99984,  -99983,  -99983, -99983, -99983,
     -99983,  -99983,  -99982,  -99982,  -99982, -99982, -99982,
     -99982,  -99981,  -99981,  -99981,  -99981, -99981, -99981,
     -99981,  -99981,  -99980,  -99980,  -99980, -99980, -99980,
     -99980,  -99980,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 4.84 ops/sec ±0.66% (17 runs sampled)
TimSort x 7.47 ops/sec ±0.91% (23 runs sampled)
QuickSortOld x 13.53 ops/sec ±0.59% (37 runs sampled)
QuickSortMid x 14.48 ops/sec ±0.39% (40 runs sampled)
QuickSortMed3 x 10.13 ops/sec ±0.21% (29 runs sampled)
IntroSort x 16.01 ops/sec ±0.73% (43 runs sampled)
Fastest is IntroSort
Benchmark case:
[
  [
      999989202934839, 999961566379880.2,   999927475524634, 999913505287621.8,    999869889767016.8,   999849532698032, 999807706170063.8,   999784180369185,      999768817009996, 999766359297956.8,   999659750113477, 999638873848724.5,    999637272679664.5,   999632909000237,   999612434207748, 999609712457249.5,      999470377553148, 999449095883712.2, 999426804043870.2, 999378619665528.8,    999377787415068.8, 999355064216071.5, 999343020495165.2, 999336679469102.8,    999322105840366.5, 999185896936278.2, 999169453094945.2, 999140064682545.8,    999105370514992.5, 999092369717563.2,   999044614238357, 999044521538033.8,    999025760698587.2, 998956166259706.2,   998953427806331, 998951955421380.2,    998918903941077.2, 998913485685854.5, 998898346103613.5, 998884263568789.8,    998850200154014.2, 998846077887635.8,   998765589847264, 998748469120862.2,      998724766986927, 998712968874966.8,   998682594516206, 998653903587843.2,      998611269915770, 998608846919658.2, 998594175489813.5,   998580485560046,    998580377028697.5, 998560201158263.8,   998536116309869,   998527816647715,    998422636426414.8, 998398680101980.5, 998354460321179.8, 998329156631608.5,      998304566703382, 998297758763564.5,   998291211095736, 998275937817360.2,      998264683944445,   998252226819726, 998217040928248.8, 998176822865346.5,    998160160040064.2,   998150830661372,   998128789325563, 998123312941272.5,    998099601829795.5, 998087842755854.5, 998076204569676.5, 998047974406263.8,    997950216899395.2,   997918519565769, 997890140587962.5, 997880474933139.2,    997852759413507.5, 997832314542729.5,   997812459998627,   997809974048046,    997800388748881.2,   997798405833207, 997763053997034.2, 997745775519786.2,      997738474184552, 997715362685844.8,   997702967487716, 997662661562520.8,    997610094939631.5, 997609423491166.8,   997602447426193, 997571927210430.8,      997537361478071, 997515491904753.8, 997510975457895.5, 997495776846675.8,    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 1.07 ops/sec ±4.09% (7 runs sampled)
TimSort x 3.62 ops/sec ±6.32% (13 runs sampled)
QuickSortOld x 6.47 ops/sec ±0.18% (20 runs sampled)
QuickSortMid x 7.72 ops/sec ±0.18% (23 runs sampled)
QuickSortMed3 x 7.77 ops/sec ±0.12% (24 runs sampled)
IntroSort x 5.81 ops/sec ±0.86% (19 runs sampled)
Fastest is QuickSortMed3
```
```javascript
> node app sortint

<================SORT 32-BIT UNSIGNED INTEGERS================>
Test case 1:
[
  [
     1112, 46998, 26422,
    98436, 48083, 67786,
    70966, 36574, 35254,
      255
  ]
]
Candidate: Default
[
    255,  1112, 26422,
  35254, 36574, 46998,
  48083, 67786, 70966,
  98436
]
...
Outputs are identical
Benchmark case:
[
  [
    984, 830,  99, 208,  48,  95, 647, 590, 612, 595, 388, 393,
    807, 700, 867, 351, 388, 861, 391, 698, 306, 963, 765, 795,
    833, 668, 991, 949, 957, 607, 463, 338, 320, 240, 814, 609,
    109, 496, 246,  48, 704, 551, 948, 113, 110, 338, 306,  32,
    230, 203, 226, 961, 535, 806, 893,  84, 276,  20, 285, 988,
    366, 305, 277, 509, 558, 240, 141, 617, 776, 881, 526, 876,
    750, 980, 359, 461,  80, 971, 188, 580, 693, 954, 744, 357,
    107, 297, 158, 866, 498, 234, 955, 107, 880,  91, 889, 319,
    350, 215, 520, 592
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 80,382 ops/sec ±0.30% (87 runs sampled)
TimSort x 228,363 ops/sec ±1.68% (88 runs sampled)
QuickSort x 389,914 ops/sec ±0.14% (92 runs sampled)
RadixSort x 158,110 ops/sec ±0.56% (91 runs sampled)
CountingSort x 76,438 ops/sec ±0.24% (90 runs sampled)
Fastest is QuickSort
Benchmark case:
[
  [
     40, 865, 876, 993, 288,  31, 311, 400, 349,  39, 165, 649,
    714, 121, 638, 119, 252, 438,  87, 474, 773, 527, 205, 658,
    172, 544, 526,  24, 717,  49,  52, 133, 213, 225,  76, 929,
    572, 979, 820, 867, 726,  94, 138, 804, 987, 308, 838, 425,
    695, 174,  92, 952, 699, 972, 634, 490, 896, 997, 357, 726,
    998, 755, 601, 945, 344, 488, 544, 847, 682, 138, 913, 464,
    389, 198, 299, 512, 400, 198, 942, 651, 319, 358, 377, 348,
    538,  19, 244,  73, 420,  45,  32, 420, 561, 739, 852, 228,
    435, 129, 915, 192,
    ... 900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 4,883 ops/sec ±0.56% (90 runs sampled)
TimSort x 11,378 ops/sec ±0.21% (93 runs sampled)
QuickSort x 16,280 ops/sec ±0.19% (90 runs sampled)
RadixSort x 36,196 ops/sec ±0.52% (94 runs sampled)
CountingSort x 17,639 ops/sec ±0.20% (92 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
    18557, 18696, 15345, 93554, 32759, 85855, 38148, 89236,
    28486, 30325, 24230, 32266, 77888, 19853, 52221, 58944,
    93925, 37094, 13106,  8370, 70118, 86137, 17945, 39985,
    24640, 13217, 90160, 59006, 30302, 65891, 18868, 27604,
    59829, 50026, 36420, 74911, 42019, 96592, 99630, 54079,
    18110,  2845, 48127, 33949, 34956, 94637, 90359, 90965,
    88617,  3395, 63206, 79796, 74132, 36524, 27998, 76737,
    24432, 26999, 19154, 93540, 53062, 23686,  8136, 93819,
    53101, 28664, 77963, 81795, 94009, 40542,  3108, 38560,
     2250, 17419, 80232, 41835, 99243, 97913, 25185, 10356,
    10941, 97545, 27710, 38542, 72496, 65974, 66761, 45627,
    84885, 89063, 39071, 81740, 35012, 75609, 47238, 33083,
    78156, 18671, 70213, 85870,
    ... 99900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 28.23 ops/sec ±0.75% (50 runs sampled)
TimSort x 58.03 ops/sec ±1.61% (59 runs sampled)
QuickSort x 89.17 ops/sec ±0.20% (74 runs sampled)
RadixSort x 331 ops/sec ±0.75% (85 runs sampled)
CountingSort x 45.61 ops/sec ±0.65% (58 runs sampled)
Fastest is RadixSort
Benchmark case:
[
  [
      12517380, 1689983794, 1743737466, 1134521624, 1722928184,  955811076,    
    1340713275, 1106612292, 1543005917,  321062417, 1940731875, 1008730863,    
     554086983, 1854795258,  432677176,  565491336, 1779152063, 1249861527,    
    1776301533,  321169217, 1468469726, 1034413359,  784760322, 1353999925,    
    1271720987, 1531126690, 1614519522, 1868999454,  514778704,  462554594,    
    1287714211, 1444257535,  871557582,  207560730,  820546415,  234244211,    
     678670915,   95889158,  115235645, 1224555878,   48316378, 1548494664,    
    1415828337,  181144330,  696276183, 1240276293, 1415018904, 1423697619,    
    1920627348, 1313269597,  198772256,  874818055, 1108393426, 1277077736,    
    1018447560, 1737148762, 1394149049,  713784508,  415376391, 1313744253,    
    1174294244,  788845385,  749787253,  308864858, 1747522511,  309954136,    
    1593987275, 1207296477, 1787242102, 1465856498, 1388614400,    2672681,    
     396508577, 1494856251,  130255803,  360815534,  439497477,  654786652,    
     679923352,  313760799, 1823387525,  219173875,   81250428, 1101194764,    
    1920091498,  162903888, 1413315376,  856621695, 1626208791,  972984494,    
    1537561753, 1923861577, 1224256916,  919914275,  490699730,   15070269,    
     551706666,  471762056, 1705357463, 1715676842,
    ... 999900 more items
  ]
]
Checking outputs...
Outputs are identical
Benchmarking...
Default x 2.26 ops/sec ±2.57% (10 runs sampled)
TimSort x 4.71 ops/sec ±2.67% (16 runs sampled)
QuickSort x 7.51 ops/sec ±0.94% (23 runs sampled)
RadixSort x 30.56 ops/sec ±1.03% (53 runs sampled)
CountingSort x 0.66 ops/sec ±3.29% (6 runs sampled)
Fastest is RadixSort
```