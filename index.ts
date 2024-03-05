import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        // //create user and article and association 
        // const user = await prisma.user.create({
        //     data: {
        //         name: "LMAO",
        //         email: "LMAO@gmail.com",
        //         articles: {
        //             create: {
        //                     title: "LAMOS FIRST ARTICLE",
        //                     body:'body of LAMOS'
                            
        //                 }
        //             }
        //         }
                
        //     }
        // )

        const createOneMore = await prisma.article.create({
            data: {
                title: "this is extra title",
                body: "this is one more extra body",
                author: {
                    connect: {
                        id:2,
                    }
                }
            }
        })
console.log(createOneMore)
        const users = await prisma.user.findMany({
            include: {
            articles:true,
        }})
       console.log(users)
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
