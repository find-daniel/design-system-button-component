import Button from './components/Button';

export default function Home() {
  return (
    <main className="flex justify-center">
      <section className="ml-6 mr-[28px] mt-[112px] flex flex-col gap-12 md:mr-6">
        <div className="inline-flex flex-wrap items-center gap-5">
          <Button size="md" type="primary" text="Button CTA" />
          <Button size="lg" type="primary" icon="left" text="Button CTA" />
          <Button size="xl" type="primary" icon="right" text="Button CTA" />
          <Button size="2xl" type="primary" text="Button CTA" />
          <Button size="md" type="primary" icon="both" text="Button CTA" iconOnly />
        </div>
        <div className="flex flex-wrap gap-5">
          <Button size="md" type="primary" text="Button CTA" />
          <Button size="lg" type="primary" icon="left" text="Button CTA" />
          <Button size="xl" type="primary" icon="right" text="Button CTA" />
          <Button size="2xl" type="primary" text="Button CTA" />
          <Button size="md" type="primary" icon="both" text="Button CTA" iconOnly />
        </div>
      </section>

      <div className="credits">
        A challenge by
        <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
          &nbsp;GreatFrontEnd Projects
        </a>
        . Built by
        <a href="https://www.greatfrontend.com/projects/u/danieo" target="_blank">
          &nbsp;danieo
        </a>
        .
      </div>
    </main>
  );
}
