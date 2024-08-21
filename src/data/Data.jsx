// import blank from "./blank.yaml"
// import p0 from "./p0.yaml"
import p1 from "./comms.yaml"
import p2 from "./devtools.yaml"
import p3 from "./genai.yaml"
import p4 from "./devops.yaml"
import p5 from "./p5.yaml"
import p6 from "./amazon.yaml"
import p7 from "./apache.yaml"
import p8 from "./shopify.yaml"


import apache from "./apache.yaml"
import banking from "./banking.yaml"
import cloud from "./cloud.yaml"
import comms from "./comms.yaml"
import entertain from "./entertain.yaml"
import fintech from "./fintech.yaml"
import genai from "./genai.yaml"
import google from "./google.yaml"
import house from "./house.yaml"
import services from "./services.yaml"
import shopify from "./shopify.yaml"


const sdata = {
   p1: p1,
   p2: p2,
   p3: p3,
   p4: p4,
   p5: p5,
   p6: p6,
   p7: p7,
   p8: p8,
}

export default function pdata(ls) {
   if (!ls.gs) {
      // default - builtin
      sdata.p1 = p1
      sdata.p2 = p2
      sdata.p3 = genai
      sdata.p4 = p4
      sdata.p5 = p5
      sdata.p6 = p6
      sdata.p7 = google
      sdata.p8 = apache
   } else {
      // alternate
      switch (ls.gd) {
         case "personal":
            sdata.p1 = comms
            sdata.p2 = fintech
            sdata.p3 = banking
            sdata.p4 = house
            sdata.p5 = genai
            sdata.p6 = cloud
            sdata.p7 = services
            sdata.p8 = entertain
            break

         case "ecomerce":
            break

         default:
            sdata.p7 = apache
            sdata.p8 = shopify
      }
   }

   return sdata
}
