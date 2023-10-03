import Head from "next/head";
import Image from "next/image";
import { TextBlock } from "../components/TextBlock";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Martial Path Institute</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl w-full max-w-3xl mb-8 px-12">
          The Open Martial Path Institute, LLC offers classes in traditional
          Korean martial arts in the form of Hapkido and Kumdo, as well as the
          modern comprehensive eclectic Yuen Sou Fa. Separate classes in Tai Chi
          Chuan and self defense are also available.
        </p>

        <p className="text-lg font-semibold w-full max-w-3xl mb-8 px-12">
          We are governed and sanctioned by the World Kido Federation, Hanminjok
          Hapkido Association, SunDoKwan, and Circle Hand Method Self Defense
          Association.
        </p>

        <Image
          className="w-full sm:w-3/4 sm:rounded-lg mb-8"
          src="/pose-1.png"
          alt="Group of students with Mr. Hall showing sword stance"
          width={700}
          height={600}
        />

        <TextBlock className="px-12">
          The Open Martial Path Institute was founded in 2012 with facilities
          being located and built out in early 2013. Our doors were officially
          opened in February of that year. School founder David A. Hall is a
          firm believer in providence. That, along with encouragement from his
          devoted wife, is what ultimately encouraged him to move from teaching
          private lessons part time around the tri-county area to founding the
          school. By combining his efforts with those of other well-rounded
          martial artists, he hopes to create a Kwan that will take on a life of
          its own.
        </TextBlock>

        <TextBlock className="px-12">
          Ultimately, it is our wish to build a martial arts family that fosters
          integrity, knowledge, and training in the highest regard.
        </TextBlock>

        <Image
          className="w-full sm:w-3/4 sm:rounded-lg mb-8"
          src="/pose-2.png"
          alt="Group of students with Mr. Hall practicing"
          width={700}
          height={600}
        />

        <p className="text-lg font-semibold w-full max-w-3xl mb-8 px-12">
          Chief Instructor Mr. Hall has over 45 years of collective experience
          across multiple disciplines.
        </p>

        <TextBlock className="px-12">
          Mr. Hall takes students for all disciplines on a smaller scale and
          still teaches around the tri-county area. He is also available for
          seminars and Health and Wellness Programs in the area.
        </TextBlock>

        <TextBlock className="px-12">
          OMPI strives to foster a sense of serenity, as well as intense focus.
          Classes are private and meet in different locations depending on
          discipline and student body participation.{" "}
          <a
            className="underline underline-offset-2 hover:text-yellow-500 dark:hover:text-yellow-300"
            href="tel:+16018428862"
          >
            Call
          </a>{" "}
          or{" "}
          <a
            className="underline underline-offset-2 hover:text-yellow-500 dark:hover:text-yellow-300"
            href="mailto:info@ompinstitute.com"
          >
            email
          </a>{" "}
          for specifics.
        </TextBlock>

        <div className="flex flex-col sm:flex-row sm:gap-8">
          <Image
            className="w-full sm:w-1/2 mb-8 sm:mb-0 sm:rounded-lg"
            src="/pose-3.png"
            alt="Group of students with Mr. Hall practicing"
            width={300}
            height={400}
          />
          <Image
            className="w-full sm:w-1/2 sm:rounded-lg"
            src="/pose-4.png"
            alt="Group of students with Mr. Hall practicing"
            width={300}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
