// Copyright 2024 justin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { ethers, network } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Test Anything", () => {
          it("console table", async () => {
              //3072
              console.table([
                  ["0", "λ3072", "T2^20", "6059057", "6068444", "9387", "12037", "12005", "64"],
                  ["0", "λ3072", "T2^21", "6360887", "6370691", "9804", "12549", "12517", "64"],
                  ["0", "λ3072", "T2^22", "6695243", "6705481", "10238", "13061", "13029", "64"],
                  ["0", "λ3072", "T2^23", "6990100", "7000592", "10492", "13573", "13541", "64"],
                  ["0", "λ3072", "T2^24", "7347520", "7358563", "11043", "14085", "14053", "64"],
                  ["0", "λ3072", "T2^25", "7676344", "7687751", "11407", "14597", "14565", "64"],
                  ["1", "λ3072", "T2^20", "5742593", "5751595", "9002", "11525", "11493", "64"],
                  ["1", "λ3072", "T2^21", "6043333", "6052753", "9420", "12037", "12005", "64"],
                  ["1", "λ3072", "T2^22", "6376591", "6386452", "9861", "12549", "12517", "64"],
                  ["1", "λ3072", "T2^23", "6668579", "6678678", "10099", "13061", "13029", "64"],
                  ["1", "λ3072", "T2^24", "7026088", "7036738", "10650", "13573", "13541", "64"],
                  ["1", "λ3072", "T2^25", "7353057", "7364088", "11031", "14085", "14053", "64"],
                  ["2", "λ3072", "T2^20", "5429268", "5437894", "8626", "11013", "10981", "64"],
                  ["2", "λ3072", "T2^21", "5727488", "5736523", "9035", "11525", "11493", "64"],
                  ["2", "λ3072", "T2^22", "6059317", "6068786", "9469", "12037", "12005", "64"],
                  ["2", "λ3072", "T2^23", "6356778", "6366500", "9722", "12549", "12517", "64"],
                  ["2", "λ3072", "T2^24", "6706438", "6716711", "10273", "13061", "13029", "64"],
                  ["2", "λ3072", "T2^25", "7031478", "7042124", "10646", "13573", "13541", "64"],
                  ["3", "λ3072", "T2^20", "5119142", "5127391", "8249", "10501", "10469", "64"],
                  ["3", "λ3072", "T2^21", "5415909", "5424568", "8659", "11013", "10981", "64"],
                  ["3", "λ3072", "T2^22", "5747466", "5756542", "9076", "11525", "11493", "64"],
                  ["3", "λ3072", "T2^23", "6046605", "6055951", "9346", "12037", "12005", "64"],
                  ["3", "λ3072", "T2^24", "6390575", "6400455", "9880", "12549", "12517", "64"],
                  ["3", "λ3072", "T2^25", "6712066", "6722320", "10254", "13061", "13029", "64"],
                  ["4", "λ3072", "T2^20", "4814762", "4822627", "7865", "9989", "9957", "64"],
                  ["4", "λ3072", "T2^21", "5108531", "5116813", "8282", "10501", "10469", "64"],
                  ["4", "λ3072", "T2^22", "5440101", "5448800", "8699", "11013", "10981", "64"],
                  ["4", "λ3072", "T2^23", "5735809", "5744779", "8970", "11525", "11493", "64"],
                  ["4", "λ3072", "T2^24", "6084221", "6093709", "9488", "12037", "12005", "64"],
                  ["4", "λ3072", "T2^25", "6399884", "6409753", "9869", "12549", "12517", "64"],
                  ["5", "λ3072", "T2^20", "4518082", "4525562", "7480", "9477", "9445", "64"],
                  ["5", "λ3072", "T2^21", "4809293", "4817182", "7889", "9989", "9957", "64"],
                  ["5", "λ3072", "T2^22", "5140037", "5148344", "8307", "10501", "10469", "64"],
                  ["5", "λ3072", "T2^23", "5433119", "5441711", "8592", "11013", "10981", "64"],
                  ["5", "λ3072", "T2^24", "5779245", "5788340", "9095", "11525", "11493", "64"],
                  ["5", "λ3072", "T2^25", "6093236", "6102721", "9485", "12037", "12005", "64"],
                  ["6", "λ3072", "T2^20", "4234294", "4241398", "7104", "8965", "8933", "64"],
                  ["6", "λ3072", "T2^21", "4524646", "4532142", "7496", "9477", "9445", "64"],
                  ["6", "λ3072", "T2^22", "4852236", "4860150", "7914", "9989", "9957", "64"],
                  ["6", "λ3072", "T2^23", "5148808", "5157024", "8216", "10501", "10469", "64"],
                  ["6", "λ3072", "T2^24", "5492113", "5500823", "8710", "11013", "10981", "64"],
                  ["6", "λ3072", "T2^25", "5802174", "5811274", "9100", "11525", "11493", "64"],
                  ["7", "λ3072", "T2^20", "3976241", "3983128", "6887", "8453", "8421", "64"],
                  ["7", "λ3072", "T2^21", "4270428", "4277713", "7285", "8965", "8933", "64"],
                  ["7", "λ3072", "T2^22", "4591928", "4599627", "7699", "9477", "9445", "64"],
                  ["7", "λ3072", "T2^23", "4886223", "4894246", "8023", "9989", "9957", "64"],
                  ["7", "λ3072", "T2^24", "5226788", "5235285", "8497", "10501", "10469", "64"],
                  ["7", "λ3072", "T2^25", "5536105", "5545014", "8909", "11013", "10981", "64"],
                  ["8", "λ3072", "T2^20", "3780209", "3779420", "-789", "7973", "7909", "128"],
                  ["8", "λ3072", "T2^21", "4093213", "4068451", "-24762", "8485", "8421", "128"],
                  ["8", "λ3072", "T2^22", "4420138", "4393257", "-26881", "8997", "8933", "128"],
                  ["8", "λ3072", "T2^23", "4712856", "4684038", "-28818", "9509", "9445", "128"],
                  ["8", "λ3072", "T2^24", "5053646", "5022659", "-30987", "10021", "9957", "128"],
                  ["8", "λ3072", "T2^25", "5362905", "5329933", "-32972", "10533", "10469", "128"],
                  ["9", "λ3072", "T2^20", "3674399", "3681448", "7049", "7493", "7397", "192"],
                  ["9", "λ3072", "T2^21", "3960968", "3968420", "7452", "8005", "7909", "192"],
                  ["9", "λ3072", "T2^22", "4311684", "4319595", "7911", "8517", "8421", "192"],
                  ["9", "λ3072", "T2^23", "4608408", "4616667", "8259", "9029", "8933", "192"],
                  ["9", "λ3072", "T2^24", "4940303", "4949044", "8741", "9541", "9445", "192"],
                  ["9", "λ3072", "T2^25", "5247605", "5256750", "9145", "10053", "9957", "192"],
                  ["10", "λ3072", "T2^20", "3773548", "3783406", "9858", "7045", "6885", "320"],
                  ["10", "λ3072", "T2^21", "4077525", "4087837", "10312", "7557", "7397", "320"],
                  ["10", "λ3072", "T2^22", "4400084", "4410804", "10720", "8069", "7909", "320"],
                  ["10", "λ3072", "T2^23", "4695175", "4706261", "11086", "8581", "8421", "320"],
                  ["10", "λ3072", "T2^24", "5027327", "5038906", "11579", "9093", "8933", "320"],
                  ["10", "λ3072", "T2^25", "5331092", "5343076", "11984", "9605", "9445", "320"],
                  ["11", "λ3072", "T2^20", "4278951", "4301250", "22299", "6661", "6373", "576"],
                  ["11", "λ3072", "T2^21", "4566155", "4588881", "22726", "7173", "6885", "576"],
                  ["11", "λ3072", "T2^22", "4886728", "4909883", "23155", "7685", "7397", "576"],
                  ["11", "λ3072", "T2^23", "5181256", "5204806", "23550", "8197", "7909", "576"],
                  ["11", "λ3072", "T2^24", "5515289", "5539352", "24063", "8709", "8421", "576"],
                  ["11", "λ3072", "T2^25", "5819049", "5843530", "24481", "9221", "8933", "576"],
                  ["12", "λ3072", "T2^20", "5608395", "5684200", "75805", "6405", "5861", "1088"],
                  ["12", "λ3072", "T2^21", "5902146", "5978430", "76284", "6917", "6373", "1088"],
                  ["12", "λ3072", "T2^22", "6215429", "6290718", "75289", "7429", "6885", "1088"],
                  ["12", "λ3072", "T2^23", "6504002", "6579735", "75733", "7941", "7397", "1088"],
                  ["12", "λ3072", "T2^24", "6834670", "6910953", "76283", "8453", "7909", "1088"],
                  ["12", "λ3072", "T2^25", "7132843", "7209593", "76750", "8965", "8421", "1088"],
                  ["13", "λ3072", "T2^20", "8505919", "8802101", "296182", "6405", "5349", "2112"],
                  ["13", "λ3072", "T2^21", "8785493", "9082264", "296771", "6917", "5861", "2112"],
                  ["13", "λ3072", "T2^22", "9093285", "9390653", "297368", "7429", "6373", "2112"],
                  ["13", "λ3072", "T2^23", "9380111", "9678043", "297932", "7941", "6885", "2112"],
                  ["13", "λ3072", "T2^24", "9709778", "10008375", "298597", "8453", "7397", "2112"],
                  [
                      "13",
                      "λ3072",
                      "T2^25",
                      "10005380",
                      "10304550",
                      "299170",
                      "8965",
                      "7909",
                      "2112",
                  ],
                  [
                      "14",
                      "λ3072",
                      "T2^20",
                      "14598539",
                      "15857349",
                      "1258810",
                      "6917",
                      "4837",
                      "4160",
                  ],
                  [
                      "14",
                      "λ3072",
                      "T2^21",
                      "14872689",
                      "16131766",
                      "1259077",
                      "7429",
                      "5349",
                      "4160",
                  ],
                  [
                      "14",
                      "λ3072",
                      "T2^22",
                      "15173689",
                      "16433009",
                      "1259320",
                      "7941",
                      "5861",
                      "4160",
                  ],
                  [
                      "14",
                      "λ3072",
                      "T2^23",
                      "15460868",
                      "16720402",
                      "1259534",
                      "8453",
                      "6373",
                      "4160",
                  ],
                  [
                      "14",
                      "λ3072",
                      "T2^24",
                      "15781599",
                      "17041394",
                      "1259795",
                      "8965",
                      "6885",
                      "4160",
                  ],
                  [
                      "14",
                      "λ3072",
                      "T2^25",
                      "16100711",
                      "17333150",
                      "1232439",
                      "9477",
                      "7397",
                      "4160",
                  ],
              ])
              console.table([
                  ["0", "λ2048", "T2^20", "3302946", "3312157", "9211", "9093", "9061", "64"],
                  ["0", "λ2048", "T2^21", "3471139", "3480711", "9572", "9477", "9445", "64"],
                  ["0", "λ2048", "T2^22", "3637127", "3646849", "9722", "9861", "9829", "64"],
                  ["0", "λ2048", "T2^23", "3819762", "3830066", "10304", "10245", "10213", "64"],
                  ["0", "λ2048", "T2^24", "3982966", "3993437", "10471", "10629", "10597", "64"],
                  ["0", "λ2048", "T2^25", "4173607", "4184472", "10865", "11013", "10981", "64"],
                  ["1", "λ2048", "T2^20", "3129888", "3138721", "8833", "8709", "8677", "64"],
                  ["1", "λ2048", "T2^21", "3296905", "3306100", "9195", "9093", "9061", "64"],
                  ["1", "λ2048", "T2^22", "3462352", "3471712", "9360", "9477", "9445", "64"],
                  ["1", "λ2048", "T2^23", "3643264", "3653199", "9935", "9861", "9829", "64"],
                  ["1", "λ2048", "T2^24", "3806699", "3816807", "10108", "10245", "10213", "64"],
                  ["1", "λ2048", "T2^25", "3996101", "4006588", "10487", "10629", "10597", "64"],
                  ["2", "λ2048", "T2^20", "2957935", "2966390", "8455", "8325", "8293", "64"],
                  ["2", "λ2048", "T2^21", "3123802", "3132609", "8807", "8709", "8677", "64"],
                  ["2", "λ2048", "T2^22", "3289911", "3298910", "8999", "9093", "9061", "64"],
                  ["2", "λ2048", "T2^23", "3469502", "3479066", "9564", "9477", "9445", "64"],
                  ["2", "λ2048", "T2^24", "3632004", "3641743", "9739", "9861", "9829", "64"],
                  ["2", "λ2048", "T2^25", "3820125", "3830250", "10125", "10245", "10213", "64"],
                  ["3", "λ2048", "T2^20", "2788794", "2796871", "8077", "7941", "7909", "64"],
                  ["3", "λ2048", "T2^21", "2954992", "2963430", "8438", "8325", "8293", "64"],
                  ["3", "λ2048", "T2^22", "3120055", "3128692", "8637", "8709", "8677", "64"],
                  ["3", "λ2048", "T2^23", "3297153", "3306348", "9195", "9093", "9061", "64"],
                  ["3", "λ2048", "T2^24", "3459606", "3468982", "9376", "9477", "9445", "64"],
                  ["3", "λ2048", "T2^25", "3645180", "3654935", "9755", "9861", "9829", "64"],
                  ["4", "λ2048", "T2^20", "2621201", "2628907", "7706", "7557", "7525", "64"],
                  ["4", "λ2048", "T2^21", "2786752", "2794827", "8075", "7941", "7909", "64"],
                  ["4", "λ2048", "T2^22", "2951184", "2959459", "8275", "8325", "8293", "64"],
                  ["4", "λ2048", "T2^23", "3129028", "3137852", "8824", "8709", "8677", "64"],
                  ["4", "λ2048", "T2^24", "3289495", "3298510", "9015", "9093", "9061", "64"],
                  ["4", "λ2048", "T2^25", "3475985", "3485370", "9385", "9477", "9445", "64"],
                  ["5", "λ2048", "T2^20", "2458855", "2466184", "7329", "7173", "7141", "64"],
                  ["5", "λ2048", "T2^21", "2621265", "2628963", "7698", "7557", "7525", "64"],
                  ["5", "λ2048", "T2^22", "2786572", "2794484", "7912", "7941", "7909", "64"],
                  ["5", "λ2048", "T2^23", "2965630", "2974084", "8454", "8325", "8293", "64"],
                  ["5", "λ2048", "T2^24", "3122786", "3131439", "8653", "8709", "8677", "64"],
                  ["5", "λ2048", "T2^25", "3307548", "3316571", "9023", "9093", "9061", "64"],
                  ["6", "λ2048", "T2^20", "2301248", "2308198", "6950", "6789", "6757", "64"],
                  ["6", "λ2048", "T2^21", "2463068", "2470396", "7328", "7173", "7141", "64"],
                  ["6", "λ2048", "T2^22", "2629421", "2636972", "7551", "7557", "7525", "64"],
                  ["6", "λ2048", "T2^23", "2805638", "2813722", "8084", "7941", "7909", "64"],
                  ["6", "λ2048", "T2^24", "2961725", "2970016", "8291", "8325", "8293", "64"],
                  ["6", "λ2048", "T2^25", "3146087", "3154740", "8653", "8709", "8677", "64"],
                  ["7", "λ2048", "T2^20", "2156560", "2163303", "6743", "6405", "6373", "64"],
                  ["7", "λ2048", "T2^21", "2319549", "2326657", "7108", "6789", "6757", "64"],
                  ["7", "λ2048", "T2^22", "2482828", "2490180", "7352", "7173", "7141", "64"],
                  ["7", "λ2048", "T2^23", "2658831", "2666704", "7873", "7557", "7525", "64"],
                  ["7", "λ2048", "T2^24", "2815915", "2824014", "8099", "7941", "7909", "64"],
                  ["7", "λ2048", "T2^25", "2996295", "3004761", "8466", "8325", "8293", "64"],
                  ["8", "λ2048", "T2^20", "2034652", "2041121", "6469", "6053", "5989", "128"],
                  ["8", "λ2048", "T2^21", "2198090", "2204927", "6837", "6437", "6373", "128"],
                  ["8", "λ2048", "T2^22", "2361460", "2368550", "7090", "6821", "6757", "128"],
                  ["8", "λ2048", "T2^23", "2535443", "2543048", "7605", "7205", "7141", "128"],
                  ["8", "λ2048", "T2^24", "2690239", "2698081", "7842", "7589", "7525", "128"],
                  ["8", "λ2048", "T2^25", "2870273", "2878483", "8210", "7973", "7909", "128"],
                  ["9", "λ2048", "T2^20", "1965084", "1964384", "-700", "5701", "5605", "192"],
                  ["9", "λ2048", "T2^21", "2127437", "2126479", "-958", "6085", "5989", "192"],
                  ["9", "λ2048", "T2^22", "2291549", "2290227", "-1322", "6469", "6373", "192"],
                  ["9", "λ2048", "T2^23", "2464333", "2462845", "-1488", "6853", "6757", "192"],
                  ["9", "λ2048", "T2^24", "2614515", "2617777", "3262", "7237", "7141", "192"],
                  ["9", "λ2048", "T2^25", "2793237", "2796526", "3289", "7621", "7525", "192"],
                  ["10", "λ2048", "T2^20", "1976833", "1986577", "9744", "5381", "5221", "320"],
                  ["10", "λ2048", "T2^21", "2138326", "2148451", "10125", "5765", "5605", "320"],
                  ["10", "λ2048", "T2^22", "2300850", "2311278", "10428", "6149", "5989", "320"],
                  ["10", "λ2048", "T2^23", "2472310", "2483244", "10934", "6533", "6373", "320"],
                  ["10", "λ2048", "T2^24", "2625474", "2636662", "11188", "6917", "6757", "320"],
                  ["10", "λ2048", "T2^25", "2799924", "2811495", "11571", "7301", "7141", "320"],
                  ["11", "λ2048", "T2^20", "2173899", "2187542", "13643", "5125", "4837", "576"],
                  ["11", "λ2048", "T2^21", "2326860", "2349328", "22468", "5509", "5221", "576"],
                  ["11", "λ2048", "T2^22", "2487936", "2510720", "22784", "5893", "5605", "576"],
                  ["11", "λ2048", "T2^23", "2656878", "2680177", "23299", "6277", "5989", "576"],
                  ["11", "λ2048", "T2^24", "2816624", "2840231", "23607", "6661", "6373", "576"],
                  ["11", "λ2048", "T2^25", "2989143", "3013150", "24007", "7045", "6757", "576"],
                  ["12", "λ2048", "T2^20", "2716247", "2791274", "75027", "4997", "4453", "1088"],
                  ["12", "λ2048", "T2^21", "2877537", "2952994", "75457", "5381", "4837", "1088"],
                  ["12", "λ2048", "T2^22", "3041044", "3116864", "75820", "5765", "5221", "1088"],
                  ["12", "λ2048", "T2^23", "3206428", "3282797", "76369", "6149", "5605", "1088"],
                  ["12", "λ2048", "T2^24", "3368935", "3438982", "70047", "6533", "5989", "1088"],
                  ["12", "λ2048", "T2^25", "3531987", "3609000", "77013", "6917", "6373", "1088"],
                  ["13", "λ2048", "T2^20", "3981689", "4299297", "317608", "5125", "4069", "2112"],
                  ["13", "λ2048", "T2^21", "4157915", "4460678", "302763", "5509", "4453", "2112"],
                  ["13", "λ2048", "T2^22", "4322558", "4625798", "303240", "5893", "4837", "2112"],
                  ["13", "λ2048", "T2^23", "4487592", "4791470", "303878", "6277", "5221", "2112"],
                  ["13", "λ2048", "T2^24", "4651958", "4956304", "304346", "6661", "5605", "2112"],
                  ["13", "λ2048", "T2^25", "4821549", "5126436", "304887", "7045", "5989", "2112"],
                  ["14", "λ2048", "T2^20", "6670191", "7912536", "1242345", "5765", "3685", "4160"],
                  ["14", "λ2048", "T2^21", "6826248", "8112301", "1286053", "6149", "4069", "4160"],
                  ["14", "λ2048", "T2^22", "6986702", "8273102", "1286400", "6533", "4453", "4160"],
                  ["14", "λ2048", "T2^23", "7148107", "8435014", "1286907", "6917", "4837", "4160"],
                  ["14", "λ2048", "T2^24", "7310591", "8597823", "1287232", "7301", "5221", "4160"],
                  ["14", "λ2048", "T2^25", "7473024", "8760656", "1287632", "7685", "5605", "4160"],
              ])
          })
          it("get function selector by keccak256", async () => {
              console.log(
                  ethers.id(
                      "verifyRecursiveHalvingProof((bytes,uint256)[],(bytes,uint256),(bytes,uint256),(bytes,uint256),bytes,uint256,uint256)",
                  ),
              )
          })
          it("add new line for each 32bytes", async () => {
              const data =
                  "00000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000148000000000000000000000000000000000000000000000000000000000000015e0000000000000000000000000000000000000000000000000000000000000174000000000000000000000000000000000000000000000000000000000000018a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000046000000000000000000000000000000000000000000000000000000000000005c00000000000000000000000000000000000000000000000000000000000000720000000000000000000000000000000000000000000000000000000000000088000000000000000000000000000000000000000000000000000000000000009e00000000000000000000000000000000000000000000000000000000000000b400000000000000000000000000000000000000000000000000000000000000ca00000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000f6000000000000000000000000000000000000000000000000000000000000010c00000000000000000000000000000000000000000000000000000000000001220000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007ff00000000000000000000000000000000000000000000000000000000000001004150b33f0addc33dd17758387d4c2ced2be967d89bba0a06229095dfb75197551f733f73dedf4b8041c4bb96fb6131530f0af15d75a87a19e537a5616d0f5dca7d1eaf688930a989ff0ce4a0d1cd4863e060698563ae05efd73f58dc55d673a68d992da2dd94cbfda28886b2996acc659b469bcb50828337a24ded6fb83ccb8f8a0d84309008d51f4b187b4ceee43040a7db8e11a25fed091a22d9d3c24fef0ce27002f834f76c6807a7ea5c6944d6bccb869fea953420e33606c405b39a9b9518ff8a301e6b82683abe5eee56c650a3ff950bdc3cfdac7fefe840230e3abf3ba07e9e93fe9121a25006a4c7311da7ee7266f38aa03c74d30eca20f165a58109000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007ff00000000000000000000000000000000000000000000000000000000000001004d2883f2d5f3a2a524634c72f06e19cb23bf87c8877d19562f3a9901e94410928ba313f7696ac0fc515d8f4ab506367a4cd0dafb55cacb6ba985431053fd8817cf16e6e65caa8103081cf604a0ffdf873cc150c8c90eb001d42b81e547e900f458109c4676b4114bc258374d327a75b3dcb08ca01a11aa5872f65489885df56910a2bb3cb26806ba69fe9561131c29338baca6bd3dc8ab82e0be26987568c59a62aafb4b23762f84a72b536eb663fe66a5dcb3fc8e2df8c54fe1409379ff722f3da81f316626ca3b35e74642f43bc71eeb59ceee63e25a0bc0a136a2176b01b0ffbb25a20e132c0b14606fa642d971c1a8a986535193fc7e827ce3ca8e523301000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fd000000000000000000000000000000000000000000000000000000000000010019e83eee8912d9fafb5dce18adceae7bec6bc7fcd48901b406068519c34a88c5d38d1b2597b4ab51d65d6a9a8e1c385c0be9621d28ef4114becc6af7f26e29797a179af92bd25014065528c79407c560038759b5849f28dad7ed1597eafa46d92accb5f6399c55e4873c03586f3c462fc5dc111af3713dea656bbdc43ecfa0d381104c0d7c8daa828d9fe3fb45d5c3d4c47fc0a5c01be1b25a70cbab51bb6a7fabbd3947996fe4a4d53d81671146ce3768a06b8563dd42aa5a23ab90f56269154134c186b853ce4277c574b837446a67ceb06a0ce5382e4a4edb54fca5c3cbb52908377165480e2775132652b4bbc6ad9dd660ed18a00691a88569cb5d701faf000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fe00000000000000000000000000000000000000000000000000000000000001002418df5653003b665a6ee685c70a09faf0c66b684e0d6f893e4bc5c95b3d7428990ce648a7e0dbb1cb9838c7c1d7475c056b2e84feb2199af00fb485c336c38236bd9cff64567fa2162f75336af21c2ef652745244a0437b85708f8537fb204a578828dd09e8903fe6e1729dd71683ee69c523d020475296b9d97ed3f14545e8b50903800b1481124d2327bfafde559effcf2795947f002a93954963390f141906f3e2a654be376ea66d625e5e65483ef93590e53bed6a09ea3383d545c90c87c9e1b3b0a1a6c50561cc3564640078c2b940411ead7dec4da7ffb1cecba28871bed5df9038a4f312c6dac055a90ff59734c94c5de459cf8fb41c41979b1654f3000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fe000000000000000000000000000000000000000000000000000000000000010029dee0b058bfd4b21f5606bb613b9b532e94e03f8132ca6eb49032a16967e5b493edb15fbc77de26ef290d405e1361bfb9f9bfdfa8d1a433bb6c7883b9d0b0a690cd362856ce8ca114f0354b28dcf25bb0612990b39ebebc05730edff6f7f2e39eba825703b1b4f47875c709264df64531d1d08442c4c7d08da9f48146a215bc2e24aab7fcf05d4dc73709a33d8fc2638f5aa12f1999ab8c985705ed6a3fc374d90f4e69aed799d798c5b70469e11027500a6ce9e60f5594fe5bd5d9e392c751978b5f602b3042a77b39536bc2c1c00bb5e3187cef9a8988a4f83eaf58ee91dabab11b530ced7f8eb4e5763fb48861e468179c9d0d87dde89e2b1bc71bfe95f6000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fe00000000000000000000000000000000000000000000000000000000000001002f7fb536d3f8ba110d8a1104083abfab3de69ecdb9e2dc6212d34c47a4c5251c0558ad52b6f013d744c3dcf7e5f507e6bcda1e2c618999846ae57bcd75bf97d279e7b16735ff731c60a6e7bc76a6055337563a9fc39393006646d8a9fac944eb14294fc7334449d1aa8b5d47be5314e23a3804e657483c6a5ccf7d31bd11176e823f9f76884847399f42c1074a2cb9c6a43b06c357488d89f8d432ca32d86b4cfbec45b3e316744423d870ad237924a593d6ebac1b3370b0d3b24a2b1e150b00b05a5db6fba27d95fc8148caad0eaa1211df14ee7357c82ae05f0d5513c2b63570268519fd21fbbfbb50fb24513a6c0238219d6fc8d47aa49b17c5b9828a5347000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fb00000000000000000000000000000000000000000000000000000000000001000539fea41a54453404d840695fe32cbd0957a5160ee2b4cf4353d90be082db469f19a07b3bfb17cdb3b28f04570160e10a6db3485057545a6044c7cecfdf7606e4f27e269bbfa396fc341364997dedc36a46e5dcb4856d2ed29ef37f4e4a3330e137aced1d096ed6761915224f3113a5cd4c64b0673755095d3132fa406e594c234cd1318925cd1c1298abf780a8fa504943233b94090b61c5cb895b9ef0ac3d7958720933cbc2bcc9c2aef747382f76bea48a886252c4ee3bf2fbe2169e03c77b369e56474d7f0f71e312b721cef8cbda709210232bffd17ce8569fdda236174d0f072cbf4ffd51030a156f0cab409a0f8fb05f1c7cc793121fb4410af5263a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fd00000000000000000000000000000000000000000000000000000000000001001f48c0d05bc3b48376e31ebef628638e0b5f81e69eb7d2d339eed5c4485ae1c39c793d8e7180381002b189644cbb8bf9a3fcfdd4a0fd3ef044725ddf67bb878d6c1fc43d7abcea6dde0e64620ed1aed0041c9d369f6c2f318ec9a8e7760a6265ff6d1c654138c9f299c91a3c00999db1b3b8741aaa14ee1ff790181b5bd3e0b8282ecea7b63df4106de2ffc73f30bf662007f4af0b5b6c6d4ca94ab137826e0a8b1d01150acd4c75153ec8312cbaf5b3ff76a64623a1550bc04541e1966ce6789fcc4f455aabe043870d327ea511bd6495dfccfc9d66027fb2d18efb467491905ee3f979cb341d032747070928d55038c1be063e36a785e0af1cc03f541f8621000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007ff0000000000000000000000000000000000000000000000000000000000000100429cdae2124b9b8cc4c8eafe9c0e04638947ed36667d6b1fccf82c78c669ed0c4235a0a1fa40117643fe660c3e3a1adf168fecd7b38656a4e81d87234c95e1d2d49475eac81bd6ec8394d6077800b2a9261d05c94576e3c25d8800de66825db2e5ec8f3b816adab9a23a063c2a5fd3df3891512400faf133b926daeb651c8d07e29c03ed8c50cb8f27463c85883b815b7897605a786cc35809940a33c1491634e9bb2f948337b804d1cc00f0bd9430d40b78ed7ab64c62e53cbd9b07662d63722654a7c666be227dc8cef1f892ee147c4da6f2416c1e061e10ff368420e3a6e4812e1a1cc91d3f81f646edf907d73376bec9f761736166a3f25d711fd642f75c000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fb0000000000000000000000000000000000000000000000000000000000000100055940142fcfe75d1d479030b2cb30b9807aa74091b5ae571b436b06be775da6fcf7ff8c95e31c1c37854e6a978025aeaa75c5eeaa7e5e41fc70d848911f860a03fdc232f61beb51d48172fdb04b1a4893cfbb007bfed7fb50bd0762dfd4409da964e48d1b14db3d76dc674302fc0d8f72e3d70dfc1b501f65b45590ffcbc9062dbad3d00a44b82540dff99a27b51acc35efcd561dc720d289757381dfc886317aa7eb2a0875df74527c62a99afebd6613e15ce0bc5ee1e0609b9c2fa193a52d0af94e670aa5c8d24198aebe9cd14c92bdb5ff9fd06030b6eea58e684a6765bb2418130f6230f9937400c532c6083fcbe044cdf71acae261e1c0e1abb7aa491b000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fd00000000000000000000000000000000000000000000000000000000000001001de5149e646915d49e34b392dcf93bed2c408f2eff20ae9d89b13fe7159224ba278a7c06e04d778d1e53a15236ed3c271fcbb9227ac30bbf6e8318a89eb10d4c6cef48a0a347b33d24b2853666753e52ed4cdfcd9d4ba0f358ede20df69666fb0e3f9bfbe0794c6ea9ebf4267d2c54e00bbffe50ed64ad14aab369b9140d536d8dcfd1490085a18219053d66b4aa11b34b35a13f02a5f993b238202c083935eeedf17a2d62c74003ea857476caf3be653ec38e3b0981962abda30c285b32e811788884d599b4f73903e8ee2db9a91f23e75e0cca1b726cc595e5b02113f2ffc84bbd931b37e6f2cf9b382affe0c279287faa5d1719e1cec4e18c1e9aae950f30000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fe0000000000000000000000000000000000000000000000000000000000000100286fa07f19457f040fdc1ab33424616bcabacfc321fe1fbf1f79525ec24b137b547a4731c64ee890babb4bb517f616f22fb4efb31d0bca95c7ce7fdf8ca676d68a04b02d61595333fcf145733525fdb8e2c67f643311dd44f0d1c5b1ec6166cbf844ac7da49933f74513e5cae00750f666325178e06432a0ee8adb5d108a5e9a8c2eddf965d0c6cedc1892a8d8ec4381cca6a25e9dccbf2129249e44da82d47058a2e01297fb755c21241274c8cebb1fcb0df6b4a6c399b59aa2cdab0f429bab06ccfaae7d4f0bfae2fb7489f9c5c45c5ff361ed7d5c1df396117039d3a910cd34cccc74dc7b2c5db4872cd7500af4205958219c47dd697a6d516cc6e816046e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fd00000000000000000000000000000000000000000000000000000000000001001071737078f4bf7af8866eb3717b17198bbe3ab824d43d14710be4f090ccdeba3ec71bac1315f701c5b9e354774dd9961fba73d89a7fd5fa2d996758697bb9a3f3aae72dca9bf7e0a25fbe14c2849d09afc791caffd00eafa3bab54056bff668dd61b6a41ebd9239caad9690a02135f3112106d08daa827fb36b5d4bf664f63dd947752012facca1c97afe8e34f12f5304af1d2e0c8d35a59f32c31404de24ce1e64d4f4992ec252dfb725fcfe60cfc5fc228f97e781c0bd5b6177dfe5246125aa05a00f8c9ad4cea5cf06b0adb78873ba03fa37aebd3c9662ce8808dd18cee1bcfde61e3af3fa50a5816943afb334a7a7a66ca26accfac7f439bfbfe231ace9000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fe000000000000000000000000000000000000000000000000000000000000010038e529da4f13d181bde19f9bed01f5c0b0d878f3c3f9ef2d9090e853184d93f1339ceae1462d35813811a3c5bed263c95b4ac973fc05e4a105e2085335ee46ea542eb6e327115aa7bd02340ad02210038223f894a75e51cf5d7a6ea24a5f0f59d24dae0cf838a9ef0f92127f506329717befc22d16d4dbdec430bed9c2ddcf9522fc2c33312abe9789bb115a79c8f96d3cccce995c392b4075c551c176f42e1ce38b2d382df1e2d1f491f1737a959398e76480d0316a31eec02c3c5e202954a06c7d442cd5cceb626c5cbb8831bbd634eb15a4bdf5fc3aa5c35b8cb93fa8be0ceb4529c40b8137bd3b2a3fe0b26b93f5be6fbd5602c5b33aaeba0c7b85b5e1ab000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007fd00000000000000000000000000000000000000000000000000000000000001001f2e87cc69a58369d67f80e9f875039467069966fd027fd767c76ac5688e7200652ab6326adfb8e3afc2292ffe0117dc77640eaa21e641ed138aa5040851da59a737951e9535d2a73eaa7d5f9c6974dacdedfc7b958a557eef6a94e637ea3be22364b80beb408f229f2a71875e823078752a2f9408a623069160d470574e8105c047ff8c6fe59a0cd65d257f01702fb126c78f1c94ab83f4999e2862dd8490267dcac83887f0c3e05dc1547337f8801282a95d387e99aeaeda204eeb20ead6b753504edc2e21b6f804800cf3ac00f01483ed078d7b3d6da4c072bd53f7981154e2de5052b678d6f287ba282b800f87b9179f78f1c437dc5441101440a89b4436000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000007ff00000000000000000000000000000000000000000000000000000000000001004e502cc741a1a63c4ae0cea62d6eefae5d0395e137075a15b515f0ced5c811334f06272c0f1e85c1bed5445025b039e42d0a949989e2c210c9b68b9af5ada8c0f72fa445ce8f4af9a2e56478c8a6b17a6f1c389445467fe096a4c35262e4b06a6ba67a419bcca5d565e698ead674fca78e5d91fdc18f854b8e43edbca302c5d2d2d47ce49afb7405a4db2e87c98c2fd0718af32c1881e4d6d762f624de2d57663754aedfb02cbcc944812d2f8de4f694c933a1c11ecdbb2e67cf22f410487d598ef3d82190feabf11b5a83a4a058cdda1def94cd244fd30412eb8fa6d467398c21a15af04bf55078d9c73e12e3d0f5939804845b1487fae1fb526fa583e27d7100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000200"
              let dataLocation = "  00"
              for (let i = 0; i < data.length; i += 64) {
                  console.log(data.slice(i, i + 64))
                  //   dataLocation = (parseInt(dataLocation, 16) + 32).toString(16).padStart(4, " ")
              }
              for (let i = 0; i < data.length; i += 64) {
                  console.log(dataLocation)
                  dataLocation = (parseInt(dataLocation, 16) + 32).toString(16).padStart(4, " ")
              }
          })
      })
