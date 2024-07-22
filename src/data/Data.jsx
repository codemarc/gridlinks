// import blank from "./blank.yaml"
import p0 from "./p0.yaml"
import p1 from "./p1.yaml"
import p2 from "./p2.yaml"
import p3 from "./p3.yaml"
import p4 from "./devops.yaml"
import p5 from "./p5.yaml"
import p6 from "./amazon.yaml"
import p7 from "./apache.yaml"
import p8 from "./shopify.yaml"

import google from "./google.yaml"
import apache from "./apache.yaml"
import shopify from "./shopify.yaml"
import fintech from "./fintech.yaml"
import banking from "./banking.yaml"
import house from "./house.yaml"
import entertain from "./entertain.yaml"
import cloud from "./cloud.yaml"

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
      sdata.p3 = p3
      sdata.p4 = p4
      sdata.p5 = p5
      sdata.p6 = p6
      sdata.p7 = google
      sdata.p8 = apache
   } else {
      // alternate
      switch (ls.gd) {
         case "personal":
            sdata.p1 = p1
            sdata.p2 = fintech
            sdata.p3 = banking
            sdata.p4 = house
            sdata.p5 = p3
            sdata.p6 = cloud
            sdata.p7 = p0
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
