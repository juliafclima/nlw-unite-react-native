import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';

import { prisma } from '../lib/prisma';

export async function fetchEvents(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/events",
    {
      schema: {
        summary: "Fetch events",
        tags: ["events"],
        response: {
          200: z.object({
            events: z.array(
              z.object({
                id: z.string(),
                title: z.string(),
              })
            ),
          }),
        },
      },
    },
    async (request, reply) => {
      const events = await prisma.event.findMany({
        select: {
          id: true,
          title: true,
        },
        /* where: {
          status: true,
        }, */
      });

      return reply.send({
        events: events.map((event) => {
          return {
            id: event.id,
            title: event.title,
          };
        }),
      });
    }
  );
}
