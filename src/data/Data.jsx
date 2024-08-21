// import blank from "./blank.yaml"
// import p0 from "./p0.yaml"

import amzn from "./amzn.yaml"
import apache from "./apache.yaml"
import banking from "./banking.yaml"
import cloud from "./cloud.yaml"
import comms from "./comms.yaml"
import devops from "./devops.yaml"
import devtools from "./devtools.yaml"
import entertain from "./entertain.yaml"
import fintech from "./fintech.yaml"
import genai from "./genai.yaml"
import google from "./google.yaml"
import house from "./house.yaml"
import msft from "./msft.yaml"
import services from "./services.yaml"
import shopify from "./shopify.yaml"


const sdata = {}

export default function pdata(ls) {
   if (!ls.gs) {
      // default - builtin
      sdata.p1 = comms
      sdata.p2 = devtools
      sdata.p3 = genai
      sdata.p4 = devops
      sdata.p5 = msft
      sdata.p6 = amzn
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
