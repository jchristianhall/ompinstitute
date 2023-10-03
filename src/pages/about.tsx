import Head from "next/head";
import Image from "next/image";
import { TextBlock } from "../components/TextBlock";

export default function About() {
  return (
    <>
      <Head>
        <title>Open Martial Path Institute - About</title>
        <meta
          name="description"
          content="The Open Martial Path Institute, LLC offers classes in traditional Korean martial arts in the form of Hapkido and Kumdo, as well as the modern comprehensive eclectic Yuen Sou Fa. Separate classes in Tai Chi Chuan and self defense are also available."
        />
        <meta
          property="og:title"
          content="Open Martial Path Institute - About"
          key="title"
        />
        <meta
          property="og:description"
          content="The four cornerstones of our Kwan are Hapkido, Kumdo, Yuen Sou Fa, and
          Tai Chi Chuan."
        />
        <meta property="og:image" content="/david.png" />
        <meta property="og:url" content="https://ompinstitute.com/about" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center flex-col md:flex-row mb-12">
          <Image
            className="w-full sm:w-3/4 md:w-1/3 sm:mb-4 rounded-lg"
            src="/david.png"
            alt="Chief Instructor Mr. Hall"
            width={300}
            height={400}
          />
          <div className="flex flex-col bg-white dark:bg-zinc-800 px-8 pt-8 rounded-r-lg">
            <h2 className="text-2xl text-yellow-500 dark:text-yellow-300 font-semibold mb-2">
              David A. Hall - Chief Instructor
            </h2>
            <TextBlock>
              Mr. Hall has been studying, training, and teaching martial arts
              for over 45 years. He holds black belts and certifications in
              multiple systems across several disciplines. With his extensive
              experience with these traditional and eclectic systems, he has
              come to understand the need to coalesce the core of our Kwan with
              multiple offerings in order to offer a broad range of
              possibilities for the discerning public. Mr. Hall has gone to
              extensive lengths to have the Kwan sanctioned by all relative
              governing bodies so that any rank or certification earned here is
              honored worldwide.
            </TextBlock>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-8 w-full max-w-3xl px-12">
          The four cornerstones of our Kwan are Hapkido, Kumdo, Yuen Sou Fa, and
          Tai Chi Chuan.
        </h3>

        <div className="flex w-full justify-center items-center max-w-2xl mb-8 px-12">
          <Image
            className="w-1/3"
            src="/hapkido.png"
            alt="Hapkido Symbol"
            width={200}
            height={200}
          />
        </div>

        <div className="w-full max-w-3xl px-12">
          <h2 className="text-2xl text-yellow-500 dark:text-yellow-300 font-semibold mb-2">
            Hapkido
          </h2>

          <TextBlock>
            Hapkido is a &ldquo;hard/soft&rdquo; internal art with modern and
            ancient lineages. We teach a curriculum that is very comprehensive.
            OMPI utilizes several Hapkido system basics and Kuk Sool
            curriculums. Along with empty hand techniques and forms (hyungs),
            there are weapons techniques and forms taught as well. This, along
            with history, etiquette, philosophy, and cultural terminology, give
            this traditional art a well-rounded structure.
          </TextBlock>

          <TextBlock>
            We are member school of the World Kido Federation/Hanminjok Hapkido
            Association. Any belt rank in Hapkido earned here is legitimate in
            lineage all the way back to country of origin.
          </TextBlock>
        </div>

        <div className="flex w-full justify-center items-center max-w-2xl mb-8 px-12">
          <Image
            className="w-1/3"
            src="/kumdo.png"
            alt="Kumdo Symbol"
            width={200}
            height={200}
          />
        </div>

        <div className="w-full max-w-3xl px-12">
          <h2 className="text-2xl text-yellow-500 dark:text-yellow-300 font-semibold mb-2">
            Kumdo
          </h2>

          <TextBlock>
            Kumdo is a fully comprehensive sword art. It utilizes all aspects of
            sword training, from stances to strikes and all points in between.
            We teach the mok kum (wooden sword), jukdo (slatted bamboo sword),
            ka gum (cast aluminum practice sword), jin gum (live blade or real
            forged blade) and foam sword (padded blade). All of these help
            provide the student a greater understanding of the proper handling,
            posture, movement, and force required for each instrument.
            Traditional Korean archery (zen) is taught at the dan grade (black
            belt) level as well. Our belt rank structure is separate from
            Hapkido, so rank is earned in two individual arts if studying both
            simultaneously.
          </TextBlock>
        </div>

        <div className="flex w-full justify-center items-center max-w-2xl mb-8 px-12">
          <Image
            className="w-1/3"
            src="/circle-hand.png"
            alt="Yuen Sou Fa Symbol"
            width={200}
            height={200}
          />
        </div>

        <div className="w-full max-w-3xl px-12">
          <h2 className="text-2xl text-yellow-500 dark:text-yellow-300 font-semibold mb-2">
            Yuen Sou Fa
          </h2>

          <TextBlock>
            Yuen Sou Fa literally translates as &ldquo;circle hand
            method.&rdquo; It is a modern eclectic system that borrows from
            multiple disciplines across several cultures. Among these are Tai
            Chi Chuan, Hsing I Chuan, Pa Kua Chang, Filipino arts, Muk Jong
            (wooden dummy applications), and Chin-Na. This, along with a
            blending of what OMPI offers in other disciplines, serves to yield a
            unique symbiosis of internal arts. Because of the nature of the
            curriculum, the required age of students is 12 and up. There are
            certified class levels of achievement, and the curriculum is
            governed by the Circle Hand Method Self Defense Association
            (CHMSDA). Certificates of class level are basic, intermediate,
            advanced, and instructor.
          </TextBlock>
        </div>

        <div className="flex w-full justify-center items-center max-w-2xl mb-8 px-12">
          <Image
            className="w-1/3 dark:border dark:border-white dark:rounded-full"
            src="/yin-yang.svg"
            alt="Yin Yang Symbol"
            width={200}
            height={200}
          />
        </div>

        <div className="w-full max-w-3xl px-12">
          <h2 className="text-2xl text-yellow-500 dark:text-yellow-300 font-semibold mb-2">
            Tai Chi Chuan
          </h2>

          <TextBlock>
            We teach several forms from different &ldquo;families&rdquo; of Tai
            Chi Chuan here at OMPI. We offer the 6 Forms, 13 Golden Postures,
            Peking Form (Simplified 24 Short Form), Tai Chi Fan (18 Single Fan
            Form), Tai Chi Jian (32 Sword Form), Sun Short Form (36), along with
            8 Immortals Cane. These are all learned in the general order listed
            with the exception of the Fan form being taught at different levels
            based on individual students&rsquo; progression. Separate classes
            and community enrichment courses for colleges are available.
            Individuals are able to earn certificates of completion for each
            form learned and can then certify at a secondary level for martial
            application of each separate form.
          </TextBlock>
        </div>

        <div className="w-full max-w-3xl mb-12 px-12">
          <h2 className="text-2xl text-yellow-500 dark:text-yellow-300 font-semibold mb-2">
            Self Defense
          </h2>

          <TextBlock>
            OMPI offers separate classes and seminars in self defense that are
            tailored to the specific group that is participating. For example,
            the core curriculum for each class or session could be general self
            defense, ladies&rsquo; self defense, law enforcement control and
            containment, or security assessment. We can host the class or
            seminar at the Kwan or at an offsite location based on logistical
            need. Certificates are awarded for seminars and courses if
            completed.
          </TextBlock>
        </div>
      </div>
    </>
  );
}
